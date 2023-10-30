import { FC, useEffect, useState } from 'react';

const imgList = ['./C1.jpg', './C2.jpg', './C3.jpg'];

export const Carousel: FC = () => {
  /**
   * カルーセル用
   */
  const [imgListPointer, setImgListPointer] = useState<number>(0);
  const [imgOpacity, setImgOpacity] = useState<number>(1);
  /**
   * 5秒ごとに1枚後ろの画像に切り替える
   * - 画像が切り替わる前後で透明度を変更する
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setImgOpacity(0);
      setTimeout(() => {
        const nextImgPointer = imgListPointer === imgList.length - 1 ? 0 : imgListPointer + 1;
        setImgListPointer(nextImgPointer);
        setImgOpacity(1);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  });
  return (
    <img
      src={imgList[imgListPointer]}
      alt="名学祭イメージ画像"
      loading="lazy"
      style={{
        position: 'relative',
        zIndex: 0,
        opacity: imgOpacity,
        transitionProperty: 'opacity',
        transitionDuration: '1s',
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
      }}
    />
  );
};
