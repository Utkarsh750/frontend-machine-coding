import React, { useEffect, useState } from "react";
import "./pagination.css";
const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100&skip=");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const pageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage != page
    )
      setPage(selectedPage);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((item) => (
            <span className="product__single" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      )}

      {/* PAGINATION LOGIC */}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disabled"}
            onClick={() => pageHandler(page - 1)}
          >
            ◀
          </span>

          {[...Array(products.length / 10)].map((_, i) => (
            <span
              className={page === i + 1 ? "pagination__selected" : ""}
              onClick={() => pageHandler(i + 1)}
              key={i}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={
              page < products.length / 10 ? "" : "pagination__disabled"
            }
            onClick={() => pageHandler(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
