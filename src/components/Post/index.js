import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Data Managers
import * as DM from './dataManager';

//Constants
import { ROUTES } from '../../constants';

export default function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    DM.getAllPostService()
      .then((res) => {
        setPostData(res);
      })
      .catch(console.error);
  }, []);

  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Blog Post Page</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Welcome to my page of blog posts
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {postData &&
            postData.map((post, index) => {
              return (
                <article key={index}>
                  <Link
                    to={ROUTES.SINGLEPOST.replace(':slug', post.slug.current)}
                    key={post.slug.current}
                  >
                    <span
                      className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-400'
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className='w-full h-full rounded-r object-cover absolute'
                      />
                      <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                        <h3 className='text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              );
            })}
        </div>
      </section>
    </main>
  );
}
