import { createContext, useState } from "react";
import assets from "../assets/assets";
export const ShopContext = createContext();

const { products } = assets;

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 5.99;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);




    const value = {
        products, currency, delivery_fee,
        search, setSearch,
        showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;