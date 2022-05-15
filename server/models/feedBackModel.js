import mongoose from 'mongoose'


const feedBackSchema = mongoose.Schema({
    vendor: {
        type: String,
        required: true,
    },
    couple_name: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    images:{
        type: Object,
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.model("FeedBack", feedBackSchema)