import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={css.item} key={id}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};