import { API } from '../tools';
import { API_PATHS } from '../constants';

export const getAllPost = async () => {
  return await API.fetch(API_PATHS.GET_ALL_POST);
};

export const getSpecificPost = async (slug) => {
  return await API.fetch(API_PATHS.GET_SPECIFIC_POST.replace(':slug', slug));
};
