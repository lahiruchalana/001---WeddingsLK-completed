import WeddingPlans from "../models/weddingPlanModel.js";

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


export const getWeddingPlans = async(req, res) =>{
    try {
        const features = new APIfeatures(WeddingPlans.find(), req.query)
        .filtering().sorting().paginating()

        const weddingPlans = await features.query

        res.json({
            status: 'success',
            result: weddingPlans.length,
            weddingPlans: weddingPlans
        })
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const createWeddingPlans = async(req, res) =>{
    try {
        const {weddingPlan_id, title, vendor_1, category_1, price_1, max_price_1, description_1, address_1, images_1, vendor_2, category_2, price_2, max_price_2, description_2, address_2, images_2, vendor_3, category_3, price_3, max_price_3, description_3, address_3, images_3} = req.body;
        if(!images_1) return res.status(400).json({msg: "No image upload"})

        const weddingPlans = await WeddingPlans.findOne({weddingPlan_id})
        if(weddingPlans)
            return res.status(400).json({msg: "This wedding plan already exists."})

        const newWeddingPlans = new WeddingPlans({
            weddingPlan_id, title: title.toLowerCase(), vendor_1, category_1, price_1, max_price_1, description_1, address_1, images_1, vendor_2, category_2, price_2, max_price_2, description_2, address_2, images_2, vendor_3, category_3, price_3, max_price_3, description_3, address_3, images_3
        })

        await newWeddingPlans.save()
        res.json({msg: "Created a wedding plan"})

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const deleteWeddingPlans = async(req, res) =>{
    try {
        await WeddingPlans.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted a Wedding Plan"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const updateWeddingPlans = async(req, res) =>{
    try {
        const { title, vendor_1, category_1, price_1, max_price_1, description_1, address_1, images_1, vendor_2, category_2, price_2, max_price_2, description_2, address_2, images_2, vendor_3, category_3, price_3, max_price_3, description_3, address_3, images_3} = req.body;
        if(!images_1) return res.status(400).json({msg: "No image upload"})

        await WeddingPlans.findOneAndUpdate({_id: req.params.id}, {
            title: title.toLowerCase(), vendor_1, category_1, price_1, max_price_1, description_1, address_1, images_1, vendor_2, category_2, price_2, max_price_2, description_2, address_2, images_2, vendor_3, category_3, price_3, max_price_3, description_3, address_3, images_3
        })

        res.json({msg: "Updated a Wedding Plan"})
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