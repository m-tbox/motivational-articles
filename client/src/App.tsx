// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ArticleDetail from './pages/ArticleDetail';
import Articles from './pages/Articles';
import ArticlesPlan from './pages/ArticlesPlan';
import LandingPage from './pages/LandingPage';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/articles" element={<ProtectedRoute />}>
          <Route path="/articles" element={<Articles />} />
        </Route>

        <Route path="/article-plans" element={<ProtectedRoute />}>
          <Route path="/article-plans" element={<ArticlesPlan />} />
        </Route>

        <Route path="/article-detail" element={<ProtectedRoute />}>
          <Route path="/article-detail/:id" element={<ArticleDetail />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
