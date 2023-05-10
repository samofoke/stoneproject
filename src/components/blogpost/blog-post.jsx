import { Fragment } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import YouTubePlayer from "../youtube/youtube-player";

const BlogPost = () => {
  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ marginTop: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{ height: "100%", display: { xs: "none", md: "block" } }}
            >
              <YouTubePlayer videoLink="https://www.youtube.com/watch?v=uYMGtCRAxwQ" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <h1>News Feeds</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default BlogPost;
