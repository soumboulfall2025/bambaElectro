import express from 'express';
import { allOrders, updateStatus, placeOrder, placeOrderStripe, placeOrderPaydunya, userOrders, webhookPaytech} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();
// admin features
orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status",adminAuth,updateStatus)


// payments features
orderRouter.post("/place",authUser,placeOrder)
orderRouter.post("/stripe",authUser,placeOrderStripe)
orderRouter.post("/paydunya",authUser,placeOrderPaydunya)
orderRouter.post("/paytech", webhookPaytech);



// user features
orderRouter.post("/userorders",authUser,userOrders)

export default orderRouter;