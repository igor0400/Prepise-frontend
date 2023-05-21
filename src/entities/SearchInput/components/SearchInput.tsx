import { useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import search from '../../../../public/images/icons/search.svg';
import SearchModal from './Modal';

const SearchInput: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="search-input justify-between rounded-md ml-10 mr-2 sm:flex hidden items-center cursor-pointer"
        onClick={onOpen}
      >
        <div className="grow h-10 flex items-center">
          <p className="pt-0.5 font-semibold text-base px-3 leading-4 text-gray-400">
            Поиск...
          </p>
        </div>
        <Image
          className="mr-3 my-1 cursor-pointer"
          src={search}
          alt="search"
          width={27}
          height={27}
        />
      </div>
      <div className="grow sm:hidden flex mr-1" onClick={onOpen}>
        <svg
          className="cursor-pointer ml-auto mr-1"
          width={35}
          height={35}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5729 20.0938L18.0313 16.5625C19.1739 15.1067 19.794 13.309 19.7917 11.4583C19.7917 9.81016 19.3029 8.19899 18.3872 6.82858C17.4716 5.45818 16.1701 4.39007 14.6474 3.75934C13.1246 3.12861 11.4491 2.96358 9.83258 3.28513C8.21608 3.60667 6.73122 4.40034 5.56578 5.56578C4.40034 6.73122 3.60667 8.21608 3.28513 9.83258C2.96358 11.4491 3.12861 13.1246 3.75934 14.6474C4.39007 16.1701 5.45818 17.4716 6.82858 18.3872C8.19899 19.3029 9.81016 19.7917 11.4583 19.7917C13.309 19.794 15.1067 19.1739 16.5625 18.0313L20.0938 21.5729C20.1906 21.6706 20.3058 21.748 20.4327 21.8009C20.5597 21.8538 20.6958 21.881 20.8333 21.881C20.9708 21.881 21.107 21.8538 21.2339 21.8009C21.3609 21.748 21.4761 21.6706 21.5729 21.5729C21.6706 21.4761 21.748 21.3609 21.8009 21.2339C21.8538 21.107 21.881 20.9708 21.881 20.8333C21.881 20.6958 21.8538 20.5597 21.8009 20.4327C21.748 20.3058 21.6706 20.1906 21.5729 20.0938ZM5.20834 11.4583C5.20834 10.2222 5.57489 9.01383 6.26165 7.98602C6.94841 6.95822 7.92453 6.15714 9.06657 5.68409C10.2086 5.21104 11.4653 5.08727 12.6777 5.32843C13.89 5.56959 15.0037 6.16484 15.8778 7.03892C16.7518 7.913 17.3471 9.02664 17.5882 10.239C17.8294 11.4514 17.7056 12.7081 17.2326 13.8501C16.7595 14.9921 15.9585 15.9683 14.9307 16.655C13.9028 17.3418 12.6945 17.7083 11.4583 17.7083C9.80073 17.7083 8.21102 17.0499 7.03892 15.8778C5.86682 14.7057 5.20834 13.1159 5.20834 11.4583Z"
            fill="#7c7c7c"
          />
        </svg>
      </div>

      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default SearchInput;