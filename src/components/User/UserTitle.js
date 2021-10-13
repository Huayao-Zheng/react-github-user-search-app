import React from 'react';

const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'Aug',
  '09': 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

const UserTitle = ({ avatar_url, name, login, created_at }) => {
  const [year, month, day] = created_at
    .split('-')
    .join(' ')
    .split('T')
    .join(' ')
    .split(' ');

  return (
    <div className="user__title-container">
      <div className="user__avatar-container">
        <img className="user__avatar" src={avatar_url} alt="avatar" />
      </div>
      <div className="user__names-container">
        <div className="user__name">{name}</div>

        <div className="user__login">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/${login}`}
          >
            @{login}
          </a>
        </div>
        <div className="user_joined-day">
          Joined {day} {months[month]} {year}
        </div>
      </div>
    </div>
  );
};

export default UserTitle;
