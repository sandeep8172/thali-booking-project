import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "../UI/Card";
import CartItems from "./CartItems";
import { useHistory } from "react-router-dom";
import { foodActions } from "../store/foodSlice";

const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.items);

    const cartLength = cartItems.length;
    const orderButtonHandler = () => {
        if (cartLength < 2) {
            alert("Please add atleast 2 items to proceed");
        } else {
            history.push("/order/cart/success");
            dispatch(foodActions.toogleHandler());
        }
    };

    const cartItemsMap = (
        <ul>
            {cartItems.map((item) => {
                return (
                    <CartItems
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.name,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                        }}
                    />
                );
            })}
        </ul>
    );
    const getTotalAmount = cartItems.map((item) => item.totalPrice);
    const totalAmount = getTotalAmount.reduce((pre, current,) => {
        return pre + current;
    }, 0)
    return (
        <Card className={classes.cart}>
            {cartLength > 0 && <h2>Your Added Items - Customize Your Thali</h2>}

            {cartLength === 0 ? <p>Pleases add some Items first</p> : cartItemsMap}
            {cartLength > 0 && (
                <button className={classes.orderButton} onClick={orderButtonHandler}>
                    <span className={classes.amount}>₹{totalAmount} <span className={classes.total}> TOTAL</span></span> Place Order
                </button>
            )}
        </Card>
    );
};
export default Cart;
