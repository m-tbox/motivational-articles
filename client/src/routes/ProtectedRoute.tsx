import { useContext } from "react"
import { Outlet, Navigate } from "react-router";
import Loader from "../components/Loader";
import { UserContext } from "../context"

export const ProtectedRoute = () => {
    const [state] = useContext(UserContext);

    if (state.loading) {
        return <Loader />
    }

    return state.data ? <Outlet /> : <Navigate to="/" />
}