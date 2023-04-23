import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/navigation/navbar";
import HomePage from "./routes/home/homepage";
import CelebrityNews from "./routes/celebrities/celebrity-news";
import Fashion from "./routes/fashion/fashion";
import Music from "./routes/music/music";
import TvComponent from "./routes/tv/tv";
import InterNational from "./routes/international/international";
import PodCast from "./routes/podcast/podcast";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/celebrity-news" element={<CelebrityNews />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/music" element={<Music />} />
        <Route path="/tv" element={<TvComponent />} />
        <Route path="/international" element={<InterNational />} />
        <Route path="/podcast" element={<PodCast />} />
      </Route>
    </Routes>
  );
};

export default App;
