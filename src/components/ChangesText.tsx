import { Button } from "@mui/material";

interface ChangeInfoTextProps {
  onClick: () => void;
}

const ChangeInfoText = ({ onClick }: ChangeInfoTextProps) => {
  return (
    <Button className="updated-text" onClick={onClick}>
      Chỉnh sửa thông tin
    </Button>
  );
};

export default ChangeInfoText;
