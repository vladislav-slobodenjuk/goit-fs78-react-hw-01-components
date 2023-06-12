import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <section>
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  </section>
);
