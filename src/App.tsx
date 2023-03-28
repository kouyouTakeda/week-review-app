import type React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Library from './componets/content-library/Library';
import Ranking from './componets/content-ranking/Ranking';
import Record from './componets/content-record/Record';
import Header from './componets/header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="ranking" element={<Ranking />}></Route>
        <Route path="/" element={<Library />}></Route>
        <Route path="record" element={<Record />}></Route>

        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
      {/* <Content /> */}
    </>
  );
};

export default App;
