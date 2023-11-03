import { BooleanStrEnum } from './BooleanStrEnum';

export const IS_DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === BooleanStrEnum.TRUE;
export const IS_USE_FIREBASE = process.env.NEXT_PUBLIC_USE_FIREBASE === BooleanStrEnum.TRUE;
