import classes from "./OrderItem.module.css";
import SelectItem from "./SelectItem";
import { useSelector } from "react-redux";

const OrderItem = () => {

    const DUMMY_ITEMS = useSelector((state) => state.DUMMY_ITEMS);

    return (
        <section className={classes.items}>
            <h2>Pick your favorite food</h2>
            <ul>
                {DUMMY_ITEMS.map((item, index) => {
                    return (
                        <SelectItem
                            key={index}
                            id={index}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                        />
                    );
                })}
            </ul>
        </section>
    )
}
export default OrderItem;