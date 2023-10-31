import { BooleanStrEnum } from './BooleanStrEnum';

export const IS_DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === BooleanStrEnum.TRUE;
