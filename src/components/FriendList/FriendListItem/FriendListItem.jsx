export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <span className="status" data-online={isOnline}></span>
    {/* check online prop */}
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);
