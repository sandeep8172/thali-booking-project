import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { foodActions } from "../store/foodSlice";

const Header = () => {
    const dispatch = useDispatch();


    const totalQuantity = useSelector((state) => state.totalQuantity);
    const toggleCart = useSelector((state) => state.cartButtonIsVisible);

    const onclickHandler = () => {
        dispatch(foodActions.nameToogleHandler())
    }

    return (
        <header className={classes.header}>
            <NavLink to="/">
                <button className={classes.name} onClick={onclickHandler}>FOOD HUB</button>
            </NavLink>
            <NavLink to="/order/cart">
                {toggleCart && (
                    <button className={classes.cart}>
                        My Cart <span>{totalQuantity}</span>
                    </button>
                )}
            </NavLink>
        </header>
    );
};
export default Header;
