import { ImgItemType } from '@/types/ImgItemType';
import { useState } from 'react';

export type FilterType = {
  goukan1: boolean;
  goukan3: boolean;
  goukan6: boolean;
  goukan10: boolean;
  challenge: boolean;
};

export const initialFilterProperty: FilterType = {
  goukan1: true,
  goukan3: true,
  goukan6: true,
  goukan10: true,
  challenge: true,
};

export type FilterCheckBoxType = {
  key: keyof FilterType;
  label: string;
};

type Props = {
  goukan1: ImgItemType[];
  goukan3: ImgItemType[];
  goukan6: ImgItemType[];
  goukan10: ImgItemType[];
  challenge: ImgItemType[];
};

type UseImgType = {
  imgItemArray: ImgItemType[];
  filterProperty: FilterType;
  filter: (filterProperty: Partial<FilterType>) => void;
  wordFilter: (filterWord: string) => void;
};

const useImg = ({ goukan1, goukan3, goukan6, goukan10, challenge }: Props): UseImgType => {
  const allImgArray = [...goukan1, ...goukan3, ...goukan6, ...goukan10, ...challenge];
  const initialOriginalImgArray = {
    goukan1,
    goukan3,
    goukan6,
    goukan10,
    challenge,
  };
  const [originalImgArray] = useState<Props>(initialOriginalImgArray);
  const [imgItemArray, setImgItemArray] = useState<ImgItemType[]>(allImgArray);
  const [_filterProperty, setFilterProperty] = useState<FilterType>(initialFilterProperty);
  const [_filterWord, setFilterWord] = useState<string>('');

  const filter = (filterProperty: Partial<FilterType>): void => {
    const { goukan1, goukan3, goukan6, goukan10, challenge } = filterProperty;
    const newProperty = {
      goukan1: goukan1 ?? _filterProperty.goukan1,
      goukan3: goukan3 ?? _filterProperty.goukan3,
      goukan6: goukan6 ?? _filterProperty.goukan6,
      goukan10: goukan10 ?? _filterProperty.goukan10,
      challenge: challenge ?? _filterProperty.challenge,
    };
    const newItem = [
      ...(newProperty.goukan1 ? originalImgArray.goukan1 : []),
      ...(newProperty.goukan3 ? originalImgArray.goukan3 : []),
      ...(newProperty.goukan6 ? originalImgArray.goukan6 : []),
      ...(newProperty.goukan10 ? originalImgArray.goukan10 : []),
      ...(newProperty.challenge ? originalImgArray.challenge : []),
    ]
      .sort((item) => Number(item.alt.slice(-5, -4)))
      .filter((item) => item.alt.includes(_filterWord));

    setImgItemArray(newItem);
    setFilterProperty(newProperty);
  };

  const wordFilter = (filterWord: string): void => {
    setFilterWord(filterWord);
    const newItem = [
      ...(_filterProperty.goukan1 ? originalImgArray.goukan1 : []),
      ...(_filterProperty.goukan3 ? originalImgArray.goukan3 : []),
      ...(_filterProperty.goukan6 ? originalImgArray.goukan6 : []),
      ...(_filterProperty.goukan10 ? originalImgArray.goukan10 : []),
      ...(_filterProperty.challenge ? originalImgArray.challenge : []),
    ]
      .sort((item) => Number(item.alt.slice(-5, -4)))
      .filter((item) => item.alt.includes(filterWord));

    setImgItemArray(newItem);
  };

  return {
    imgItemArray,
    filterProperty: _filterProperty,
    filter,
    wordFilter,
  };
};

export default useImg;
