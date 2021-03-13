import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

//Data Managers
import * as DM from './dataManager';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    DM.getSpecificPostService(slug)
      .then((res) => {
        console.log(res);
        setSinglePost(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      {singlePost ? (
        <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
          <header className='relative'>
            <div className='absolute h-full w-full flex items-center justify-center p-8'>
              <div className='bg-white bg-opacity-75 rounded p-12'>
                <h1 className='cursive text-3xl lg:text-6xl mb-4'>
                  {singlePost.title}
                </h1>
                <div className='flex justify-center  text-gray-800'>
                  <img
                    className='w-10 h-10 rounded-full'
                    src={urlFor(singlePost.authorImage).url()}
                    alt={singlePost.name}
                  />
                  <p className='cursive flex items-center pl-2 text-2xl'>
                    {singlePost.name}
                  </p>
                </div>
              </div>
            </div>
            <img
              className='w-full object-cover rounded-t'
              style={{ height: '400px' }}
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
            />
          </header>
          <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
            <BlockContent
              blocks={singlePost.body}
              projectId='dgho0avs'
              dataset='production'
            />
          </div>
        </article>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
