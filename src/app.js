
// App.js
import React from 'react';
import WebSocketComponent from './WebSocketComponent';
import UsersTable from './components/UserTable';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [limit, setLimit] = React.useState(10); // Initial limit

  const handleData = (data) => {
    setUsers((prevUsers) => [...prevUsers, data].slice(0, limit)); // Ensure the limit is applied
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
  };

  return (
    <div>
      <WebSocketComponent onData={handleData} />
      <UsersTable users={users} onDelete={handleDelete} onLimitChange={handleLimitChange} />
    </div>
  );
};

export default App;
