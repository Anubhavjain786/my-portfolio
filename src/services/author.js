import { API } from '../tools';
import { API_PATHS } from '../constants';

export const getAuthorDetails = async () => {
  return await API.fetch(API_PATHS.GET_AUTHOR_DETAILS);
};
