import React from 'react';
import Proptypes from 'prop-types';

import Post from './Post';
import AddPost from './AddPost';

const Posts = ({posts}) => {
  return (
    <section className="Posts">
      <AddPost />
      {
        posts.map(post => <Post {...post} key={post.id} />)
      }
  </section>
  )
};

Posts.propTypes = {
  posts: Proptypes.array.isRequired,
};

export default Posts;
