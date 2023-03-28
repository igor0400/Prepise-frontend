import { FC } from 'react';
import ItemCard from '../../../../entities/ItemCard';
import MainContentFrame from '../../MainContentFrame';

const MainTests: FC = () => {
  return (
    <MainContentFrame
      title="Тесты"
      name="tests"
      url="questions/test"
      itemCard={{
        Component: ItemCard,
        link: 'tests',
      }}
      favouriteSettings={{
        storeName: 'favouriteTestQuestions',
        dataUrl: 'favourites/test-questions/:id',
      }}
    />
  );
};

export default MainTests;
