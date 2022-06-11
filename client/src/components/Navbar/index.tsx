import { NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";
import {
    LeftNavContainer,
    Navbar,
    RouteLink,
    NavLink
} from "./styles";

const Nav = () => {
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        setState({
            data: null,
            loading: false,
            error: null,
        });
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <>
            {
                state.data && (
                    <Navbar>
                        <NavItem>
                            <RouteLink to="/articles" className="nav-link">
                                Home
                            </RouteLink>

                        </NavItem>
                        <LeftNavContainer>
                            <NavItem>
                                <NavLink onClick={handleLogout}>
                                    Logout
                                </NavLink>
                            </NavItem>
                        </LeftNavContainer>
                    </Navbar>
                )
            }
        </>
    )
};

export default Nav;