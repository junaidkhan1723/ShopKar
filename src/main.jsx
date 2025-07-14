/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Carts from "./components/Carts";
import Footer from "./components/Footer";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./components/project.css"; 
import './index.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  
  //fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?sortBy=title&order=desc");
        const json = await res.json();
        setData(json.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products 😞 Check your connection!");
      }
    };

    fetchProducts();
  }, []);

  // add product to cart

 const addToCart = (item) => {
  const exists = cart.find((i) => i.id === item.id);

  if (exists) {
    if (exists.qty >= 10) {
      toast.warn("Maximum quantity is 10", { toastId: `maxQty-${item.id}` });
      return;
    }

    const updatedCart = cart.map((i) =>
      i.id === item.id ? { ...i, qty: i.qty + 1 } : i
    );
    setCart(updatedCart);
    toast.info(`Increased quantity of ${item.title}`, { toastId: `inc-${item.id}` });
  } else {
    const itemWithQty = { ...item, qty: 1 };
    setCart((prev) => [...prev, itemWithQty]);
    toast.success(`${item.title} added to cart!`, { toastId: `add-${item.id}` });
  }
};

//delete cart items
const deleteCartItem = (itemToDelete) => {
  setCart((prev) => prev.filter((item) => item.id !== itemToDelete.id));
  toast.info(`${itemToDelete.title} removed from cart!`);
};

// stop single item to add multiple times in cart
const decreaseQty = (itemToUpdate) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === itemToUpdate.id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0)
  );
};

 // save cart in local storage
  useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  if (savedCart) setCart(savedCart);
}, []);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  return (
     <>
    <BrowserRouter>
    <ToastContainer
  position="top-right"
  autoClose={1000}
  hideProgressBar={true}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
/>
     
  <Nav cart={cart} />
  <main className="flex-grow-1">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products data={data} addToCart={addToCart} decreaseQty={decreaseQty} />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/carts"
        element={
          <Carts
            cart={cart}
            deleteCartItem={deleteCartItem}
            addToCart={addToCart}
            decreaseQty={decreaseQty}
            setCart={setCart}
          />
        }
      />
    </Routes>
  </main>
  <Footer />
    </BrowserRouter>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
