import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import ProtectedRoute from '../protected-route/protected-route.jsx';
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
            <ProtectedRoute exact path='/posts/add' component={NewPostPage} />
            <Route exact path='/posts/:id' component={PostPage} />
            <ProtectedRoute exact path='/profile' component={ProfilePage} />
            <Route exact path='/register' component={SignUpMenu} />
            <ProtectedRoute exact path='/editProfile'>
              <ProfileEditPage />
            </ProtectedRoute>
            <ProtectedRoute exact path='/posts/:id/edit' component={EditPost} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
