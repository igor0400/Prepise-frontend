import { useMediaQuery } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { ImgsGalary, getParseDate } from '../../../shared';
import { PostType } from '../model/types/post';

const Post: FC<PostType> = ({ text, images, createdAt }) => {
  const [showImgs, setShowImgs] = useState(true);
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

  return (
    <div className="bg-white p-3 rounded-md">
      <p>{text}</p>
      <p className="text-xs text-gray-500">{getParseDate(createdAt)}</p>
      {showImgs && (
        <ImgsGalary
          imgs={images.map((i) => i.url)}
          setShow={setShowImgs}
          imgHeight={200}
          imgWidth={200}
          className={`mt-4 grid gap-1 grid-cols-${images.length > 1 ? 2 : 1}`}
          imgStyle={{ width: '100%', height: isLargerThan500 ? 150 : 100 }}
          imgActiveStyle={{ height: '100%' }}
          imgClassName="rounded-md"
          activeIndex={images.length === 3 ? 0 : undefined}
        />
      )}
    </div>
  );
};

export default Post;
