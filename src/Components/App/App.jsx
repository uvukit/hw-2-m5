import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Main, PostDetails } from "../../pages";
const Post = lazy(() => import("../../pages/Post/Post"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route
            path="/post"
            element={
              <Suspense fallback={<div> <h1>Loading ... </h1></div>}>
                <Post />
              </Suspense>
            }
          />
          <Route path="/post/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;