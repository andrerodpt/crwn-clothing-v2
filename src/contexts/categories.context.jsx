import { 
    createContext, 
    useState, 
    useEffect 
} from "react";

import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
    setProducts: () => null
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap, setCategoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}