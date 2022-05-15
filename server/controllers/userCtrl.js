import Users from '../models/userModel.js'
import Payments from '../models/paymentModel.js'
import { hash, compare } from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = async (req, res) =>{
        try {
            const {name, email, contactFirst, contactSecond, password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})

            // Password Encryption
            const passwordHash = await hash(password, 10)
            const newUser = new Users({
                name, email, contactFirst, contactSecond, password: passwordHash
            })

            // Save mongodb
            await newUser.save()

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({id: newUser._id})
            const refreshtoken = createRefreshToken({id: newUser._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    };

export const login = async (req, res) =>{
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    };

export const logout = async (req, res) =>{
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    };

export const refreshToken = (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    };

export const getUser = async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    };

export const addCart = async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await Users.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })

            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    };

export const history = async(req, res) =>{
        try {
            const history = await Payments.find({user_id: req.user.id})

            res.json(history)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    };

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
};
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
};




//////////////////////////////////////////////////////////////////////////////
////////////////////////// get ALL User's info to front end //////////////////////
//////////////////////////////////////////////////////////////////////////////
class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
};


export const getUsers = async(req, res) =>{
    try {
        const features = new APIfeatures(Users.find(), req.query)
        .filtering().sorting().paginating()

        const users = await features.query

        res.json({
            status: 'success',
            result: users.length,
            users: users
        })
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};
//////////////////////////////////////////////////////////////////////////////
////////////////////////// get ALL User's info to front end //////////////////////
//////////////////////////////////////////////////////////////////////////////

export const addConfirmedVendors = async (req, res) =>{
    try {
        const user = await Users.findById(req.user.id)
        if(!user) return res.status(400).json({msg: "User does not exist."})

        await Users.findOneAndUpdate({_id: req.user.id}, {
            confirmed_vendors: req.body.confirmed_vendors
        })

        return res.json({msg: "Added to confirmed services of vendors"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const addWishToBuy = async (req, res) =>{
    try {
        const user = await Users.findById(req.user.id)
        if(!user) return res.status(400).json({msg: "User does not exist."})

        await Users.findOneAndUpdate({_id: req.user.id}, {
            wish_to_buy: req.body.wish_to_buy
        })

        return res.json({msg: "Added to Wish to buy Cart"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};



export const addConfirmedWeddingPlans = async (req, res) =>{
    try {
        const user = await Users.findById(req.user.id)
        if(!user) return res.status(400).json({msg: "User does not exist."})

        await Users.findOneAndUpdate({_id: req.user.id}, {
            confirmed_wedding_plans: req.body.confirmed_wedding_plans
        })

        return res.json({msg: "Wedding Plan Added to Confirmed Wedding Plan page in Your Profile. please check Your Profile."})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const addWishToBuyWeddingPlans = async (req, res) =>{
    try {
        const user = await Users.findById(req.user.id)
        if(!user) return res.status(400).json({msg: "User does not exist."})

        await Users.findOneAndUpdate({_id: req.user.id}, {
            wish_to_buy_wedding_plans: req.body.wish_to_buy_wedding_plans
        })

        return res.json({msg: "Added to Wish to buy Cart"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};


export const updateUser = async(req, res) =>{
    try {
        const {emp_name, emp_contact, progress} = req.body;
        await Users.findOneAndUpdate({_id: req.params.id}, {emp_name, emp_contact, progress})

        res.json({msg: "Assigned a Employee for a Confirmed Customer"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

};

export const updateUserProgress = async(req, res) =>{
    try {
        const {progress} = req.body;
        await Users.findOneAndUpdate({_id: req.params.id}, {progress})

        res.json({msg: "Updated the Wedding Progress"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

};

// export const adminAssigne = async(req, res) =>{
//     try {
//         const {emp_name, progress} = req.body;

//         const newProduct = new Products({
//             product_id, 
//         })

//         await newProduct.save()
//         res.json({msg: "Created a product"})

//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// };