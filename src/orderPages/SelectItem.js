import Card from "../UI/Card";
import classes from "./SelectItem.module.css";
import { useDispatch } from "react-redux";
import { foodActions } from "../store/foodSlice";


const SelectItem = (props) => {
    const dispatch = useDispatch();
    const { title, id, image, price } = props

    const cartButtonHandler = () => {
        dispatch(foodActions.addItems({ title, id, price }))
    }

    return (
        <li className={classes.products}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>Rs.{price.toFixed(2)}</div>
                </header>
                <img src={image} alt="food pic" />
                <div className={classes.button}>
                    <button onClick={cartButtonHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    )
}
export default SelectItem;