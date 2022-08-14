import AxiosService from '../../../../services/AxiosService';
import { getPosts } from './BlogSlice';

export const onGetPosts = () => {
  return (dispatch: any) => {
    AxiosService.getPosts().then((res) => dispatch(getPosts(res.data.results)));
  };
};
