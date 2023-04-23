import type React from 'react';
import { useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuthContext } from '../Auth/AuthContenxt';
import LibraryCard from '../LibraryCard/LibraryCard';
import './Library.scss';

type anime = {
  id: string;
  title: string;
  tags: string[];
  img: string;
  schedule: string;
};

const Library: React.FC = () => {
  const user = useAuthContext();
  const [animeList, setAnimeList] = useState<anime[]>([]);
  if (user === null) return null;

  onSnapshot(
    collection(db, 'Users', user.uid, 'AnimeList'),
    (querySnapshot) => {
      const setData: anime[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as anime;
        setData.push({
          id: doc.id,
          title: data.title,
          tags: data.tags,
          img: data.img,
          schedule: data.schedule,
        });
      });
      setAnimeList(setData);
    }
  );

  return (
    <div className="library">
      {animeList.map((anime) => {
        return (
          <LibraryCard
            key={anime.id}
            title={anime.title}
            schedule={anime.schedule}
            imgUrl={anime.img}
            tags={anime.tags}
          />
        );
      })}
    </div>
  );
};

export default Library;
