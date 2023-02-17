import classes from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { foodActions } from "../store/foodSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(foodActions.toogleHandler())
    }
    return (
        <section className={classes.home}>
            <main>
                <NavLink to="/order">
                    <button onClick={onClickHandler} >start order</button>
                </NavLink></main>
            <div>
                <h1>FOOD HUB</h1>
                <p>Find the best food here</p>
            </div>
        </section>
    );
};
export default HomePage;
