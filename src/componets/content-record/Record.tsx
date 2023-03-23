import type React from 'react';
import Edit from '../edit/Edit';
import './Record.scss';

const Record: React.FC = () => {
  return (
    <div className="record">
      <div className="record-left">
        <p className="record-title">タイトル</p>
        <p className="record-title">タイトル</p>
        <p className="record-title">タイトル</p>
      </div>

      <div className="record-right">
        <div className="record-menu">
          <button>Add</button>
        </div>
        <div className="record-episode">
          <h2 className="episode-number">1話</h2>
          <div className="record-episode-text">
            <p>
              感想感想感想感想感想感想感感想感想感想感想感想
              感想感感想感想感想感想感想感想感感想感想感想感
              想感想感想感想感感想感想感想感想感想感想感感想
              感想感想感想感想感想感感想感想感想感想感想感想
              感想感感想感想感想感想感想感想感感想感想感想感
            </p>
          </div>
          <div className="record-episode-bottons">
            <button>eidt</button>
            <button>view</button>
          </div>
        </div>
      </div>

      <Edit />
    </div>
  );
};

export default Record;
