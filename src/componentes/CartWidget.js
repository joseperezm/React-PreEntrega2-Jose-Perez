import Contador from "./Contador";

function CartWidget () {
    return (
        <>
        <div id="cartwidget" className="cartwidget d-flex">
            <img src="/Cart.png" alt="" className="cart"/>
            <p className="itemcart" ><Contador /></p>
        </div>
        </>
    )
}

export default CartWidget