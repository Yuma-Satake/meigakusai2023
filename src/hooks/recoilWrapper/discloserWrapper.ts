import { SetterOrUpdater } from 'recoil';

type Props = [boolean, SetterOrUpdater<boolean>];

type DiscloserWrapperType = [
  isOpen: boolean,
  onToggle: () => void,
  onOpen: () => void,
  onClose: () => void
];

export const discloserWrapper = (props: Props): DiscloserWrapperType => {
  const [isOpen, setIsOpen] = props;

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return [isOpen, onToggle, onOpen, onClose];
};
