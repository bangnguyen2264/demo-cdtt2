import React, { useState } from "react";
import "../css/VerticalTabMenu.css"
import UserScreen from "../screens/UserScreen";
import CardScreen from "../screens/CartScreen";
import { logout } from "../services/AuthService";

function TabMenu() {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName === "Logout") {
      logout;
      console.log("Đăng xuất");
    }
  };

  return (
    <div className="personal">
      <div className="vertical-tab-menu">
        {/* Header and Tab */}
        <div className="header-tab-container">
          <div className="header">
            <div className="profile-info">
              <img
                src="https://th.bing.com/th/id/OIP.KdRE7KHqL-46M8nrvOX2CgAAAA?rs=1&pid=ImgDetMain"
                className="avatar"
                alt="Avatar"
              />
              <span className="name">User Name</span>
            </div>
          </div>

          <div className="tab">
            <button
              className={
                activeTab === "Profile" ? "tablinks active" : "tablinks"
              }
              onClick={() => handleTabClick("Profile")}
            >
              Profile
            </button>
            <button
              className={activeTab === "Cart" ? "tablinks active" : "tablinks"}
              onClick={() => handleTabClick("Cart")}
            >
              Cart
            </button>
            <button
              className={
                activeTab === "Logout" ? "tablinks active" : "tablinks"
              }
              onClick={() => handleTabClick("Logout")}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div style={{ display: activeTab === "Profile" ? "block" : "none" }}>
            <UserScreen />
          </div>
          <div
            className="tabcontent"
            style={{ display: activeTab === "Cart" ? "block" : "none" }}
          >
            <CardScreen />
          </div>

          <div
            className="tabcontent"
            style={{ display: activeTab === "Logout" ? "block" : "none" }}
            onClick={() => handleTabClick("Logout")}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabMenu;
