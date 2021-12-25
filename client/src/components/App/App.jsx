import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import {
  FeedPage,
  ProfilePage,
  PostPage,
  NewPostPage,
  Login,
  SignUpMenu,
  ProfileEditPage,
  EditPost
} from '../pages';

import AuthService from '../../services/auth-service';

const App = () => {
  const service = new AuthService();
  const [authUser, setAuthUser] = useState(false);

  useEffect(() => {
    if (service.checkAuth()) {
      setAuthUser(true);
    }
  });

  console.log(authUser);

  return (
    <>
      <Router>
        <Header authUser={authUser} loginUser={setAuthUser} />
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
              component={(props) => <Login loginUser={setAuthUser} {...props} />}
            />
            <Route exact path='/posts' component={FeedPage} />
            <Route exact path='/posts/add' component={NewPostPage} />
            <Route exact path='/posts/:id' component={PostPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/register' component={SignUpMenu} />
            {/* <Route exact path='/editProfile' component={ProfileEditPage} /> */}
            <Route exact path='/editProfile'>
              <ProfileEditPage
                username='vasil4242'
                email='vasil@gmail.com'
                bio='I love lego'
                gender='male'
                dateOfBirth='2021-12-12'
              />
            </Route>
            <Route exact path='/posts/:id/edit' component={EditPost} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
