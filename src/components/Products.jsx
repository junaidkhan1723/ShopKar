import { useState } from 'react';
import Card from './Card';
import Pagination from './Pagination';

function Products({ data, addToCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsParPage = 8;
  
  const indexOfLast = currentPage * productsParPage;
  const indexOfFirst = indexOfLast - productsParPage;
  const currentProducts = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / productsParPage);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-4">Featured Products</h2>

        {data && data.length > 0 ? (
          <div className="row g-4">
            {currentProducts.map((item, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <Card item={item} addToCart={() => addToCart(item)} />
              </div>
            ))}
            <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
          </div>
          
        ) : (
          <div className="d-flex justify-content-center align-items-center bg-primary text-white text-center rounded p-4" style={{ height: '200px' }}>
            <h4>Server is Loading...</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
