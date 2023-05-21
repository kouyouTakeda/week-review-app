import type React from 'react';
import { useState } from 'react';
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { db } from '../../firebase';
import './Record.scss';
import useRealtimeCollection from '../../hooks/useRealtimeCollection';
import { useAuthContext } from '../Auth/AuthContenxt';
import EditAnimeList from '../edit/EditAnimeList';
import EditReview from '../edit/EditReview';

type anime = {
  title: string;
  schedule: string;
  tags: string[];
  img: string;
};
type review = {
  storyNumber: number;
  title: string;
  data: string;
  date: Timestamp;
  score: number;
};
type id = {
  id: string;
};

const Record: React.FC = () => {
  const [isEdit, setIsEdit] = useState<'animeList' | 'review' | 'null'>('null');
  const [selectedAnimeId, setSelectedAnimeId] = useState('null');
  const [selectedReview, setSelectedReview] = useState<review & id>();
  const user = useAuthContext();

  // リアルタイムでanimeListを取得
  const pathOfAnimeList = `/Users/${user?.uid ?? 'null'}/AnimeList`;
  const [animeList] = useRealtimeCollection<anime & id>(pathOfAnimeList);

  const pathOfReview = `/Users/${
    user?.uid ?? 'null'
  }/AnimeList/${selectedAnimeId}/Reviews`;
  const [reviews] = useRealtimeCollection<review & id>(
    pathOfReview,
    selectedAnimeId
  );

  const addReview = async () => {
    if (selectedAnimeId === 'null') return;
    const pathOfReview = `/Users/${
      user?.uid ?? 'null'
    }/AnimeList/${selectedAnimeId}/Reviews`;
    const data = {
      storyNumber: reviews.length + 1,
      title: '',
      data: '',
      date: Timestamp.now(),
    };
    await addDoc(collection(db, pathOfReview), data);
  };
  const deleteReview = async () => {
    if (selectedReview === undefined) return;
    const pathOfReview = `/Users/${
      user?.uid ?? 'null'
    }/AnimeList/${selectedAnimeId}/Reviews/${selectedReview.id}`;

    await deleteDoc(doc(db, pathOfReview));
  };

  return (
    <div className="record">
      {isEdit === 'animeList' && <EditAnimeList setIsEdit={setIsEdit} />}
      {isEdit === 'review' && (
        <EditReview
          animeId={selectedAnimeId}
          review={selectedReview}
          setIsEdit={setIsEdit}
        />
      )}

      <div className="record-left">
        <button
          onClick={() => {
            setIsEdit('animeList');
          }}
        >
          <span>anime add</span>
          <IoIosAddCircleOutline />
        </button>
        {animeList.map((anime) => {
          const select = anime.id === selectedAnimeId ? 'select' : '';

          return (
            <p
              className={`record-title ${select}`}
              key={anime.id}
              aria-hidden="true"
              onClick={() => {
                setSelectedAnimeId(anime.id);
              }}
            >
              {anime.title}
            </p>
          );
        })}
      </div>

      <div className="record-right">
        <div className="record-menu">
          <button onClick={addReview}>
            <span>Add</span>
            <IoIosAddCircleOutline />
          </button>
        </div>
        {reviews.length ? (
          reviews
            .sort((a, b) => a.storyNumber - b.storyNumber)
            .map((review) => (
              <div className="record-episode" key={review.storyNumber}>
                <h2 className="episode-number">{review.storyNumber}話</h2>
                <div className="record-episode-text">
                  <p>{review.data}</p>
                </div>
                <div className="record-episode-bottons">
                  <button
                    onClick={() => {
                      setSelectedReview(review);
                      setIsEdit('review');
                    }}
                  >
                    <span>edit</span>
                    <AiOutlineEdit />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedReview(review);
                      deleteReview().catch((error) => {
                        console.log(error);
                      });
                    }}
                  >
                    <span>delete</span>
                    <FiDelete />
                  </button>
                </div>
              </div>
            ))
        ) : (
          <h3 className="record-null">
            感想が無い、もしくはアニメが選択されていません
          </h3>
        )}
      </div>
    </div>
  );
};

export default Record;
