import React from 'react';
import Wrapper from './wrapperHoc.jsx';

function Company(props) {
  return <div>Company Name :{props.name}</div>;
}

export default Wrapper(Company);
