import type React from 'react';
import LibraryCard from '../LibraryCard/LibraryCard';
import './Library.scss';

const Library: React.FC = () => {
  return (
    <div className="library">
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
    </div>
  );
};

export default Library;
