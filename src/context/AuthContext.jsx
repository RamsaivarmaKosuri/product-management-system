import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {

                setIsLoggedIn(true);

            }

            else {

                setIsLoggedIn(false);

            }

        });

        return () => unsubscribe();

    }, []);

    const login = () => {

        setIsLoggedIn(true);

    };

    const logout = async () => {

        await signOut(auth);

        setIsLoggedIn(false);

    };

    return (

        <AuthContext.Provider

            value={{

                isLoggedIn,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;