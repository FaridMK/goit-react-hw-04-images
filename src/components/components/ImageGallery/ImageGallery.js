import ImageGalleryItem from 'components/components/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ data }) {
  return (
    <ul className={s.gallery}>
      {data.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
