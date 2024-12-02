import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="item-list-title">{greeting}</h2>
      <p className="item-list-description">
        Descubre nuestra exclusiva colección de vestidos de fiesta para alquiler,
        elegante ropa interior y accesorios deslumbrantes para todas las ocasiones especiales.
      </p>
    </div>
  );
};
export default ItemListContainer




