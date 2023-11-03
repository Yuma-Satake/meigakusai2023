import { Layout } from '@/components/layout/Layout';
import { ADMIN_PASS } from '@/const/AdminPass';
import { db } from '@/lib/firebase';
import { Stack, TextField, Typography } from '@mui/material';
import { collection, getDocs, query } from 'firebase/firestore';
import { FC, useEffect, useState } from 'react';

const EventsPage: FC = () => {
  const [passText, setPassText] = useState<string>('');
  const [isPassOk, setIsPassOk] = useState<boolean>(false);
  const [rankingList, setRankingList] = useState<{ label: string; count: number }[]>([]);

  const findMostFrequentString = (arr: string[]) => {
    const frequency: { [key: string]: number } = arr.reduce(
      (acc: { [key: string]: number }, curr: string) => {
        if (curr in acc) {
          acc[curr]++;
        } else {
          acc[curr] = 1;
        }
        return acc;
      },
      {}
    );

    // frequencyの大きい順に並び替え
    const sortedList = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

    const newItem = sortedList.map((item) => {
      return { label: item[0], count: item[1] };
    });

    return newItem;
  };

  useEffect(() => {
    try {
      (async () => {
        const q = query(collection(db, 'searchWords'));
        const querySnapshot = await getDocs(q);
        let array: string[] = [];
        querySnapshot.forEach((doc) => {
          array.push(doc.data().word);
        });
        const newItem = findMostFrequentString(array);
        setRankingList(newItem);
      })();
    } catch (e) {
      console.error(e);
    }
  }, [isPassOk === true]);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassText(newValue);
    if (newValue.length === ADMIN_PASS.length) {
      if (newValue.includes(ADMIN_PASS)) {
        setIsPassOk(true);
      }
    }
  };

  return (
    <Layout>
      <Stack sx={{ p: 5 }}>
        {isPassOk ? (
          <Stack>
            {rankingList && rankingList.length > 0
              ? rankingList.map((item, index) => (
                  <div key={item.label}>
                    <Stack direction="row">
                      <Typography sx={{ width: '2em', textAlign: 'right' }}>{index + 1}</Typography>
                      位：
                      <Typography sx={{ width: '2em', textAlign: 'right' }}>
                        {item.count}
                      </Typography>
                      回：
                      {item.label}
                    </Stack>
                  </div>
                ))
              : null}
          </Stack>
        ) : (
          <TextField value={passText} onChange={handleChangeText} label="pass" />
        )}
      </Stack>
    </Layout>
  );
};

export default EventsPage;
