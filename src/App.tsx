import type React from 'react';
import './App.scss';
import Content from './componets/content/Content';
import Header from './componets/header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default App;
