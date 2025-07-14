function Features() {
  return (
    <section className="container py-5">
      <h2 className="text-center text-primary mb-5">Why Choose Us</h2>
      
      <div className="row g-4">
        <div className="col-sm-6 col-lg-3">
          <div className="card text-center shadow-sm p-3 h-100">
            <div className="display-5 mb-3">🚚</div>
            <h5 className="card-title">Fast Delivery</h5>
            <p className="card-text">Get your order delivered within 24 hours in selected areas.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card text-center shadow-sm p-3 h-100">
            <div className="display-5 mb-3">💰</div>
            <h5 className="card-title">Best Prices</h5>
            <p className="card-text">We offer competitive prices on our 1000+ products.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card text-center shadow-sm p-3 h-100">
            <div className="display-5 mb-3">🔄</div>
            <h5 className="card-title">Easy Returns</h5>
            <p className="card-text">Not satisfied with your product? Return it within 30 days.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card text-center shadow-sm p-3 h-100">
            <div className="display-5 mb-3">🔐</div>
            <h5 className="card-title">Secure Payment</h5>
            <p className="card-text">Your payment information is always safe with us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
