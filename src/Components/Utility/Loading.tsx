import { Box, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ width: "80% ", margin: "0 auto" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton />
    </Box>
  );
};
export default Loading;
