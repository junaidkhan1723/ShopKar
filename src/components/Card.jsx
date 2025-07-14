function Card({ item, addToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <div
        className="d-flex align-items-center justify-content-center bg-light"
        style={{ height: "200px", padding: "10px" }}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          className="img-fluid"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain"
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-muted">{item.description}</p>
        <ul className="list-unstyled small mb-3">
          <li><strong>Price:</strong> ${item.price}</li>
          <li><strong>Discount:</strong> {item.discountPercentage}%</li>
          <li><strong>Rating:</strong> {item.rating}/5</li>
        </ul>
        <button className="btn btn-primary mt-auto" onClick={addToCart}>
          <i className="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
