import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const UserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.counter.value);
  console.log('users', users);

  const fetchUser = (userId: string) => {
    dispatch({ type: 'USER_FETCH_REQUESTED', payload: { userId } });
  };

  return (
    <div>
      <button onClick={() => fetchUser('123')}>Fetch User</button>
    </div>
  );
};

export default UserComponent;
