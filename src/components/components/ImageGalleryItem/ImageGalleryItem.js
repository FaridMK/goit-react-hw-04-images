import Modal from 'components/components/Modal';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <li className={s.item}>
      <img
        className={s.image}
        id={id}
        alt={tags}
        src={webformatURL}
        onClick={onModal}
      />
      {modalIsOpen && (
        <Modal
          tags={tags}
          largeImageURL={largeImageURL}
          handleClose={onModal}
        />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
