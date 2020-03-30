import React from 'react';
import Proptypes from 'prop-types';
import { firestore } from '../firebase';
import moment from 'moment';

const Post = ({ id, title, content, user, createdAt, favorites, comments }) => {

  const postRef =  firestore.doc(`posts/${id}`);

  const handleRemove = () => {
    postRef.delete();
  }

  const handleUpdateFavorites = () => {
    postRef.update({ favorites: favorites + 1 });
  }
  
  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {favorites}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>Posted by {user.displayName}</p>
          <p>{moment(createdAt.toDate()).calendar()}</p>
        </div>
        <div>
          <button onClick={handleUpdateFavorites} className="star">Star</button>
          <button onClick={handleRemove} className="delete">Delete</button>
        </div>
      </div>
    </article>
  );
};

Post.propTypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  user: Proptypes.shape({
    id: Proptypes.string,
    displayName: Proptypes.string,
    email: Proptypes.string,
    photoURL: Proptypes.string,
  }),
  createdAt: Proptypes.any,
  favorites: Proptypes.number,
  comments: Proptypes.number,
}

Post.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  user: {
    id: '123',
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
  favorites: 0,
  comments: 0,
};

export default Post;