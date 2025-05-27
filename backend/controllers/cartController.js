import userModel from "../models/userModel.js"

// add product to user cart 


const addToCart = async (req, res) => {
    try {
        // Supposons que tu ajoutes userId dans req.user dans ton middleware d'auth
        const userId = req.user.id; // ou req.userId selon ton middleware
        const { itemId, size } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ...existing code...

const updateCart = async (req, res) => {
    try {
        const userId = req.user.id; // <-- récupère l'id depuis req.user
        const { itemId, size, quantity } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const getUserCart = async (req, res) => {
    try {
        const userId = req.user.id; // <-- récupère l'id depuis req.user

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {addToCart,updateCart,getUserCart}