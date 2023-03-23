import type React from 'react';
import './LibraryCard.scss';

const LibraryCard: React.FC = () => {
  return (
    <div className="library-card">
      <div className="library-card-img">
        <img src="../../../public/img/damy-keyvisual.png" alt="" />
      </div>
      <div className="library-card-text">
        <p>2023-夏</p>
        <p>タイトル</p>
        <p>最終更新日時</p>
      </div>
    </div>
  );
};

export default LibraryCard;
