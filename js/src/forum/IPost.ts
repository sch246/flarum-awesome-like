import Post from 'flarum/common/models/Post';
import User from 'flarum/common/models/User';

export interface IPost extends Post {
  isHidden: () => boolean;
  canLike: () => boolean;
  likes: () => Array<User>;
}