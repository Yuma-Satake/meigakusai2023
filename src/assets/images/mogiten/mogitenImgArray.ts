import { ImgItemType } from '@/type/ImgItemType';
import { challengeImgArray } from './challenge/challengeImgArray';
import { goukan10ImgArray } from './10goukan/goukan10ImgArray';
import { goukan1ImgArray } from './1goukan/goukan1ImgArray';
import { goukan3ImgArray } from './3goukan/goukan3ImgArray';
import { goukan6ImgArray } from './6goukan/goukan6ImgArray';

export const mogitenImgArray: ImgItemType[] = [
  ...goukan1ImgArray,
  ...goukan3ImgArray,
  ...goukan6ImgArray,
  ...goukan10ImgArray,
  ...challengeImgArray,
];
