function Footer() {
  return (
    <footer className="bg-primary text-white py-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3">
            <h5 className="text-warning">ShopKar</h5>
            <p>
              Your one-stop destination for all your shopping needs with great
              deals and quality products.
            </p>
          </div>

          <div className="col-md-3">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="#features" className="text-white text-decoration-none">Features</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-warning">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Return Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-warning">Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: ShopKar@gmail.com</li>
              <li>Phone: +91 123456789</li>
              <li>Address: 123 Main St, Nanded, India</li>
            </ul>
          </div>
        </div>

        <hr className="border-light my-2" />
        <p className="text-center mb-0">&copy; 2025 ShopKar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
