import { atom } from 'recoil';
import { FilterType, initialFilterProperty } from '../useImg';

export const boothSelectState = atom<FilterType>({
  key: 'boothSelectState',
  default: initialFilterProperty,
});
