import { getAuthorDetails } from '../../services';

export const getAuthorDetailsService = async () => {
  return await getAuthorDetails()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
