import PropTypes from 'prop-types';
import { Notice } from './Notification.styled';

const Notification = ({ message }) => {
  return <Notice>{message}</Notice>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
