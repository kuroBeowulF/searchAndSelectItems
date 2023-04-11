import { Avatar, Box } from "@mui/material";
import { ProductContentType } from "../../../types";
import { useAppDispatch } from "../../../Redux/hooks";
import { selectItem } from "../../../Redux/actions/fetchDataActions";

interface props {
  item: ProductContentType;
}

const ProductCardsContent: React.FC<props> = ({ item }) => {
  const { title, description, image } = item;
  const dispatch = useAppDispatch();
  const productOnClick = () => {
    dispatch(selectItem({ id: Math.random() * Math.random(), name: title }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "auto",
        cursor: "pointer",
        alignItems: "center",
      }}
      onClick={productOnClick}
    >
      <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
      <Box sx={{ flex: 1, padding: "5px" }}>
        <Box
          sx={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {title}
        </Box>
        <Box>{description}</Box>
      </Box>
    </Box>
  );
};
export default ProductCardsContent;
