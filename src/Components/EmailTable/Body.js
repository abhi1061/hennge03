import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailSpecialIcon from '../Images/icon_mail_sp.svg';
import './index.css';

export default function Body(props) {
  const {
    data,
    comparator,
    order,
    orderBy,
    sort,
    setSelected,
    selectedIds,
  } = props;

  const renderTextClass = key => {
    let className = key === orderBy ? 'text-dark' : '';
    return className;
  };

  const renderSelectedClass = id => {
    if (selectedIds.length && selectedIds.find(row => row === id)) {
      return 'isSelected';
    }
  };

  return sort(data, comparator(order, orderBy)).map((row, index) => {
    return (
      <div
        className={`grid-container ${renderSelectedClass(row.id)}`}
        key={row.id}
        onClick={() => {
          setSelected(row.id);
        }}
      >
        <div className="row">
          <div className="tdIcon">
            <img alt="specialIcon" src={MailSpecialIcon} className="sp-icon" />
          </div>
          <div className={`tdFrom ${renderTextClass('from')}`}>{row.from}</div>
          <div className={`tdTo ${renderTextClass('to')}`}>
            {row.to[0].value} {row.additionalReceivers ? ', ...  ' : null}{' '}
            {row.additionalReceivers ? (
              <span className="badge badge-secondary ml-3">
                +{row.additionalReceivers}
              </span>
            ) : null}
          </div>
          <div className={`tdSubject ${renderTextClass('subject')}`}>
            {row.subject}
          </div>
          <div className="tdAttachment">
            {row.attachment ? (
              <svg viewBox="0 0 13.93083 15" height="15" width="15">
                <title>icon_clip</title>
                <path d="M6.799,3.6254A2.30522,2.30522,0,1,0,3.56718,6.85622l4.304,4.304a.5222.5222,0,0,0,.7385-.7385l-4.304-4.304c-.53586-.53586-.87743-1.33808-.23084-1.98466.64553-.64659,1.4488-.304,1.98466.23189L11.032,9.3364c1.90632,1.90841,2.38159,2.78793,1.24615,3.92441-1.149,1.148-2.367.86385-4.20121-.96935L2.367,6.57941C1.1741,5.38653.33845,3.43842,1.90633,1.87159c1.86141-1.86141,3.98708-.03134,4.59293.57555l5.11038,5.11142a.5222.5222,0,0,0,.7385-.7385L7.23776,1.70864C5.18625-.34288,2.86-.56223,1.16678,1.13308c-1.711,1.71-1.5261,4.196.4617,6.18484l5.711,5.711C7.96726,13.6567,9.31161,15,10.85756,15a3.01214,3.01214,0,0,0,2.16014-1.00173c2.07554-2.07658.15564-3.99857-1.24616-5.40141Z" />
              </svg>
            ) : null}
          </div>
          <div className={`tdDate ${renderTextClass('date')}`}>
            <span>
              {row.formatDate}
              <ChevronRightIcon
                id="rightIcon"
                fontSize="small"
              ></ChevronRightIcon>
            </span>
          </div>
        </div>
      </div>
    );
  });
}
