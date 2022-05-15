// const router = require('express').Router()
import express from 'express';
import { getPayments, createPayment } from '../controllers/paymentCtrl.js'
import auth from '../middleware/auth.js'
import authAdmin from '../middleware/authAdmin.js'


var router = express.Router();

router.route('/payment')
    .get(auth, authAdmin, getPayments)
    .post(auth, createPayment)


export default router
