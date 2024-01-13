
// UsersTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';

const UsersTable = ({ users, onDelete, onLimitChange }) => {
  const [newLimit, setNewLimit] = React.useState('');

  const handleLimitInputChange = (event) => {
    setNewLimit(event.target.value);
  };

  const handleLimitChange = () => {
    if (newLimit && !isNaN(newLimit)) {
      onLimitChange(Number(newLimit));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px' }}>
        <TextField
          label="Set Page Limit"
          type="number"
          value={newLimit}
          onChange={handleLimitInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleLimitChange} style={{ marginLeft: '10px' }}>
          Set
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.score}</TableCell>
                <TableCell>
                  
                    <IconButton onClick={() => onDelete(user.id)} aria-label="delete" style={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersTable;
