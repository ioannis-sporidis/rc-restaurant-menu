import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className='btn-container'>
      <button
        type='button'
        className='filter-btn'
        onClick={() => {
          filterItems('all');
        }}>
        All
      </button>
      <button
        type='button'
        className='filter-btn'
        onClick={() => {
          filterItems('breakfast');
        }}>
        Breakfast
      </button>
    </div>
  );
};

export default Categories;
