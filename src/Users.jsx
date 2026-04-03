import React, { use } from 'react';

const Users = ({ usersPromise }) => {
    const users = use(usersPromise);
  return (
    <div>
      <h2>Users Load here</h2>
      <div>
        {
            users.map(user => <div>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Users;