import { API } from "../tools"
import { API_PATHS } from '../constants';

export const getAllProject = async () => {
    return await API.fetch(API_PATHS.GET_ALL_PROJECT)
}