import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../css/CartScreen.css";

const CartScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  useEffect(() => {
    fetchProducts(selectedStatus);
  }, [selectedStatus]);

  const fetchProducts = async (status: string) => {
    try {
      let apiUrl = "https://your-api-url/products";
      if (status !== "all") {
        apiUrl += `?status=${status}`;
      }
      const response = await axios.get<Product[]>(apiUrl);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="cart">
      <div className="horizonal-tab-menu">
        <button
          onClick={() => setSelectedStatus("all")}
          className={selectedStatus === "all" ? "active" : ""}
        >
          Tất cả
        </button>
        <button
          onClick={() => setSelectedStatus("onprocess")}
          className={selectedStatus === "onprocess" ? "active" : ""}
        >
          Đang xử lý
        </button>
        <button
          onClick={() => setSelectedStatus("delivering")}
          className={selectedStatus === "delivering" ? "active" : ""}
        >
          Đang giao
        </button>
        <button
          onClick={() => setSelectedStatus("delivered")}
          className={selectedStatus === "delivered" ? "active" : ""}
        >
          Đã giao
        </button>
        <button
          onClick={() => setSelectedStatus("cancel")}
          className={selectedStatus === "cancel" ? "active" : ""}
        >
          Đã hủy
        </button>
        <button
          onClick={() => setSelectedStatus("return")}
          className={selectedStatus === "return" ? "active" : ""}
        >
          Trả hàng
        </button>
      </div>
      <div className="product-container">
        {products.length === 0 ? (
          <p>Bạn chưa có đơn hàng nào</p>
        ) : (
          products.map((product) => (
            <ProductCard
              p={{
                id: product.id,
                timeCreated: product.timeCreated,
                imageUrl: product.imageUrl,
                name: product.name,
                price: product.price,
                status: product.status,
              }}
            />
          ))
        )}
        <ProductCard
          p={{
            id: 1,
            timeCreated: "2021-09-01",
            imageUrl: "https://via.placeholder.com/150",
            name: "Sản phẩm 1",
            price: 100000,
            status: "Đang xử lý",
          }}
        />
        <ProductCard
          p={{
            id: 2,
            timeCreated: "2021-09-02",
            imageUrl: "https://via.placeholder.com/150",
            name: "Sản phẩm 2",
            price: 200000,
            status: "Đang giao",
          }}
        />
      </div>
    </div>
  );
};

export default CartScreen;
