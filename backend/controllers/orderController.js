import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing order using cod method

const placeOrder = async (req, res) => {
    console.log("placeOrder triggered");
    console.log("req.body:", req.body);

    try {
        const { items, amount, address } = req.body;
        const userId = req.user.id; // depuis le middleware authUser

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "cod",
            payment: false,
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();
        console.log("Order saved:", newOrder);

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({
            success: true,
            message: "Order placed successfully",
            order: newOrder,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error placing order",
            error: error.message,
        });
    }
};



// Placing order using stripe method

const placeOrderStripe = async (req, res) => {

}

// Placing order using cod method

const placeOrderPaydunya = async (req, res) => {

}

// Getting all orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error fetching orders",
            error: error.message,
        });
    }

}


// user orders data for frontend
const userOrders = async (req, res) => {
    try {
        const userId = req.user.id; // depuis le middleware authUser
        const orders = await orderModel.find({ userId })
        res.json({success: true, orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error fetching user orders",
            error: error.message,
        });
        
    }

}

// update order status by admin
const updateStatus = async (req, res) => {

}


export { placeOrder, placeOrderStripe, placeOrderPaydunya, allOrders, userOrders, updateStatus };