/* eslint-disable no-unused-vars */
import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return (
    <div className="my-2 flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {portfolio.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
