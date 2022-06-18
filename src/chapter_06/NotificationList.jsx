import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 blablabla'
  },
  {
    id: 2,
    message: '점심식사 blablabla'
  },
  {
    id: 3,
    message: '이제 곧 blablabla'
  }
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications
        });
      } else {
        this.setState({
          notifications: []
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
