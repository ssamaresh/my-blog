import React from 'react';
import Posts from './Posts';
import { firestore } from '../firebase';
import {getDocs} from '../utilities';

class App extends React.Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  async componentDidMount () {
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(getDocs);
      this.setState({ posts });
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {posts} = this.state;
    return (
      <main className='Application'>
        <h1>My Blog</h1>
        <Posts posts={posts} />
      </main>
    )
  }
}

export default App;
