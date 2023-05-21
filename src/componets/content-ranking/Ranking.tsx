import type React from 'react';
import './Ranking.scss';
import { useEffect, useState } from 'react';
import {
  type Timestamp,
  collection,
  getDocs,
  query,
  where,
  type Query,
} from 'firebase/firestore';
import { db } from '../../firebase';
import useScheduleList from '../../hooks/useScheduleList';
import { useAuthContext } from '../Auth/AuthContenxt';
import RankingBox from './RankingBox/RankingBox';

type Review = {
  data: string;
  date: Timestamp;
  id: string;
  storyNumber: number;
  title: string;
  score: number;
};

const Ranking: React.FC = () => {
  const user = useAuthContext();
  const [formData, setFormData] = useState<{
    schedule: string;
    storyNumber: number;
  }>({ schedule: '2023-春', storyNumber: 0 });
  const [rankingData, setRankingData] = useState<Review[]>([]);
  const [scheduleList] = useScheduleList();

  useEffect(() => {
    const getRankingData = async () => {
      // AnimeListコレクションのクエリ検索
      const q = query(
        collection(db, `Users/${user?.uid ?? 'null'}/AnimeList`),
        where('schedule', '==', formData.schedule)
      );
      // 取得したデータのさらにサブコレクションのクエリ検索
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (snapshot) => {
        const postQuery = query(
          collection(snapshot.ref, 'Reviews'),
          where('storyNumber', '==', formData.storyNumber)
        ) as Query<Review>;

        const postQuerySnapshot = await getDocs<Review>(postQuery);
        postQuerySnapshot.forEach((doc) => {
          setRankingData((prevState) => [...prevState, doc.data()]);
        });
      });
    };

    setRankingData([]);
    getRankingData().catch((error) => {
      console.log(error);
    });
  }, [formData]);

  return (
    <div className="ranking">
      <div className="ranking-data">
        <select
          name=""
          id=""
          onChange={(e) => {
            setFormData({ ...formData, schedule: e.target.value });
          }}
        >
          {scheduleList.length ? (
            <option hidden>クールを選択してください</option>
          ) : (
            <option hidden>データがありません</option>
          )}
          {scheduleList.map((schedule) => {
            return (
              <option value={schedule} key={schedule}>
                {schedule}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          value={formData.storyNumber}
          min={0}
          onChange={(e) => {
            setFormData({
              ...formData,
              storyNumber: Number.parseInt(e.target.value),
            });
          }}
        />
        <span className="story-number">話</span>
      </div>
      <div className="ranking-list">
        {rankingData
          .sort((a, b) => b.score - a.score)
          .map((ranking) => {
            return (
              <RankingBox
                key={ranking.id}
                title={ranking.title}
                score={ranking.score}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Ranking;
