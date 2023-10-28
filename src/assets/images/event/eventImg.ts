import { ImgItemType } from '@/type/ImgItemType';
import { goukan1EventImg } from './1goukan/goukan1EventImg';
import { goukan6EventImg } from './6goukan/goukan6EventImg';
import { goukan10EventImg } from './10goukan/goukan10EventImg';

export const eventImg: ImgItemType[] = [
  ...goukan1EventImg,
  ...goukan6EventImg,
  ...goukan10EventImg,
];
