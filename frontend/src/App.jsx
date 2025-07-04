import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import DetailPage from './components/pages/DetailsPage';
import LoginPage from './components/pages/LoginPage';
import AddMoviePage from './components/pages/AddMoviePage';
import Navbar from './components/organisms/Navbar';
import useAuth from './hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      {/* Show Navbar only if user is authenticated */}
      {isAuthenticated && <Navbar />}

      <Routes>
        {/* Protect homepage */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Protect movie details page */}
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <DetailPage />
            </ProtectedRoute>
          }
        />

        {/* Login page: redirect to home if already logged in */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
          }
        />

        {/* Protect add movie page */}
        <Route
          path="/add-movie"
          element={
            <ProtectedRoute>
              <AddMoviePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
