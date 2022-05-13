import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { callCheckAuthApi } from "../services/api";

interface User {
    data: {
        id: string,
        email: string
    } | null;
    error: string | null;
    loading: boolean;
}

const INITIAL_STATE = {
    data: null,
    loading: true,
    error: null
};

const UserContext = createContext<
    [User, React.Dispatch<React.SetStateAction<User>>]
>([INITIAL_STATE,
    () => { }
]);


const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>(INITIAL_STATE);

    const token = localStorage.getItem("token");

    if (token) {
        axios.defaults.headers.common["authorization"] = `Bearer ${token}`
    }

    const fetchUser = async () => {
        const response = await callCheckAuthApi();

        if (response.data && response.data.user) {
            const { id, email } = response.data.user;
            setUser({
                data: {
                    id,
                    email
                },
                loading: false,
                error: null
            })
        } else if (response.errors && response.errors.length) {
            setUser({
                data: null,
                loading: false,
                error: response.errors[0].msg,
            });
        }
    }


    useEffect(() => {
        if (token) {
            fetchUser();
        } else {
            setUser({
                data: null,
                loading: false,
                error: null,
            });
        }
    }, [])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }