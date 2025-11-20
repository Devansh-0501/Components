import { useEffect, useState } from "react";
import "../styles/home.css";



const ProductComponent = ({ image, title }) => {
  return (
    <div className="container">
      <img src={image} alt="image" />
      <span>{title}</span>
    </div>
  );
};



const Home = () => {
   
  const PAGE_SIZE = 8;

  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/?limit=105");
    const data = await res.json();
    console.log(data);
    setProduct(data.products);
  };

  const handleClick = (index) => {
    setCurrentPage(index);
  };
  const numberofPages = Math.ceil(product.length / PAGE_SIZE);

  const gotoprev = () => {
    currentPage > 0 && setCurrentPage((prev) => prev - 1);
  };

  const gotonext = () => {
    currentPage < numberofPages - 1 && setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Pagination</h1>
      <div className="pages">
        <button
          disabled={currentPage == 0}
          className="singlePageNumber"
          onClick={gotoprev}
        >
          ←
        </button>

        {[...Array(numberofPages).keys()].map((p) => {
          return (
            <div
              onClick={() => handleClick(p)}
              key={p}
              className={
                "singlePageNumber" + (currentPage === p ? " active" : "")
              }
            >
              {p}
            </div>
          );
        })}
        <button
          disabled={currentPage == numberofPages - 1}
          className="singlePageNumber"
          onClick={gotonext}
        >
          →
        </button>
      </div>
      <div className="product-grid">
        {product.length > 0
          ? product
              .slice(
                currentPage * PAGE_SIZE,
                currentPage * PAGE_SIZE + PAGE_SIZE
              )
              .map((item) => {
                return (
                  <div key={item.id} className="product-display">
                    <ProductComponent
                      image={item.thumbnail}
                      title={item.title}
                    />
                  </div>
                );
              })
          : "No item found"}
      </div>
    </div>
  );
}

export default Home