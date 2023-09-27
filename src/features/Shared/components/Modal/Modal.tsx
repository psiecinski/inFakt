import { ModalContent, ModalWrapper, CloseButton } from "./Modal.styled";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <img alt="more soon" src="https://i.imgur.com/oJYvBt4.jpg" />
        <CloseButton onClick={onClose}>Zamknij</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;