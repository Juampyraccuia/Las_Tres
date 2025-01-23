import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    // Simulamos una carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta este tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count };
    addProduct(productCart);
    setShowItemCount(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images"></div>
        <div className="main-image">
          <img src={product.image || "/placeholder.svg"} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {showItemCount ? (
          <ItemCount
            stock={product.stock}
            addProductInCart={addProductInCart}
          />
        ) : (
          <Link to="/cart">Terminar mi compra</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
