import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreatePost, Home } from "./pages";
import Layout from "./layout/layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/create-post"
          element={
            <Layout>
              <CreatePost />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
