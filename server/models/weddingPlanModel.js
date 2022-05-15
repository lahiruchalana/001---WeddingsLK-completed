import mongoose from 'mongoose'


const weddingPlanSchema = mongoose.Schema({
    weddingPlan_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    vendor_1:{
        type: String,
        trim: true,
        required: true
    },
    category_1:{
        type: String,
        trim: true,
        required: true
    },
    price_1:{
        type: Number,
        trim: true,
        required: true
    },
    max_price_1:{
        type: Number,
        trim: true,
    },
    description_1:{
        type: String,
        required: true
    },
    address_1:{
        type: String,
        trim: true,
        required: true
    },
    images_1:{
        type: Object,
        required: true
    },
    vendor_2:{
        type: String,
        trim: true,
        required: true
    },
    category_2:{
        type: String,
        trim: true,
        required: true
    },
    price_2:{
        type: Number,
        trim: true,
        required: true
    },
    max_price_2:{
        type: Number,
        trim: true,
    },
    description_2:{
        type: String,
        required: true
    },
    address_2:{
        type: String,
        trim: true,
        required: true
    },
    images_2:{
        type: Object,
        
    },
    vendor_3:{
        type: String,
        trim: true,
        
    },
    category_3:{
        type: String,
        trim: true,
        
    },
    price_3:{
        type: Number,
        trim: true,
        
    },
    max_price_3:{
        type: Number,
        trim: true,
    },
    description_3:{
        type: String,
        
    },
    address_3:{
        type: String,
        trim: true,
        
    },
    images_3:{
        type: Object,
        
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    },
    rating:{
        type: Number,
        default: 1
    }
}, {
    timestamps: true //important
})


export default mongoose.model("WeddingPlans", weddingPlanSchema)