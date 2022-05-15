// const router = require('express').Router()
import express from 'express';
import { getFeedBacks, createFeedBack, deleteFeedBack } from '../controllers/feedBackCtrl.js'
import auth from '../middleware/auth.js'
// import authAdmin from '../middleware/authAdmin.js'

var router = express.Router();

router.route('/feedback')
    .get(getFeedBacks)
    .post(auth,  createFeedBack)

router.route('/feedback/:id')
    .delete(auth,  deleteFeedBack)
    // .put(auth,  updateCategory)


export default router