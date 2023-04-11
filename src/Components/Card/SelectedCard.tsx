import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { memo } from "react";
import { useAppSelector } from "../../Redux/hooks";
import { rootStore } from "../../Redux/store";
import SelectedCardsContent from "./CardsContent/SelectedCardsContent";
import { SelectedItemType } from "../../types";

const SelectedCardView: React.FC = () => {
  const { data } = useAppSelector((state: rootStore) => state.selected);

  return (
    <Card
      sx={{
        width: 450,
        height: "800px",
        margin: "0 20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        {data.length ? <h2>Tab To Delete</h2> : ""}
        <Box
          sx={{
            overflowY: "auto",
            height: 700,
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          {data.length
            ? data.map((item: SelectedItemType) => {
                return <SelectedCardsContent item={item} key={item.id} />;
              })
            : ""}
        </Box>
      </CardContent>
    </Card>
  );
};
export default memo(SelectedCardView);
