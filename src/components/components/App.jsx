import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import searchImages from './services/API';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    async function getImages() {
      setIsLoading(true);
      try {
        const {
          data: { hits, totalHits },
        } = await searchImages(searchValue, page);

        if (page === 1) {
          if (totalHits === 0) {
            setIsLoading(false);
            return Notiflix.Notify.failure('No results, try again');
          }

          Notiflix.Notify.success(`We found ${totalHits} images`);

          setTotalHits(totalHits);
        }

        setIsLoading(false);
        setImages(prevState => [...prevState, ...hits]);
      } catch (error) {
        setError(error.message);
        Notiflix.Notify.failure(`Error - ${error.message}`);
      }
    }

    getImages();
  }, [page, searchValue]);

  const onSubmit = event => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim().toLowerCase();

    if (query === '' || query === searchValue) {
      Notiflix.Notify.warning('Please, enter another search parameters');
      event.target.reset();
      return;
    }

    if (query !== searchValue || page !== 1) {
      setSearchValue(query);
      setImages([]);
      setPage(1);
      setTotalHits(0);
    }
    event.target.reset();
  };

  const handleClick = event => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar handleSubmit={onSubmit} />
      {isLoading && <Loader />}

      {error && (
        <h2 style={{ margin: 'auto' }}>Something went wrong, try again</h2>
      )}

      {images.length > 0 && <ImageGallery data={images} />}
      {images.length < totalHits && <Button onClick={handleClick} />}
    </div>
  );
}
