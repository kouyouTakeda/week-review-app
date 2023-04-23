import type React from 'react';
import './EditReview.scss';
import { useState } from 'react';
import { Timestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuthContext } from '../Auth/AuthContenxt';

type formData = {
  title: string;
  storyNumber: number;
  data: string;
  date: Timestamp;
};
type Props = {
  animeId: string;
  review: (formData & { id: string }) | undefined;
  setIsEdit: React.Dispatch<
    React.SetStateAction<'null' | 'animeList' | 'review'>
  >;
};

const EditReview: React.FC<Props> = ({
  animeId,
  review = {
    title: '',
    storyNumber: 0,
    data: '',
    date: Timestamp.now(),
    id: 'null',
  },
  setIsEdit,
}) => {
  const [formData, setFormData] = useState<formData>(review);
  const user = useAuthContext();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const path = `/Users/${user?.uid ?? 'null'}/AnimeList/${animeId}/Reviews/${
      review.id
    }`;
    await updateDoc(doc(db, path), formData);
    setIsEdit('null');
  };

  return (
    <div
      className="overlay"
      aria-hidden="true"
      onClick={(e) => {
        e.target === e.currentTarget && setIsEdit('null');
      }}
    >
      <div className="edit-review">
        <form onSubmit={handleSubmit}>
          <label htmlFor="history">
            <input
              type="number"
              id="history"
              value={formData.storyNumber}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  storyNumber: Number(e.target.value),
                });
              }}
              required
            />
            <span>話</span>
          </label>

          <label htmlFor="title">
            <p>title</p>
          </label>
          <input
            type="text"
            id="title"
            placeholder="title"
            value={formData.title}
            onChange={(e) => {
              setFormData({
                ...formData,
                title: e.target.value,
              });
            }}
            required
          />

          <label htmlFor="review">
            <p>感想</p>
          </label>
          <textarea
            id="review"
            placeholder="感想"
            value={formData.data}
            onChange={(e) => {
              setFormData({
                ...formData,
                data: e.target.value,
              });
            }}
            required
          ></textarea>

          <input type="submit" value={'完了'} id="submit" />
        </form>
      </div>
    </div>
  );
};

export default EditReview;
