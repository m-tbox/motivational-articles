import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";

const Nav = () => {
    const [state, setStates] = useContext(UserContext);

    console.log(state, "NAv");

    return (
        <Navbar>
            <NavItem>
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </NavItem>
            {
                state.data && (
                    <NavItem>
                        <NavLink>
                            Logout
                        </NavLink>
                    </NavItem>
                )
            }
        </Navbar>
    )
};

export default Nav;