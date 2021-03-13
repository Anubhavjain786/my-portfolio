import React, { useEffect, useState } from 'react';

//Data Managers
import * as DM from './dataManager';

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(async () => {
    await DM.getAllProjectService()
      .then((res) => {
        setProjectData(res);
      })
      .catch(console.error);
  }, []);

  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Welcome to my page of projects
        </h2>
        <section className='grid grid-cols-2 gap-8'>
          {projectData &&
            projectData.map((project, index) => {
              return (
                <article
                  className='relative rounded-lg shadow-xl bg-red-100 p-16 border-l-8 border-red-400'
                  key={index}
                >
                  <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className='text-gray-500 text-xs space-x-4'>
                    <samp>
                      <strong className='font-bold'>Finished on</strong>:{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </samp>
                    <samp>
                      <strong className='font-bold'>Company</strong>:{' '}
                      {project.place}
                    </samp>
                    <samp>
                      <strong className='font-bold'>Type</strong>:{' '}
                      {project.projectType}
                    </samp>
                    <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-red-500 font-bold hover:underline hover:text-red-400 text-xl'
                    >
                      View The Project{' '}
                      <span role='img' aria-label='right pointer'>
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
        </section>
      </section>
    </main>
  );
}
