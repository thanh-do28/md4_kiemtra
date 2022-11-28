import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
  let params = useParams();
  // console.log(params);
  let a = params.id.split("")
  a.shift()
  let params1 = a.join("")
  return (
    <WrappedComponent
      {...props}
      params={params1}
    />
  );
};

export default withRouter;