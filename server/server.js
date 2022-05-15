import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import mongoose from 'mongoose';
import Cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'



import userRouter from './routes/userRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import upload from './routes/upload.js';
import productRouter from './routes/productRouter.js';
import weddingPlanRouter from './routes/weddingPlanRouter.js'
import paymentRouter from './routes/paymentRouter.js';
import feedBackRouter from './routes/feedBackRouter.js';

import { join } from 'path'



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
    })
}


// app configuration
const app = express();
// const port = process.env.PORT || 5000;
// const connection_url = 'mongodb+srv://admin:sVrpkHTK7rq2H6p5@cluster0.jtn9y.mongodb.net/weddingslk-db?retryWrites=true&w=majority';

// API endpoint
app.get('/', (req, res) => res.status(200).send("Success, you are in WeddingsLK"));

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})


mongoose.connection.once('open', () => (
    console.log('DB Connected')
))

mongoose.set('useFindAndModify', false);



// middlewares
app.use(express.json());
app.use(Cors());
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


app.use('/user', userRouter);
app.use('/api', categoryRouter);
app.use('/api', upload);
app.use('/api', productRouter);
app.use('/api', weddingPlanRouter);
app.use('/api', paymentRouter);
app.use('/api', feedBackRouter);


/////end of Router setting 

const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})

