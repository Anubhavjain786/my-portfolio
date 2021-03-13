import {getAllProject} from '../../services'

export const getAllProjectService = async () => {
    return await getAllProject()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };