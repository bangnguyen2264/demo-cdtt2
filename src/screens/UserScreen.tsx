import React, { useState } from "react";
import { Avatar, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import DatePicker from "react-datepicker"; // Import the DatePicker component

import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the DatePicker
import "../css/UserScreen.css";
import ChangeInfoText from "../components/ChangesText";

interface UserData {
  userName: string;
  phoneNumber: string;
  gender: string | null;
  dob: Date | null;
}

const UserScreen = () => {
  const [userData, setUserData] = useState<UserData>({
    userName: "User Name",
    phoneNumber: "Phone Number",
    gender: null,
    dob: null,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSaveChanges = () => {
    // Here you can implement the logic to save changes to the backend
    console.log("Saving changes...", userData);
    // Example: Call an API to save the userData
    setIsEditMode(false); // Switch back to display mode after saving
  };

  const handleChange = (key: string, value: string | Date | null) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [key]: value,
    }));
  };

  const handleEditButtonClick = () => {
    setIsEditMode(true); // Enable edit mode
  };

  return (
    <div className="user-screen">
      {/*Title*/}
      <div className="title-profiles">Thông tin cá nhân</div>
      {/* Avatar */}
      <div className="avatar-container">
        <Avatar
          alt="Avatar"
          src="https://th.bing.com/th/id/OIP.KdRE7KHqL-46M8nrvOX2CgAAAA?rs=1&pid=ImgDetMain"
          sx={{ width: 100, height: 100 }}
        />
      </div>

      {/* User Information */}
      <div className="user-info">
        <div className="info-item">
          <span className="label">Họ và tên:</span>
          <div className="value">
            {!isEditMode ? (
              userData.userName
            ) : (
              <input
                type="text"
                value={userData.userName}
                onChange={(e) => handleChange("userName", e.target.value)}
              />
            )}
          </div>
        </div>
        <div className="info-item">
          <span className="label">Số điện thoại:</span>
          <div className="value">
            {!isEditMode ? (
              userData.phoneNumber
            ) : (
              <input
                type="text"
                value={userData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            )}
          </div>
        </div>
        <div className="info-item">
          <span className="label">Giới tính:</span>
          <div className="value">
            {!isEditMode ? (
              userData.gender != null ? (
                userData.gender
              ) : (
                <ChangeInfoText onClick={handleEditButtonClick} />
              )
            ) : (
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={userData.gender || ""}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            )}
          </div>
        </div>
        <div className="info-item">
          <span className="label">Ngày sinh:</span>
          <div className="value">
            {!isEditMode ? (
              userData.dob ? (
                userData.dob.toLocaleDateString()
              ) : (
                <ChangeInfoText onClick={handleEditButtonClick} />
              )
            ) : (
              <DatePicker
                selected={userData.dob}
                onChange={(date) => handleChange("dob", date)}
                dateFormat="dd/MM/yyyy" // Format of the displayed date
              />
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="update-buttons">
        {isEditMode ? (
          <>
            <div className="save-button" onClick={handleSaveChanges}>
              Cập nhật thông tin
            </div>
          </>
        ) : (
          <div className="updated-button" onClick={handleEditButtonClick}>
            Chỉnh sửa thông tin
          </div>
        )}
      </div>
    </div>
  );
};

export default UserScreen;
