import type React from 'react';
import './RankingBox.scss';

type Props = {
  title: string;
  score: number;
};

const RankingBox: React.FC<Props> = ({ title = '', score = 0 }) => {
  return (
    <div className="ranking-box">
      <span className={score < 8 ? 'rank' : `rank${score}`}>{score}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default RankingBox;
