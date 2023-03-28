import type React from 'react';
import { useState } from 'react';
import Edit from '../edit/Edit';
import './Record.scss';

const Record: React.FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedAnime, setSelectedAnime] = useState<anime>();

  // 仮データハードコーディング
  type animeList = {
    animes: anime[];
  };
  type anime = {
    title: string;
    schedule: string;
    tags: string[];
    reviews: review[];
    img: string;
  };
  type review = {
    storyNumber: number;
    data: string;
  };

  const samplereview: review = {
    storyNumber: 1,
    data: '感想感想感想感想感想感想感感想感想感想感想',
  };
  const sampleanime: anime = {
    title: 'タイトル',
    schedule: Date(),
    tags: ['青春', 'バトル', '学園'],
    reviews: [samplereview, samplereview],
    img: '../../../public/img/damy-keyvisual.png',
  };
  const sampleanimeList: animeList = {
    animes: [sampleanime, sampleanime, sampleanime],
  };

  return (
    <div className="record">
      <div className="record-left">
        {sampleanimeList.animes.map((anime, index) => {
          return (
            <p
              className="record-title"
              key={index}
              aria-hidden="true"
              onClick={() => {
                setSelectedAnime(anime);
              }}
            >
              {anime.title}
            </p>
          );
        })}
      </div>

      <div className="record-right">
        <div className="record-menu">
          <button>Add</button>
        </div>
        {selectedAnime?.reviews.map((review) => (
          <div className="record-episode" key={review.storyNumber}>
            <h2 className="episode-number">{review.storyNumber}話</h2>
            <div className="record-episode-text">
              <p>{review.data}</p>
            </div>
            <div className="record-episode-bottons">
              <button
                onClick={() => {
                  setIsEdit((isEdit) => !isEdit);
                }}
              >
                edit
              </button>
              <button>view</button>
            </div>
          </div>
        )) ?? (
          <h3 className="record-null">
            感想が無い、もしくはアニメが選択されていません
          </h3>
        )}
      </div>

      {isEdit && <Edit />}
    </div>
  );
};

export default Record;
