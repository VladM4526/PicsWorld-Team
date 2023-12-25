import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from './CloseIcon';
import {
  CloseButtonStyled,
  CloseIconStyled,
  ModalTitleWrapStyled,
  ModalWindowStyled,
  ModalWrapStyled,
} from './ModalWrapper.styled';

const modalRoot = document.querySelector('#modal-root');

export function ModalWrapper({ title, children, onClose }) {
  useEffect(() => {
    const handleCloseESC = e => {
      if (e.code === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleCloseESC);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleCloseESC);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalWrapStyled onClick={handleClose}>
      <ModalWindowStyled>
        <ModalTitleWrapStyled>
          <h2>{title}</h2>
          <CloseButtonStyled
            type="button"
            onClick={() => {
              onClose();
            }}
          >
            <CloseIcon />
          </CloseButtonStyled>
        </ModalTitleWrapStyled>
        {children}
      </ModalWindowStyled>
    </ModalWrapStyled>,
    modalRoot
  );
}
