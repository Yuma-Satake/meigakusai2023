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
  filter: (filterProperty: MogitenFilterType) => void;
};

const useMogitenImg = (): UseMogitenImgType => {
  const [imgItemArray, setImgItemArray] = useState<ImgItemType[]>([...mogitenImgArray]);
  const [_filterProperty, setFilterProperty] = useState<MogitenFilterType>(initialFilterProperty);

  const filter = (filterProperty: MogitenFilterType): void => {
    const { goukan1, goukan3, goukan6, goukan10, challenge } = filterProperty;
    const newItem = [
      ...(goukan1 ? mogitenImgArray : []),
      ...(goukan3 ? mogitenImgArray : []),
      ...(goukan6 ? mogitenImgArray : []),
      ...(goukan10 ? mogitenImgArray : []),
      ...(challenge ? mogitenImgArray : []),
    ];
    setImgItemArray(newItem);
    setFilterProperty(filterProperty);
  };

  return {
    imgItemArray,
    filterProperty: _filterProperty,
    filter,
  };
};

export default useMogitenImg;
