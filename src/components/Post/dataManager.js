import { getAllPost } from '../../services';

export const getAllPostService = async () => {
  return await getAllPost()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
