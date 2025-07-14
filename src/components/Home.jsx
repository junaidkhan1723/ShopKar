import { Link } from "react-router-dom";

const Home = () => {
  const productCategories = [
    { name: 'Furniture', icon: '🛋️' },
    { name: 'Electronics', icon: '📱' },
    { name: 'Appliances', icon: '📸' },
    { name: 'Fashion', icon: '👗' },
    { name: 'Books', icon: '📚' },
    { name: 'Toys', icon: '🧸' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-light text-center py-4">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to ShopKar</h1>
          <p className="lead">
            Discover amazing products with great deals and seamless shopping experience.
          </p>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <span className="btn btn-primary btn-lg mt-3">
            <i className="bi bi-cart4" ></i> Shop Now
          </span></Link>
        </div>
      </section>

      {/* Category Section */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2>🔍 Explore by Category 📝</h2>
          <p>Find top deals and best quality products across all categories.</p>
        </div>
      
        <div className="row g-4">
          {productCategories.map((proCt, index) => (
            <div className="col-6 col-md-4 col-lg-2 text-center" key={index}>
              <Link to="/products" style={{ textDecoration: "none" }}>
              <div className="card catCard h-100 shadow-sm p-3">
                <div className="fs-1 pr">{proCt.icon}</div>
                <h6 className="mt-2">{proCt.name}</h6>
              </div>
              </Link>
            </div>
            
          ))}
        </div>
        
      </section>
    </>
  );
};

export default Home;
