import type React from 'react';
import './RankingBox.scss';

const RankingBox: React.FC = () => {
  return (
    <div className="ranking-box">
      <span className="rank">1</span>
      <h2>タイトル</h2>
    </div>
  );
};

export default RankingBox;
