import Products from '../models/productModel.js';

// Filter, sorting and paginating

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


export const getProducts = async(req, res) =>{
    try {
        const features = new APIfeatures(Products.find(), req.query)
        .filtering().sorting().paginating()

        const products = await features.query

        res.json({
            status: 'success',
            result: products.length,
            products: products
        })
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const createProduct = async(req, res) =>{
    try {
        const {product_id, title, price, max_price, description, content, content_2, content_3, content_4, content_5, address_line_1, address_line_2, address_line_3, other_services, contact_number_1, contact_number_2, images, category} = req.body;
        if(!images) return res.status(400).json({msg: "No image upload"})

        const product = await Products.findOne({product_id})
        if(product)
            return res.status(400).json({msg: "This vendor already exists."})

        const newProduct = new Products({
            product_id, title: title.toLowerCase(), price, max_price, description, content, content_2, content_3, content_4, content_5, address_line_1: address_line_1.toLowerCase(), address_line_2, address_line_3, other_services, contact_number_1, contact_number_2, images, category
        })

        await newProduct.save()
        res.json({msg: "Created a Vendor Service"})

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const deleteProduct = async(req, res) =>{
    try {
        await Products.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted a vendor"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const updateProduct = async(req, res) =>{
    try {
        const {title, price, max_price, description, content, content_2, content_3, content_4, content_5, address_line_1, address_line_2, address_line_3, other_services, contact_number_1, contact_number_2, images, category} = req.body;
        if(!images) return res.status(400).json({msg: "No image upload"})

        await Products.findOneAndUpdate({_id: req.params.id}, {
            title: title.toLowerCase(), price, max_price, description, content, content_2, content_3, content_4, content_5, address_line_1: address_line_1.toLowerCase(), address_line_2, address_line_3, other_services, contact_number_1, contact_number_2, images, category
        })

        res.json({msg: "Updated a vendor"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};


export const updateRating = async(req, res) =>{
    try {
        const {rating} = req.body;

        await Products.findOneAndUpdate({_id: req.product.id}, {
            rating
        })

        res.json({msg: "Your Rating Updated, Thank you for Rating the Vendor"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};
