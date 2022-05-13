import { useContext } from "react"
import { Outlet, Navigate } from "react-router";
import { UserContext } from "../context"

export const ProtectedRoute = () => {
    const [state] = useContext(UserContext);

    if (state.loading) {
        return <div>Loading...</div>
    }

    return state.data ? <Outlet /> : <Navigate to="/" />
}