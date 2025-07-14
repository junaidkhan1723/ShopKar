
function CartItem({ item, deleteCartItem, incQty, decQty }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-md-2">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-dark btn-sm rounded-circle"
                onClick={decQty}
                disabled={item.qty <= 1}
                title="Decrease"
              >
                <i className="bi bi-dash-lg"></i>
              </button>

              <span className="fs-5 fw-semibold">{item.qty}</span>

              <button
                className="btn btn-outline-dark btn-sm rounded-circle"
                onClick={incQty}
                title="Increase"
              >
                <i className="bi bi-plus-lg"></i>
              </button>

              <span className="ms-3 fs-3 fw-bold text-success">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-end p-3">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={deleteCartItem}
          >
            <i className="bi bi-trash3"></i> Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
