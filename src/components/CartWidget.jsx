import './CartWidget.css';

const CartWidget = () => {
  const itemCount = 5; 
  return (
    <div className="cart-widget">
      <span className="cart-icon" role="img" aria-label="Carrito de compras">
        🛍️
      </span>
      <span className="cart-notification">{itemCount}</span>
    </div>
  );
}
export default CartWidget