import type React from 'react';
import './LibraryCard.scss';

type Props = {
  imgUrl?: string;
  title?: string;
  schedule?: string;
  updateDate?: string;
  tags?: string[];
};

const LibraryCard: React.FC<Props> = ({
  imgUrl = '../../../public/img/damy-keyvisual.png',
  title = '未設定',
  schedule = 'xxxx-x',
  updateDate = '最終更新日時',
}) => {
  return (
    <div className="library-card">
      <div className="library-card-img">
        <img src={imgUrl || '../../../public/img/damy-keyvisual.png'} alt="" />
      </div>
      <div className="library-card-text">
        <p>{schedule}</p>
        <p>{title}</p>
        <p>{updateDate}</p>
      </div>
    </div>
  );
};

export default LibraryCard;
