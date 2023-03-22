import cart from './assets/294547.svg'

const CartWidget =() =>{
    return (
        <div class="carritoYnumero">
            <img class="carrito" src ={cart} alt ='cart-widget'  height= "55px" width= "55px" />
            <h2 class="numero">0</h2>
        </div>
    )
}
export default CartWidget