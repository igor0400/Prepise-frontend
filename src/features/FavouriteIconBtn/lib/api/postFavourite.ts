import { secureApi } from '../../../../shared';

export const postFavourite = async (url: string) => {
  const data = await secureApi().post(url).json();

  return data;
};
