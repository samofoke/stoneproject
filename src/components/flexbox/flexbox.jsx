import { Box } from "@mui/material";

const Item = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        display: "flex",
        p: 1,
        m: 1,
        bgcolor: "grey.100",
        border: "1px solid",
        borderColor: "grey.800",
        borderRadius: 2,
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
};

const FlexBoxLayout = () => {
  return (
    <div style={{ widows: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Item>Sample 1</Item>
        <Item>Sample 2</Item>
        <Item>Sample 3</Item>
      </Box>
    </div>
  );
};

export default FlexBoxLayout;
