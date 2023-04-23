import type React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AuthProvider } from './componets/Auth/AuthContenxt';
import AuthGuard from './componets/Auth/AuthGuard';
import Login from './componets/Auth/Login';
import Logout from './componets/Auth/Logout';
import Library from './componets/content-library/Library';
import Ranking from './componets/content-ranking/Ranking';
import Record from './componets/content-record/Record';
import Header from './componets/header/Header';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route
            path="ranking"
            element={
              <AuthGuard>
                <Ranking />
              </AuthGuard>
            }
          ></Route>
          <Route
            path="/"
            element={
              <AuthGuard>
                <Library />
              </AuthGuard>
            }
          ></Route>
          <Route
            path="record"
            element={
              <AuthGuard>
                <Record />
              </AuthGuard>
            }
          ></Route>

          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Navigate to={'/'} replace />} />
        </Routes>
      </AuthProvider>
      {/* <Content /> */}
    </>
  );
};

export default App;
