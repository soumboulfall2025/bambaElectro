import { createContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
import axios from "axios";

// Renomme ici pour éviter le conflit
const { products: staticAssetsProducts } = assets;


const ShopContextProvider = (props) => {
    const currency = "F CFA";
    const delivery_fee = 10;
    const backendUrl = "https://bambaelectro-backend.onrender.com";

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size");
            return;
        }
        let cartData = structuredClone(cartItems);
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

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + "/api/cart/add", { itemId, size }, { headers: { token } })
            } catch (error) {
                console.log(error);
                toast.error(error.message || "An error occurred while adding to cart.");

            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) { }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);


        if (token) {
            try {
                await axios.post(backendUrl + "/api/cart/update", { itemId, size, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message || "An error occurred while adding to cart.");

            }
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find(
                (product) => String(product._id) === String(items)
            );

            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo?.price * cartItems[items][item];
                    }
                } catch (error) { }
            }
        }
        return totalAmount;
    };

    const getProductsData = async () => {
        try {
            const url = backendUrl + "/api/product/list";
            console.log("Fetching from:", url);
            const response = await axios.get(url);


            if (response.data.success && Array.isArray(response.data.products)) {
                setProducts(response.data.products); // ✅ extrait bien le tableau de produits

            } else {
                toast.error("Format inattendu :", response.data.message);
            }
        } catch (error) {
            console.error("Erreur axios :", error);
            toast.error("Format inattendu :", response.data.message);
        }
    };


    const getUserCart = async (token) => {
    if (!token) return;
    try {
        const response = await axios.post(backendUrl + "/api/cart/get", {}, { headers: { token } });
        if (response.data.success) {
            setCartItems(response.data.cartData);
        } else {
            console.warn("getUserCart response invalid:", response.data);
        }
    } catch (error) {
        console.log("Erreur getUserCart:", error);
        toast.error("Impossible de récupérer le panier utilisateur.");
    }
};


    useEffect(() => {
        getProductsData();
    }, []);


    // Étape 1 : Charger le token depuis localStorage
useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
        setToken(savedToken);
    }
}, []);

// Étape 2 : Une fois le token mis à jour, charger le panier
useEffect(() => {
    if (token) {
        getUserCart(token);
    }
}, [token]);


    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
        setCartItems
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
