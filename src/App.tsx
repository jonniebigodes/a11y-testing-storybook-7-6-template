import { Global } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home/HomePage";
import { AboutPage } from "./pages/About/AboutPage";
import { PostPage } from "./pages/PostsPage/PostPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <Global styles={GlobalStyle(theme)} />
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
