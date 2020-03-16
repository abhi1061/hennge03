import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment-timezone';
import { connect } from 'react-redux';

import {
  getEmailsByDateRange,
  setSelectedEmail,
  setDialogClose,
  setDialogOpen,
} from '../../Actions';
import DatePicker from '../DatePicker';
import EmailsTable from '../EmailTable';
import EmailBody from '../EmailBody';

class index extends Component {
  state = {
    startDate: moment().startOf('day'),
    endDate: moment().endOf('day'),
    openBodyDialog: false,
  };
  componentDidMount() {
    this.props.getEmailsByDateRange(this.state.startDate, this.state.endDate);
  }
  setDatesFromCalender = dates => {
    const { startDate, endDate } = dates;
    this.setState({ startDate: startDate, endDate: endDate });
  };

  onSearch = () =>
    this.props.getEmailsByDateRange(this.state.startDate, this.state.endDate);

  filterData = (data, startDate, endDate) => {
    return _.filter(data, function(p) {
      return p.internalDate >= startDate && p.internalDate <= endDate;
    });
  };
  createData = data => {
    return data.map(row => {
      return {
        id: row.id,
        from: row.payload.headers.from.value,
        to: row.payload.headers.to,
        additionalReceivers:
          row.payload.headers.to.length > 1
            ? row.payload.headers.to.length - 1
            : null,
        subject: row.payload.subject,
        body: row.payload.body,
        attachment: row.payload.parts.length > 0 ? true : false,
        date: row.internalDate,
        formatDate: this.getDateFormatted(row.internalDate),
      };
    });
  };
  getDateFormatted = date => {
    if (moment().format('DD') === moment(date).format('DD')) {
      return moment(date).format('HH:MM');
    }
    if (moment().format('YYYY') === moment(date).format('YYYY')) {
      return moment(date).format('MMM DD');
    }
    return moment(date).format('YY/MM/DD');
  };
  setSelectedEmail = id => {
    if (this.props.selectedIds.indexOf(id) !== -1) {
      return;
    }
    this.props.setSelectedEmail(id);
  };
  setDialogClose = () => {
    this.props.setDialogClose();
  };
  setDialogOpen = () => {
    this.props.setDialogOpen();
  };
  renderEmailBody = () => {
    return (
      <EmailBody
        open={this.props.openDialog}
        setClose={this.setDialogClose}
        selectedEmails={this.createData(this.props.selectedEmails)}
      />
    );
  };
  render() {
    return (
      <div>
        <DatePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          setDates={this.setDatesFromCalender}
          search={this.onSearch}
        />
        <EmailsTable
          data={this.createData(this.props.data)}
          headCells={this.props.headCells}
          setSelected={this.setSelectedEmail}
          selectedIds={this.props.selectedIds}
          order="desc"
          orderBy="date"
          openDialog={this.setDialogOpen}
        />
        {this.renderEmailBody()}
      </div>
    );
  }
}

const headCells = [
  { id: 'from', label: 'From', className: 'thFrom' },
  { id: 'to', label: 'To', className: 'thTo' },
  { id: 'subject', label: 'Subject', className: 'thSubject' },
  { id: 'attachment', label: '', className: 'thAttachment' },
  { id: 'date', label: 'Date', className: 'thDate' },
];

const mapStateToProps = state => {
  return {
    data: state.email.data,
    headCells: headCells,
    selectedEmails: state.email.selected,
    selectedIds: state.email.selectedIds,
    openDialog: state.email.openBodyDialog,
  };
};

export default connect(mapStateToProps, {
  getEmailsByDateRange,
  setDialogClose,
  setDialogOpen,
  setSelectedEmail,
})(index);
