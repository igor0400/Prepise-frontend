import { FC } from 'react';
import UserCard from '../../../../entities/UserCard';
import MainEntityFrame from '../../MainEntityFrame';

const MainUsers: FC = () => {
  return (
    <MainEntityFrame
      title="Пользователи"
      description="Это список зарегистрированных пользователей. Вы можете подписаться на пользователя, перейдя в его профиль, и следить за его деятельностью."
      ItemCard={UserCard}
      itemsUrl="users"
      favouriteSettings={{
        storeName: 'favouriteUsers',
        dataUrl: 'favourites/users/:id',
      }}
      searchPlaceholder="Поиск по пользователям..."
    />
  );
};

export default MainUsers;
