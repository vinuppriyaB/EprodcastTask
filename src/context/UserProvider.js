import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const UserContext = createContext();

// Context API for data management of added userDetail

const UserProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState([]);

  const history = useHistory();

  return (
    <UserContext.Provider
      value={{
        userDetail,
        setUserDetail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};

export default UserProvider;
