import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const airports = [
  { name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
  { name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
  { name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
  { name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
  { name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 },
];

const AirportTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>All Airports</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Terminals</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {airports.map((airport) => (
            <TableRow key={airport.code}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{airport.name}</TableCell>
              <TableCell>{airport.country}</TableCell>
              <TableCell>{airport.code}</TableCell>
              <TableCell>{airport.terminals}</TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AirportTable;