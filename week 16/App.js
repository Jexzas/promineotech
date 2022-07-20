import React from "react";
import '../src/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

const PEOPLE_ENDPOINT = 'https://62cc4a73a080052930a903bb.mockapi.io/users';

function get () {
  const resp = fetch(PEOPLE_ENDPOINT);
  const data = resp.json();
  return data;
}

export default function App() {
  const posts = [
    {
      id: 1,
      title: 'My First Post',
      date: 'Today',
      content: 'This is my first post ever'
    },
    {
      id: 2,
      title: 'My Secondst Post',
      date: 'Today',
      content: 'This is not the first post ever'
    },
    {
      id: 3,
      title: 'My Thirdst Post',
      date: 'Tomorrow',
      content: 'This is my first post ever to travel through time'
    },
  ]


  return (
    <>
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
          </ul>  
        </div> 

      <Switch>
        <Route path='/posts'>
          <Posts posts={posts}>

          </Posts>
        </Route>
        <Route path='/friends'>
          <Friends names={['John', 'Bono', 'Bonham']}>

          </Friends>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

function Home () {
  return (
    <div className="container-fluid bg-dark text-center text-success">
      <h1>Home</h1>
    </div>
  )
}

function Posts({ posts }) {
  const match = useRouteMatch();
  const findPostById = (id) => {
   return posts.filter((post) => post.id == id)[0];
  }
  return (
  <div> 
    <h2>Posts</h2>
    <ul>
    {
      posts.map((post, index) => {
        return (
          <li key={index}>
            <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
          </li>
          )
      })
    }
    </ul>
    <switch>
      []
    </switch>
  </div>
  )
}

function Friends(props) {
  const { names } = props;
  return (
    <ul>
      {
        names.map((friend, index) => {
          return (
            <li key={index}>
              <h1>Friend name: {friend}</h1>
            </li>
          )
        })
      }
    </ul>
  )
}