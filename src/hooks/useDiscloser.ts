import { useCallback, useState } from 'react';

type useDiscloserType = [
  isOpen: boolean,
  onToggle: () => void,
  onOpen: () => void,
  onClose: () => void
];

export const useDiscloser = (defaultIsOpen?: boolean): useDiscloserType => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen ?? false);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return [isOpen, onToggle, onOpen, onClose];
};
