import sanityClient from '../client';

export const fetch = (url, param)=> {
    return sanityClient.fetch(url,param);
}
