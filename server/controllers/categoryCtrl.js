import Category from '../models/categoryModel.js'
import Products from '../models/productModel.js'


export const getCategories = async(req, res) =>{
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const createCategory = async (req, res) =>{
    try {
        // if user have role = 1 ---> admin
        // if user have role = 0 ---> customer
        // if user have role = 2 ---> employee
        // only admin can create , delete and update category
        const {name} = req.body;
        const category = await Category.findOne({name})
        if(category) return res.status(400).json({msg: "This category already exists."})

        const newCategory = new Category({name})

        await newCategory.save()
        res.json({msg: "Created a category"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const deleteCategory = async(req, res) =>{
    try {
        const products = await Products.findOne({category: req.params.id})
        if(products) return res.status(400).json({
            msg: "Please delete all products with a relationship."
        })

        await Category.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted a Category"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const updateCategory = async(req, res) =>{
    try {
        const {name} = req.body;
        await Category.findOneAndUpdate({_id: req.params.id}, {name})

        res.json({msg: "Updated a category"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

};
