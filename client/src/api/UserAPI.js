import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [name, setName] = useState([])
    const [user, setUser] = useState([])
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isEmployee, setIsEmployee] = useState(false)
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    const [confirmed_vendors, setConfirmedVendors] = useState([])
    const [wish_to_buy, setWishToBuy] = useState([])
    const [wish_to_buy_wedding_plans, setWishToBuyWeddingPlans] = useState([])
    const [confirmed_wedding_plans, setConfirmedWeddingPlans] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                    setUser(res.data)
                    setName(res.data.name)
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    res.data.role === 2 ? setIsEmployee(true) : setIsEmployee(false)
                    
                    setCart(res.data.cart)
                    setConfirmedVendors(res.data.confirmed_vendors)
                    setWishToBuy(res.data.wish_to_buy)
                    setConfirmedWeddingPlans(res.data.confirmed_wedding_plans)
                    setWishToBuyWeddingPlans(res.data.wish_to_buy_wedding_plans)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])
    
    const addCart = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert("This Vendor Service has been added to your Cart.")
        }
    }

    const addConfirmedVendors = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = confirmed_vendors.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setConfirmedVendors([...confirmed_vendors, {...product, quantity: 1}])

            await axios.patch('/user/addconfirmed_vendors', {confirmed_vendors: [...confirmed_vendors, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert("This Vendor Service has been added to Confirmed Vendors in your profile.")
        }
    }

    const addWishToBuy = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = wish_to_buy.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setWishToBuy([...wish_to_buy, {...product, quantity: 1}])

            await axios.patch('/user/addwish_to_buy', {wish_to_buy: [...wish_to_buy, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert("This vendor Service has been added to Your Wish List and Check it on your Profile.")
        }
    }

    const addConfirmedWeddingPlans = async (weddingPlan) => {
        if(!isLogged) return alert("Please login to continue confirming the Wedding Plan")

        const check = confirmed_wedding_plans.every(item =>{
            return item._id !== weddingPlan._id
        })

        if(check){
            setConfirmedWeddingPlans([...confirmed_wedding_plans, {...weddingPlan, quantity: 1}])

            await axios.patch('/user/addconfirmed_wedding_plans', {confirmed_wedding_plans: [...confirmed_wedding_plans, {...weddingPlan, quantity: 1}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert('This Wedding Plan has been added to "C Wedding Plan" of your profile.')
        }
    }

    const addWishToBuyWeddingPlans = async (weddingPlan) => {
        if(!isLogged) return alert("Please login to continue adding the Wedding Plan in Your Profile")

        const check = wish_to_buy_wedding_plans.every(item =>{
            return item._id !== weddingPlan._id
        })

        if(check){
            setWishToBuyWeddingPlans([...wish_to_buy_wedding_plans, {...weddingPlan, quantity: 1}])

            await axios.patch('/user/addwish_to_buy_wedding_plans', {wish_to_buy_wedding_plans: [...wish_to_buy_wedding_plans, {...weddingPlan, quantity: 1}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert('This Wedding Plan has been added to Your Wish List and check it on "WL Wedding Plans" of Your Profile.')
        }
    }
    
    return {
        name: [name, setName],
        user: [user, setUser],
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        isEmployee: [isEmployee, setIsEmployee],
        cart: [cart, setCart],
        addCart: addCart,
        confirmed_vendors: [confirmed_vendors, setConfirmedVendors],
        addConfirmedVendors: addConfirmedVendors,
        wish_to_buy: [wish_to_buy, setWishToBuy],
        addWishToBuy: addWishToBuy,
        confirmed_wedding_plans: [confirmed_wedding_plans, setConfirmedWeddingPlans],
        addConfirmedWeddingPlans: addConfirmedWeddingPlans,
        wish_to_buy_wedding_plans: [wish_to_buy_wedding_plans, setWishToBuyWeddingPlans],
        addWishToBuyWeddingPlans: addWishToBuyWeddingPlans,
        history: [history, setHistory],
    }
}

export default UserAPI
 