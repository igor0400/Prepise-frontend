export const getFileUrl = (url: string) => {
  return `${process.env.NEXT_PUBLIC_SERVER}${url}`;
};