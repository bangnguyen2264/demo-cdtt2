import React, { useState } from "react";
import GoogleIcon from "../assets/google.png";
import FacebookIcon from "../assets/facebook.png";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (username?: string) => void;
}
const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhoneNumber(e.target.value);
    setError(""); // Clear error when input changes
  };

  const handleSubmit = () => {
    if (!phoneNumber.trim()) {
      setError("Vui lòng nhập số điện thoại");
      return;
    }
    if (!/^\d+$/.test(phoneNumber.trim())) {
      setError("Số điện thoại chỉ được chứa số");
      return;
    }
    if (phoneNumber.trim().length !== 10) {
      setError("Số điện thoại phải có đúng 10 ký tự");
      return;
    }
    onLoginSuccess();
  };

  if (!isOpen) return null;

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Đăng nhập hoặc Đăng ký</h2>
        <div className="sub">
          <p>
            Vui lòng đăng nhập để hưởng những đặc quyền dành cho thành viên.
          </p>
        </div>

        <input
          className="formInput"
          type="text"
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChange={handleChange}
        />
        {error && <div className="error-message">{error}</div>}
        <div className="action-buttons">
          <button className="register-button" onClick={handleSubmit}>
            Tiếp tục
          </button>
          <p className="rcm">hoặc đăng nhập bằng</p>
          <div className="icon-container">
            <img className="icon-login" src={GoogleIcon} alt="Google Icon" />
          </div>
          <div className="icon-container">
            <img
              className="icon-login"
              src={FacebookIcon}
              alt="Facebook Icon"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Popup;
