import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const useRealtimeCollection = <T>(path: string, dependency?: string): T[][] => {
  const [collectionData, setCollectionData] = useState<T[]>([]);
  // リアルタイムでpathのコレクションを取得
  useEffect(() => {
    const close = onSnapshot(collection(db, path), (snapshot) => {
      const result: T[] = [];
      snapshot.forEach((doc) => {
        result.push({
          ...(doc.data() as T),
          id: doc.id,
        });
      });
      setCollectionData(result);
    });

    return () => {
      close();
    };
  }, [dependency]);

  return [collectionData];
};

export default useRealtimeCollection;
