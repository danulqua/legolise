import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import Header from '../header';
import Footer from '../footer/footer.jsx';
import {
  FeedPage,
  ProfilePage,
  PostPage,
  NewPostPage,
  Login,
  SignUpMenu,
  EditProfile,
  EditPost
} from '../pages';

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  const loginUser = (user) => setAuthUser({ authUser: { ...user } });

  const logoutUser = () => setAuthUser({ authUser: null });

  return (
    <>
      <Router>
        <Header authUser={authUser} />
        <Container>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
                return (
                  <div className='greet-container'>
                    <h2>Welcome to LegoLise</h2>
                  </div>
                );
              }}
            />
            <Route
              exact
              path='/login'
              component={(props) => <Login loginUser={loginUser} {...props} />}
            />
            <Route exact path='/posts' component={FeedPage} />
            <Route exact path='/posts/add' component={NewPostPage} />
            <Route exact path='/posts/:id' component={PostPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/register' component={SignUpMenu} />
            <Route exact path='/editProfile' component={EditProfile} />
            <Route exact path='/posts/:id/edit' component={EditPost} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
