import {getSpecificPost} from '../../services'

export const getSpecificPostService = async (slug) => {
    return await getSpecificPost(slug)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };