import { goukan10ImgArray } from '@/assets/images/mogiten/10goukan/goukan10ImgArray';
import { goukan1ImgArray } from '@/assets/images/mogiten/1goukan/goukan1ImgArray';
import { goukan3ImgArray } from '@/assets/images/mogiten/3goukan/goukan3ImgArray';
import { goukan6ImgArray } from '@/assets/images/mogiten/6goukan/goukan6ImgArray';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';
import { mogitenImgArray } from '@/assets/images/mogiten/mogitenImgArray';
import { ImgItemType } from '@/type/ImgItemType';
import { useState } from 'react';

export type MogitenFilterType = {
  goukan1: boolean;
  goukan3: boolean;
  goukan6: boolean;
  goukan10: boolean;
  challenge: boolean;
};

const initialFilterProperty: MogitenFilterType = {
  goukan1: true,
  goukan3: true,
  goukan6: true,
  goukan10: true,
  challenge: true,
};

type UseMogitenImgType = {
  imgItemArray: ImgItemType[];
  filterProperty: MogitenFilterType;
  filter: (filterProperty: Partial<MogitenFilterType>) => void;
};

const useMogitenImg = (): UseMogitenImgType => {
  const [imgItemArray, setImgItemArray] = useState<ImgItemType[]>([...mogitenImgArray]);
  const [_filterProperty, setFilterProperty] = useState<MogitenFilterType>(initialFilterProperty);

  const filter = (filterProperty: Partial<MogitenFilterType>): void => {
    const { goukan1, goukan3, goukan6, goukan10, challenge } = filterProperty;
    const newProperty = {
      goukan1: goukan1 ?? _filterProperty.goukan1,
      goukan3: goukan3 ?? _filterProperty.goukan3,
      goukan6: goukan6 ?? _filterProperty.goukan6,
      goukan10: goukan10 ?? _filterProperty.goukan10,
      challenge: challenge ?? _filterProperty.challenge,
    };
    const newItem = [
      ...(newProperty.goukan1 ? goukan1ImgArray : []),
      ...(newProperty.goukan3 ? goukan3ImgArray : []),
      ...(newProperty.goukan6 ? goukan6ImgArray : []),
      ...(newProperty.goukan10 ? goukan10ImgArray : []),
      ...(newProperty.challenge ? challengeImgArray : []),
    ];
    setImgItemArray(newItem);
    setFilterProperty(newProperty);
  };

  return {
    imgItemArray,
    filterProperty: _filterProperty,
    filter,
  };
};

export default useMogitenImg;
