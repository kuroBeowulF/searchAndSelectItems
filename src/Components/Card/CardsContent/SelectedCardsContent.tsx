import { Box } from "@mui/material";
import { useAppDispatch } from "../../../Redux/hooks";
import { removeItem } from "../../../Redux/actions/fetchDataActions";
import { SelectedItemType } from "../../../types";
interface props {
  item: SelectedItemType;
}
const SelectedCardsContent: React.FC<props> = ({ item }) => {
  const { id, name } = item;
  const dispatch = useAppDispatch();
  const selectedOnClick = () => {
    dispatch(removeItem(id));
  };
  return (
    <Box
      sx={{
        width: "fit-content",
        height: "40px",
        cursor: "pointer",
        borderRadius: "40px",
        padding: "10px 10px",
        backgroundColor: "#1976d2",
        maxWidth: "350px",
        color: "#fff",
        margin: "5px 5px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
      onClick={selectedOnClick}
    >
      {name}
    </Box>
  );
};
export default SelectedCardsContent;
