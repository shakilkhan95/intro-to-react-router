import React from 'react'
import { useLoaderData } from 'react-router';

const Users2 = () => {
    const users = useLoaderData();
  return (
    <div>
      <h2>this is users 2</h2>
      <div>
        {users.map((user) => (
          <div style={{border: '1px solid gray', borderRadius: '8px', width: '240px', margin: '10px auto', padding: '10px'}}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users2