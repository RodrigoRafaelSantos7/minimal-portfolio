/* eslint-disable no-unused-vars */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">
        Rodrigo Santos
      </h1>

      <TypeAnimation
        sequence={[
          'Software Engineer',
          2000,
          'Full-stack Developer',
          2000,
          'Computer Science Student',
          2000,
        ]}
        wrapper="p"
        speed={50}
        className="text-base md:text-xl mb-3 font-medium"
        repeat={Infinity}
      />

      <p className="text-sm max-w-xl mb-6 font-bold">
        Hi there! 👋 I&apos;m Rodrigo Santos, a passionate computer science and
        engineering student at Nova School of Science and Technology in Lisbon,
        Portugal. My journey revolves around the fascinating world of
        technology, where I delve into the realms of full-stack development and
        software engineering. I find myself deeply engaged in crafting
        innovative solutions, particularly with React{' '}
        <span className="italic"> (using tools like Vite and Next.js)</span> and
        Java. I&apos;m constantly seeking opportunities to expand my knowledge,
        collaborate with fellow enthusiasts, and make meaningful contributions
        to the ever-evolving landscape of technology.
      </p>
    </div>
  );
}

export default Intro;
