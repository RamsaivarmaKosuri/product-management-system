import { createContext, useEffect, useState } from "react";

import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    onSnapshot
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const ProductContext = createContext();

function ProductProvider({ children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const unsubscribe = onSnapshot(

            collection(db, "products"),

            (snapshot) => {

                const productList = snapshot.docs.map((doc) => ({

                    id: doc.id,

                    ...doc.data()

                }));

                setProducts(productList);

            }

        );

        return () => unsubscribe();

    }, []);

    const addProduct = async (product) => {

        await addDoc(

            collection(db, "products"),

            product

        );

    };

    const deleteProduct = async (id) => {

        await deleteDoc(

            doc(db, "products", id)

        );

    };

    const updateProduct = async (updatedProduct) => {

        const { id, ...data } = updatedProduct;

        await updateDoc(

            doc(db, "products", id),

            data

        );

    };

    return (

        <ProductContext.Provider

            value={{

                products,

                addProduct,

                deleteProduct,

                updateProduct

            }}

        >

            {children}

        </ProductContext.Provider>

    );

}

export default ProductProvider;