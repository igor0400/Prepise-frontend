import Image from 'next/image';
import React, { FC } from 'react';

import emptyBox from 'public/images/empty-box.svg';

const EmptyItems: FC = () => {
  return (
    <div className="flex flex-col mt-20 w-full">
      <Image
        className="mx-auto"
        src={emptyBox}
        alt="empty box"
        width={100}
        height={100}
      />
      <h3 className="text-xl font-semibold sm:font-bold text-center mt-2 text-gray-400">
        Список элементов пуст
      </h3>
    </div>
  );
};

export default EmptyItems;