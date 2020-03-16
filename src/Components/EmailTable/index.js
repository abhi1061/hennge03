import React, { Component } from 'react';

import { sort, getComparator } from '../../Utils/Comparator';
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

  render() {
    const { data, headCells, setSelected } = this.props;
    return (
      <div>
        <div className="resultContainer">
          <span className="result">
            Results: <span className="resultCount">{data.length}</span> mail(s)
          </span>
        </div>

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
        />
      </div>
    );
  }
}
