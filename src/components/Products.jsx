import Card from './Card';

function Products({ data, addToCart }) {
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-4">Featured Products</h2>

        {data && data.length > 0 ? (
          <div className="row g-4">
            {data.map((item, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <Card item={item} addToCart={() => addToCart(item)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center bg-primary text-white text-center rounded p-4" style={{ height: '200px' }}>
            <h4>Check Your Internet Connection 🛜</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
