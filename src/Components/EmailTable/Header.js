import React from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import IconDown from '@material-ui/icons/ArrowDropDown';

import './index.css';

export default function Header(props) {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  return (
    <div className="grid-header">
      {headCells.map(headCell => {
        return (
          <div className={headCell.className} key={headCell.id}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={IconDown}
            >
              {headCell.label}
            </TableSortLabel>
          </div>
        );
      })}
    </div>
  );
}
