import app from 'flarum/forum/app';
import Post from 'flarum/common/models/Post';
import User from 'flarum/common/models/User';

interface IPost extends Post {
  isHidden: () => boolean;
  canLike: () => boolean;
  likes: () => Array<User>;
}

export function syncLike(p: Post): void {
  const post = p as IPost;
  if (post.isHidden() || !post.canLike()) return;
  const likes = post.likes();
  const isLiked = app.session.user && likes && likes.some((user) => user === app.session.user) || false;
  post.save({isLiked})
}