import React, { Component } from 'react';

import { sort, getComparator } from '../../Utils/Comparator';
import EmptyTable from '../EmptyEmails';
import Body from './Body';
import Header from './Header';
import './index.css';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order,
      orderBy: props.orderBy,
    };
  }

  handleRequestSort = (event, property) => {
    const isAsc = this.state.orderBy === property && this.state.order === 'asc';
    this.setState({ order: isAsc ? 'desc' : 'asc' });
    this.setState({ orderBy: property });
  };

  renderEmailTable = (headCells, data, setSelected, selectedIds) => {
    return (
      <div>
        <Header
          order={this.state.order}
          orderBy={this.state.orderBy}
          headCells={headCells}
          onRequestSort={this.handleRequestSort}
        />
        <Body
          order={this.state.order}
          orderBy={this.state.orderBy}
          data={data}
          comparator={getComparator}
          sort={sort}
          setSelected={setSelected}
          selectedIds={selectedIds}
        />
      </div>
    );
  };

  render() {
    const {
      data,
      headCells,
      setSelected,
      selectedIds,
      openDialog,
    } = this.props;
    return (
      <div>
        <div className="resultContainer">
          <span className="result">
            Results: <span className="resultCount">{data.length}</span> mail(s)
          </span>
          {selectedIds.length ? (
            <span className="result details" onClick={() => openDialog()}>
              Details:
              <span className="resultCount">{selectedIds.length}</span> mail(s)
            </span>
          ) : null}
        </div>
        {data.length ? (
          this.renderEmailTable(headCells, data, setSelected, selectedIds)
        ) : (
          <EmptyTable />
        )}
      </div>
    );
  }
}
