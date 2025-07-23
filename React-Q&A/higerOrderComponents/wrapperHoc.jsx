// import React from 'react';

// const wrapper = (WraperComponents) => {
//   const newCompoents = () => {
//     return (
//       <div style={{ color: 'red' }}>
//         <WraperComponents />
//       </div>
//     );
//   };
//   return newCompoents;
// };

// export default wrapper;


import React from 'react';

const wrapper = (WraperComponents) => {
  const newCompoents = (props) => {
    return (
      <div style={{ color: 'red' }}>
        <WraperComponents name={props.name} />
      </div>
    );
  };
  return newCompoents;
};

export default wrapper;
