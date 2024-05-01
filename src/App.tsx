import { useState } from "react";
import Popup from "./components/PopUp";
import TabMenu from "./components/TabMenu";
import ButtonProfile from "./components/ButtonProfile";
function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phone, setPhone] = useState();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // If authenticated, log out
      setIsLoggedIn(false);
    } else {
      // If not authenticated, open login popup
      setPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Functio                                           n to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true
    setPopupOpen(false); // Close the popup
  };
  return (
    <>
        <ButtonProfile
          p={{
            onClick: handleButtonClick,
            isLoggedIn: isLoggedIn,
          }}
          
        />
        {isLoggedIn ? (
          <TabMenu />
        ) : (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
    </>
  );
}

export default App;
