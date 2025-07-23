import React from 'react';

const wrapper = (WraperComponents) => {
  const newCompoents = () => {
    return (
      <div style={{ color: 'red' }}>
        <WraperComponents />
      </div>
    );
  };
  return newCompoents;
};

export default wrapper;
