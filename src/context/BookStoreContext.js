import React, {useReducer, useState} from 'react';
import {getData, getUsers} from '../data/Data';
import useResult from '../hooks/useResult';

const BookContext = React.createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'addOrder':
      return [...state, action.payroll];
    default:
      return state;
  }
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'addUser':
      return [...state, action.payroll];
    default:
      return state;
  }
};

export const BookDataProvider = ({children}) => {
  const [ApiSearch, errorMessage, results, loading] = useResult();
  const data = getData();
  const [orders, dispatch] = useReducer(bookReducer, []);
  const [users, userDispatch] = useReducer(userReducer, getUsers());
  const [coords, setCoords] = useState('');
  const [address, setAddress] = useState('');

  const addOrder = id => {
    dispatch({type: 'addOrder', payroll: id});
  };

  const getDataById = id => {
    return data.filter(item => item.id == id);
  };

  const addUser = user => {
    userDispatch({type: 'addUser', payroll: user});
  };
  return (
    <BookContext.Provider
      value={{
        data,
        addOrder,
        orders,
        getDataById,
        users,
        addUser,
        coords,
        setCoords,
        address,
        setAddress,
        errorMessage,
        results,
        loading,
        ApiSearch,
      }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
