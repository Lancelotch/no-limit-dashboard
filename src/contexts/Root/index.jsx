import React, { Fragment, useContext } from "react";
import {withRouter} from 'react-router-dom';
const CreateRootContext = React.createContext();

function RootContext(props) {
  return (
    <Fragment>
      <CreateRootContext.Provider
        value={{
          history: props.history
        }}
      >
        {props.children}
      </CreateRootContext.Provider>
    </Fragment>
  );
}
export const RootContextWithRouter = withRouter(RootContext);;
export const useRootContext = () => useContext(CreateRootContext);
export default RootContext;
