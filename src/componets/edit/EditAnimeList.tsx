import type React from 'react';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import './EditAnimeList.scss';
import { useAuthContext } from '../Auth/AuthContenxt';

type Props = {
  setIsEdit: React.Dispatch<
    React.SetStateAction<'null' | 'animeList' | 'review'>
  >;
};

type anime = {
  title: string;
  schedule: string;
  tags: string[];
  img: string;
};

const EditAnimeList: React.FC<Props> = ({ setIsEdit }) => {
  const user = useAuthContext();
  const [formData, setFormData] = useState<anime>({
    title: '',
    schedule: '',
    tags: [],
    img: '',
  });
  const addAnime = async (data: anime) => {
    if (user === null) return;
    await addDoc(collection(db, 'Users', user.uid, 'AnimeList'), data);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addAnime(formData);
    setIsEdit('null');
  };

  return (
    <div
      className="overlay"
      aria-hidden="true"
      onClick={(e) => {
        // ポップアップ以外をクリックしたら閉じる
        e.target === e.currentTarget && setIsEdit('null');
      }}
    >
      <div className="edit-animelist">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            <p>title</p>
          </label>
          <input
            type="text"
            id="title"
            placeholder="title"
            onChange={(e) => {
              setFormData({
                ...formData,
                title: e.target.value,
              });
            }}
            required
          />
          <label htmlFor="schedule">クール</label>
          <input
            type="text"
            id="schedule"
            placeholder="20xx-季節"
            onChange={(e) => {
              setFormData({
                ...formData,
                schedule: e.target.value,
              });
            }}
            required
          />
          <input id="submit" type="submit" value="完了" />
        </form>
      </div>
    </div>
  );
};

export default EditAnimeList;
