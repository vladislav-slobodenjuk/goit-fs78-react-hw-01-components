import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  CardHeader,
  List,
  ListItem,
  P,
  Span,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <section>
      <Card className="profile">
        <CardHeader className="description">
          <Avatar src={avatar} alt="User avatar" className="avatar" />
          <P className="name">{username}</P>
          <P className="tag">@{tag}</P>
          <P className="location">{location}</P>
        </CardHeader>

        <List className="stats">
          <ListItem>
            <Span className="label">Followers</Span>
            <Span className="quantity">{followers}</Span>
          </ListItem>
          <ListItem>
            <Span className="label">Views</Span>
            <Span className="quantity">{views}</Span>
          </ListItem>
          <ListItem>
            <Span className="label">Likes</Span>
            <Span className="quantity">{likes}</Span>
          </ListItem>
        </List>
      </Card>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
