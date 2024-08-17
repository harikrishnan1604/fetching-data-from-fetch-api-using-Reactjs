import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));