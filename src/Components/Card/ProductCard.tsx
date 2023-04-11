import { Button, TextField, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { memo, useEffect } from "react";
import Loading from "../Utility/Loading";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { rootStore } from "../../Redux/store";
import {
  clearList,
  filterProductItems,
  getProductData,
} from "../../Redux/actions/fetchDataActions";
import { ProductContentType } from "../../types";
import ProductCardsContent from "./CardsContent/ProductCardsContent";

const ProductCardView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filterdData, loading } = useAppSelector(
    (state: rootStore) => state.product
  );
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <Card
      sx={{
        width: 450,
        height: "800px",
        margin: "0 20px",
      }}
    >
      {!loading ? (
        <Loading />
      ) : (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            placeholder="Search..."
            onChange={(e) => dispatch(filterProductItems(e.target.value))}
          />
          <Box
            sx={{
              maxHeight: "700px",
              flex: 1,
              padding: "10px 0 5px 0",
              overflow: "auto",
              marginTop: "10px",
            }}
          >
            {filterdData.map((item: ProductContentType) => {
              return <ProductCardsContent item={item} key={item.id} />;
            })}
          </Box>
          <Button
            sx={{ width: "100%", marginTop: "10px" }}
            variant="contained"
            onClick={() => dispatch(clearList())}
          >
            Clear List
          </Button>
        </CardContent>
      )}
    </Card>
  );
};
export default memo(ProductCardView);
