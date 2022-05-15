import styled from "styled-components";
import SideBarAdmin from "./SideBarAdmin";
import Header from "../header/Header";
import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../GlobalState'
import Loading from '../mainpages/utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'

const initialState = {
    weddingPlan_id: '',
    title: '',
    vendor_1: '',
    category_1: '',
    price_1: 1000,
    max_price_1: 50000,
    description_1: 'Our elegant flower arrangements will delight your guests as much as they delight you. Choose us to arrange your lovely memorable moments. ',
    address_1: '',
    vendor_2: '',
    category_2: '',
    price_2: 1000,
    max_price_2: 50000,
    description_2: 'Our elegant flower arrangements will delight your guests as much as they delight you. Choose us to arrange your lovely memorable moments. ',
    address_2: '',
    vendor_3: '',
    category_3: '',
    price_3: 1000,
    max_price_3: 50000,
    description_3: 'Our elegant flower arrangements will delight your guests as much as they delight you. Choose us to arrange your lovely memorable moments. ',
    address_3: '',
    _id: ''
}

const WeddingPlanManagement = () => {
    const state = useContext(GlobalState)
    const [weddingPlan, setWeddingPlan] = useState(initialState)
    const [images_1, setImages1] = useState(false)
    const [images_2, setImages2] = useState(false)
    const [images_3, setImages3] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const history = useHistory()
    const param = useParams()
    const [weddingPlans] = state.weddingPlansAPI.weddingPlans
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            weddingPlans.forEach(weddingPlan => {
                if(weddingPlan._id === param.id) {
                    setWeddingPlan(weddingPlan)
                    setImages1(weddingPlan.images_1)
                    setImages2(weddingPlan.images_2)
                    setImages3(weddingPlan.images_3)
                }
            })
        }else{
            setOnEdit(false)
            setWeddingPlan(initialState)
            setImages1(false)
            setImages2(false)
            setImages3(false)
        }
    }, [param.id, weddingPlans])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]
            
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setImages1(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if(!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images_1.public_id}, {
                headers: {Authorization: token}
            })
            setLoading(false)
            setImages1(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setWeddingPlan({...weddingPlan, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
            if(!images_1) return alert("No Image Upload")

            if(onEdit){
                await axios.put(`/api/wedding_plans/${weddingPlan._id}`, {...weddingPlan, images_1}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/wedding_plans', {...weddingPlan, images_1}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(!callback)
            history.push("/wedding_plans")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images_1 ? "block" : "none"
    }


    return (
        <Container>
            <Header/>
            <SideBarAdmin/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Text4>Wedding Plan Management</Text4>
            <Content>
                <div className="create_product">
                    <div className="upload">
                        <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                        {
                            loading ? <div id="file_img"><Loading /></div>
                            :<div id="file_img" style={styleUpload}>
                                <img src={images_1 ? images_1.url : ''} alt=""/>
                                <span onClick={handleDestroy}>X</span>
                            </div>
                        }
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <label htmlFor="product_id">Wedding Plan ID</label>
                            <input type="text" name="weddingPlan_id" id="weddingPlan_id" required
                            value={weddingPlan.weddingPlan_id} onChange={handleChangeInput} disabled={onEdit} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" required
                            value={weddingPlan.title} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Vendor Name</label>
                            <input type="text" name="vendor_1" id="vendor_1" required
                            value={weddingPlan.vendor_1} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Category of Vendor</label>
                            <input type="text" name="category_1" id="category_1" required
                            value={weddingPlan.category_1} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price_1" id="price_1" required
                            value={weddingPlan.price_1} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Maximum Price</label>
                            <input type="number" name="max_price_1" id="max_price_1" 
                            value={weddingPlan.max_price_1} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" name="description_1" id="description_1" required
                            value={weddingPlan.description_1} rows="5" onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Address</label>
                            <input type="text" name="address_1" id="address_1" required
                            value={weddingPlan.address_1} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Vendor Name</label>
                            <input type="text" name="vendor_2" id="vendor_2" required
                            value={weddingPlan.vendor_2} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Category of Vendor</label>
                            <input type="text" name="category_2" id="category_2" required
                            value={weddingPlan.category_2} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price_2" id="price_2" required
                            value={weddingPlan.price_2} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Maximum Price</label>
                            <input type="number" name="max_price_2" id="max_price_2" 
                            value={weddingPlan.max_price_2} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" name="description_2" id="description_2" required
                            value={weddingPlan.description_2} rows="5" onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Address</label>
                            <input type="text" name="address_2" id="address_2" required
                            value={weddingPlan.address_2} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Vendor Name</label>
                            <input type="text" name="vendor_3" id="vendor_3" 
                            value={weddingPlan.vendor_3} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Category of Vendor</label>
                            <input type="text" name="category_3" id="category_3" 
                            value={weddingPlan.category_3} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price_3" id="price_3" 
                            value={weddingPlan.price_3} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Maximum Price</label>
                            <input type="number" name="max_price_3" id="max_price_3" 
                            value={weddingPlan.max_price_3} onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" name="description_3" id="description_3" 
                            value={weddingPlan.description_3} rows="5" onChange={handleChangeInput} />
                        </div>
                        <div className="row">
                            <label htmlFor="title">Address</label>
                            <input type="text" name="address_3" id="address_3" 
                            value={weddingPlan.address_3} onChange={handleChangeInput} />
                        </div>
                        <button type="submit">{onEdit? "Update" : "Create"}</button>
                    </form>
                </div>
            </Content>
        </Container>   
    );
};

const Container = styled.div`

`;

const Content = styled.div`
margin-left: 250px;
margin-right: 50px;
`;

const Bg = styled.div`
    min-height: 1500px;
    width: 100%;
    background-color: #FFF;
`;

const Text4 = styled.div`
    margin-left: 265px;
    font-size: 25px;
    color: rgb(78, 6, 69);
    font-weight: 700;
    text-transform: uppercase;
`;

export default WeddingPlanManagement;