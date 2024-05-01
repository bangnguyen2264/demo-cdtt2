import PersonIcon from "@mui/icons-material/Person";

interface ButtonProps {
  onClick: () => void;
  isLoggedIn: boolean;
}

const ButtonProfile : React.FC<{ p: ButtonProps }> = ({p}) => {
  return (
    <div className="button" onClick={p.onClick}>
      <PersonIcon className="icon-button" />
      <a href="#" className="button-content">
        {p.isLoggedIn ? "Username" : "Đăng nhập"}
      </a>
    </div>
  );
};

export default ButtonProfile;
