import mongoose from 'mongoose'


const productSchema = mongoose.Schema({
    product_id:{
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
    price:{
        type: Number,
        trim: true,
        required: true
    },
    max_price:{
        type: Number,
        trim: true,
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    content_2:{
        type: String,
        required: true
    },
    content_3:{
        type: String,
        required: true
    },
    content_4:{
        type: String,
        required: true
    },
    content_5:{
        type: String,
        required: true
    },
    address_line_1:{
        type: String,
        trim: true,
        required: true
    },
    address_line_2:{
        type: String,
    },
    address_line_3:{
        type: String,
    },
    other_services:{
        type: String,
    },
    contact_number_1:{
        type: Number,
    },
    contact_number_2:{
        type: Number,
    },
    images:{
        type: Object,
        required: true
    },
    category:{
        type: String,
        required: true
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


export default mongoose.model("Products", productSchema)