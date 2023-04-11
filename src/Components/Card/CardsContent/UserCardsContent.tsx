import { Avatar, Box } from "@mui/material";
import { UserContentType } from "../../../types";
import { useAppDispatch } from "../../../Redux/hooks";
import { selectItem } from "../../../Redux/actions/fetchDataActions";

interface props {
  item: UserContentType;
}

const UserCardsContent: React.FC<props> = ({ item }) => {
  const { name, email } = item;
  const dispatch = useAppDispatch();
  const userOnClick = () => {
    dispatch(selectItem({ id: Math.random() * Math.random(), name }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "80px",
        cursor: "pointer",
        alignItems: "center",
      }}
      onClick={userOnClick}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <Box sx={{ flex: 1, padding: "5px" }}>
        <Box
          sx={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {name}
        </Box>
        <Box>{email}</Box>
      </Box>
    </Box>
  );
};
export default UserCardsContent;
