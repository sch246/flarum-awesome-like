import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import { IPost } from './IPost';

app.initializers.add('sch246/flarum-awesome-like', () => {
  let replySetting: string;
  let likeSetting: string;

  extend(CommentPost.prototype, 'oncreate', function () {

    // 根据设置改变attr
    replySetting = app.forum.attribute('sch246-awesome-like-reply');
    const replyButton = this.$('.item-reply .Button');
    replyButton.attr('icon', replySetting);

    // 根据设置改变attr
    likeSetting = app.forum.attribute('sch246-awesome-like-like');
    const likeButton = this.$('.item-like .Button');
    likeButton.attr('icon', likeSetting);

    // 同步isLiked
    const post = this.attrs.post as IPost;
    if (post.isHidden() || !post.canLike()) return;
    const likes = post.likes();
    const isLiked = app.session.user && likes && likes.some((user) => user === app.session.user) || false;
    post.save({isLiked})
  });


  extend(CommentPost.prototype, 'view', function () {
    if (replySetting!=='off') {
      const replyButton = this.$('.item-reply .Button');

      setTimeout(() => { // 延迟更新
        if (replySetting === 'only') {
          replyButton.attr('title', replyButton.children().eq(0).html());
        }
      }, 0);

    };

    if (likeSetting!=='off') {
      const likeButton = this.$('.item-like .Button');
      const post = this.attrs.post;
      const isLiked = post.attribute('isLiked');
      likeButton.toggleClass('active', !!isLiked);

      setTimeout(() => { // 延迟更新
        if (likeSetting === 'only') {
          likeButton.attr('title', likeButton.children().eq(0).html());
        }
      }, 0);

    };
  });

});
