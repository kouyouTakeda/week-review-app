import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useAuthContext } from '../componets/Auth/AuthContenxt';
import { db } from '../firebase';

type Anime = {
  img: string;
  schedule: string;
  tags: string[];
  title: string;
};

const useScheduleList = (): string[][] => {
  const auth = useAuthContext();
  const [scheduleList, setScheduleList] = useState<string[]>([]);

  // schdeleのリストを取得
  useEffect(() => {
    const getScheduleList = async () => {
      // 重複なし
      const scheduleSet = new Set<string>();
      const querySnapshot = await getDocs(
        collection(db, `Users/${auth?.uid ?? 'null'}/AnimeList`)
      );
      querySnapshot.forEach((doc) => {
        const result = doc.data() as Anime;
        scheduleSet.add(result.schedule);
      });
      setScheduleList([...scheduleSet]);
    };

    getScheduleList().catch((error) => {
      console.log(error);
    });
  }, []);

  return [scheduleList];
};

export default useScheduleList;
