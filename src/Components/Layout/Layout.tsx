import { Box } from "@mui/material";
import ProductCardView from "../Card/ProductCard";
import UserCardView from "../Card/UserCard";
import SelectedCardView from "../Card/SelectedCard";
const Layout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "gray",
      }}
    >
      <UserCardView />
      <ProductCardView />
      <SelectedCardView />
    </Box>
  );
};
export default Layout;
