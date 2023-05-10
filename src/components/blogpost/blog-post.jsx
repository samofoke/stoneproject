import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BlogPost = () => {
  return (
    <Container
      maxWidth="lx"
      sx={{ marginTop: 8, backgroundColor: "lightgray" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>Sample 1</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>News Feeds</Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPost;
