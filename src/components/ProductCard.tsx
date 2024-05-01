import React from "react";
import "../css/ProductCard.css";

const ProductCard: React.FC<{ p: Product }> = ({ p }) => {
  const handleToDetailProduct = () => {
    console.log("Xem chi tiết sản phẩm", p.name);
  };
  const handleToBuyAgain = () => {
    console.log("Mua lại sản phẩm", p.name);
  };
  return (
    <div onClick={handleToDetailProduct} className="product-card">
      <div className="product-status">
        <h5>Đơn hàng {p.timeCreated}</h5>
        <p>{p.status}</p>
      </div>
      <div className="product-infor">
        <div className="unique">
          <img src={p.imageUrl} />
          <h4>{p.name}</h4>
        </div>
        <div className="details">
          <p onClick={handleToDetailProduct}>Xem chi tiết</p>

          <div className="price">
            <span>Thành tiền</span>
            <h5>{p.price}</h5>
          </div>
        </div>
      </div>
      <div className="buy-again">
        <button onClick={handleToBuyAgain}>Mua lại</button>
      </div>
    </div>
  );
};

export default ProductCard;
