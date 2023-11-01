import { goukan10ImgArray } from '@/assets/images/mogiten/10goukan/goukan10ImgArray';
import { goukan1ImgArray } from '@/assets/images/mogiten/1goukan/goukan1ImgArray';
import { goukan3ImgArray } from '@/assets/images/mogiten/3goukan/goukan3ImgArray';
import { goukan6ImgArray } from '@/assets/images/mogiten/6goukan/goukan6ImgArray';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';
import { Layout } from '@/components/layout/Layout';
import { boothSelectState } from '@/hooks/state/boothSelectState';
import useImg, { FilterCheckBoxType } from '@/hooks/useImg';
import {
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { FilterButtonGroup } from '../FilterButtonGroup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const useImgInitial = {
  goukan1: goukan1ImgArray,
  goukan3: goukan3ImgArray,
  goukan6: goukan6ImgArray,
  goukan10: goukan10ImgArray,
  challenge: challengeImgArray,
};

export const filterCheckBoxList: FilterCheckBoxType[] = [
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

export const searchWordChip = ['ボードゲーム', 'うどん', 'ゲーム', 'メイド'];

const BoothsContent: FC = () => {
  const { imgItemArray, filterProperty, filter, wordFilter } = useImg(useImgInitial);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(true);
  const boothSelectValue = useRecoilValue(boothSelectState);

  /**
   * 絞り込み・検索用
   */
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // もし challengeのみが選択されていたら、"食品店のみ絞り込み"というメッセージを表示する
    if (
      filterProperty.challenge &&
      !filterProperty.goukan1 &&
      !filterProperty.goukan3 &&
      !filterProperty.goukan6 &&
      !filterProperty.goukan10
    ) {
      setMessage('(食品店のみ絞り込み)');
      return;
    }
    // 1号館・3号館・10号館のみが選択されていたら、"食品店以外のみ絞り込み"というメッセージを表示する
    if (
      !filterProperty.challenge &&
      filterProperty.goukan1 &&
      filterProperty.goukan3 &&
      !filterProperty.goukan6 &&
      filterProperty.goukan10
    ) {
      setMessage('(食品店以外のみ絞り込み)');
      return;
    }
    setMessage('');
  }, [filterProperty]);

  // searchInputが変更されたら絞り込みを行う
  useEffect(() => {
    wordFilter(searchInput);
  }, [searchInput]);

  const handleAllChecked = () => {
    setIsAllChecked(!isAllChecked);
    filter({
      goukan1: !isAllChecked,
      goukan3: !isAllChecked,
      goukan6: !isAllChecked,
      goukan10: !isAllChecked,
      challenge: !isAllChecked,
    });
  };

  // 全てのチェックボックスがチェックされているかどうか
  useEffect(() => {
    const isAllChecked = filterCheckBoxList.every((item) => {
      return filterProperty[item.key];
    });
    setIsAllChecked(isAllChecked);
  }, [filterProperty]);

  useEffect(() => {
    filter(boothSelectValue);
  }, [boothSelectValue]);

  return (
    <Layout>
      <Stack
        spacing={1}
        sx={{
          p: 3,
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h6">模擬店一覧</Typography>
          <FilterButtonGroup
            isOpenFilter={isOpenFilter}
            isOpenSearch={isOpenSearch}
            onFilterClick={() => {
              setIsOpenSearch(false);
              setIsOpenFilter(!isOpenFilter);
            }}
            onSearchClick={() => {
              setIsOpenFilter(false);
              setIsOpenSearch(!isOpenSearch);
            }}
          />
          {isOpenFilter ? (
            <Stack
              sx={{
                py: 2,
                pb: 3,
                bgcolor: 'white',
                position: 'absolute',
                top: 160,
                left: 0,
                right: 0,
                pl: 3,
                boxShadow: '10',
              }}
            >
              <FormControlLabel
                label="全ての模擬店"
                control={<Checkbox checked={isAllChecked} onClick={handleAllChecked} />}
              />
              {filterCheckBoxList.map((item) => {
                return (
                  <FormControlLabel
                    key={item.key}
                    label={item.label}
                    control={<Checkbox checked={filterProperty[item.key]} />}
                    onClick={() => {
                      const changeKey = item.key;
                      filter({
                        [changeKey]: !filterProperty[item.key],
                      });
                    }}
                  />
                );
              })}
            </Stack>
          ) : null}
          {isOpenSearch ? (
            <Stack
              sx={{
                py: 2,
                pb: 2,
                bgcolor: 'white',
                position: 'absolute',
                top: 160,
                left: 0,
                right: 0,
                px: 3,
                boxShadow: 5,
              }}
            >
              <OutlinedInput
                value={searchInput}
                onChange={handleSearchInput}
                placeholder="フリーワード検索"
                endAdornment={
                  <IconButton
                    onClick={() => {
                      setSearchInput('');
                    }}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                }
              />
              <Typography
                variant="caption"
                sx={{
                  mt: 1.5,
                }}
              >
                よく検索されているワード
              </Typography>
              <Grid
                container
                sx={{
                  pt: 1,
                }}
              >
                {searchWordChip.map((item) => {
                  return <Chip key={item} label={item} sx={{ mr: 0.5 }} />;
                })}
              </Grid>
            </Stack>
          ) : null}
        </Stack>
        <Typography
          variant="h6"
          sx={{
            borderBottom: '0.5px solid black',
            py: 1,
          }}
        >
          {imgItemArray.length}件
          <Typography variant="caption" sx={{ ml: 1 }}>
            {message}
          </Typography>
        </Typography>
        <Grid container>
          {imgItemArray.length > 0 ? (
            imgItemArray.map((item, index) => {
              return (
                <Grid key={item.alt + index} item xs={6} sx={{ p: 1 }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '5px',
                    }}
                  />
                </Grid>
              );
            })
          ) : (
            <Grid
              item
              xs={12}
              sx={{
                p: 3,
                border: '0.5px solid black',
                borderRadius: '5px',
                textAlign: 'center',
              }}
            >
              <Typography>対象の店舗はありません</Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
    </Layout>
  );
};

export default BoothsContent;
