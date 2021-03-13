import React, { useEffect, useState } from 'react';
import RedBackGround from '../../assets/images/Red_Background.webp';
import sanityClient from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

//Data Manager
import * as DM from './dataManager';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    DM.getAuthorDetailsService()
      .then((res) => {
        console.log(res);
        setAuthor(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!author) {
    return <div>Loading...</div>;
  }
  return (
    <main className='relative'>
      <img
        src={RedBackGround}
        alt='Red Background'
        className='absolute w-full'
      />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-400 rounded-lg shadow-2xl lg:flex p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            alt={author.name}
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-greeen-300 mb-4'>
              Hey There. I'm{` `}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='dgho0avs'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
