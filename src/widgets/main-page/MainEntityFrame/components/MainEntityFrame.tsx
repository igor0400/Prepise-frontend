import { Fade, useMediaQuery } from '@chakra-ui/react';
import { Input } from 'antd';
import classNames from 'classnames';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { UserItems } from '../../../../entities/User';
import FavouriteIconBtn from '../../../../features/FavouriteIconBtn';
import { useRequest, CenteredLoader, EmptyItems } from '../../../../shared';
import { getData } from '../lib/api/getData';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Scrollbars from 'react-custom-scrollbars-2';

interface Props {
  title: string;
  description?: string;
  ItemCard: FC<any>;
  itemsName: string;
  itemsUrl: string;
  favouriteSettings: {
    storeName: UserItems;
    dataUrl: string;
  };
  searchPlaceholder: string;
}

const MainEntityFrame: FC<Props> = ({
  title,
  description,
  ItemCard,
  favouriteSettings,
  itemsName,
  itemsUrl,
  searchPlaceholder,
}) => {
  const [allItems, setAllItems] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const { request, loading } = useRequest(false);
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const [isSmallerThan380] = useMediaQuery('(max-width: 380px)');
  const [showDescr, setShowDescr] = useState(false);

  useEffect(() => {
    setData();
  }, []);

  async function setData() {
    const data = await request(getData, true, itemsUrl);

    if (data) {
      setAllItems(data);
      setItems(data.slice(0, 100));
    }
  }

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;

    if (value) {
      const filteredItems = allItems.filter((i: any) =>
        i.name.toLowerCase().includes(value.toLowerCase()),
      );

      setItems(filteredItems.slice(0, 100));
    } else {
      setItems(allItems.slice(0, 100));
    }
  };

  return (
    <>
      <div className="pb-4">
        <div
          className="flex items-center gap-0.5 cursor-pointer w-fit"
          onClick={() => setShowDescr((state) => !state)}
        >
          <h2 className="font-bold text-xl sm:text-2xl">{title}</h2>
          <HelpOutlineIcon className="mt-1 text-xl sm:text-2xl" />
        </div>
        {showDescr && (
          <Fade in>
            <p className="pt-1.5 sm:pt-3 text-sm sm:text-base max-w-4xl">
              {description}
            </p>
          </Fade>
        )}
      </div>

      <Input
        placeholder={searchPlaceholder}
        className="w-64"
        onChange={onSearch}
      />

      {loading ? (
        <CenteredLoader className="mt-28" style={{ height: 'fit-content' }} />
      ) : !items.length ? (
        <EmptyItems itemsName={itemsName} />
      ) : (
        <Scrollbars autoHide autoHeight autoHeightMax={1000}>
          <Fade
            in
            className={classNames('pt-3 grid w-full pl-0.5 pb-3 pr-3', {
              'gap-2': isSmallerThan380,
              'gap-3': !isSmallerThan380,
            })}
            style={
              !isSmallerThan380
                ? { gridTemplateColumns: 'repeat(auto-fit, 300px)' }
                : undefined
            }
          >
            {items.map((item: any) => (
              <ItemCard
                size={isSmallerThan380 ? 'small' : 'big'}
                key={item.id}
                item={item}
                favouriteBtn={
                  <FavouriteIconBtn
                    size={isSmallerThan1279 ? 'small' : 'big'}
                    item={item}
                    {...favouriteSettings}
                  />
                }
              />
            ))}
          </Fade>
        </Scrollbars>
      )}
    </>
  );
};

export default MainEntityFrame;
