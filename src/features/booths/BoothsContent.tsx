import { Layout } from '@/components/layout/Layout';
import { MogitenFilterType } from '@/hooks/useMogitenImg';
import { Box, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';

type FilterCheckBoxType = {
  key: keyof MogitenFilterType;
  label: string;
};

const filterCheckBoxList: FilterCheckBoxType[] = [
  {
    key: 'goukan1',
    label: '1号館',
  },
  {
    key: 'goukan3',
    label: '3号館',
  },
  {
    key: 'goukan6',
    label: '6号館',
  },
  {
    key: 'goukan10',
    label: '10号館',
  },
  {
    key: 'challenge',
    label: 'チャレンジングロッド',
  },
];

const initialCheckedList = filterCheckBoxList.map(() => true);

const BoothsContent: FC = () => {
  const [checkedList, setCheckedList] = useState<boolean[]>(initialCheckedList);

  return (
    <Layout>
      <Stack
        spacing={1}
        sx={{
          p: 3,
        }}
      >
        <Typography variant="h6">模擬店一覧</Typography>
        <Stack>
          {filterCheckBoxList.map((item, index) => {
            return (
              <FormControlLabel
                key={item.key}
                control={
                  <Checkbox
                    checked={checkedList[index]}
                    onClick={() => {
                      console.log(checkedList);
                      setCheckedList((prev) => {
                        return prev.map((prevItem, prevIndex) => {
                          return prevIndex === index ? !prevItem : prevItem;
                        });
                      });
                    }}
                  />
                }
                label={item.label}
              />
            );
          })}
        </Stack>
      </Stack>
    </Layout>
  );
};

export default BoothsContent;
