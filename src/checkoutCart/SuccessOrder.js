import classes from "./SuccessOrder.module.css";
import pic from "./delivery.jpg";

const SuccessOrder = () => {

    return (
        <section className={classes.order}>
            <h1>Your Order Succesfully Placed</h1>
            <p>Our delivery partner is on the way to delivery your order</p>
            <img src={pic} alt="delivery boy" />
            <h3>-- Enjoy your food --</h3>
        </section>
    )

}

export default SuccessOrder;