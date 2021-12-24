import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile-page.scss';
import { Col, Row } from 'reactstrap';

import PostCard from '../../post-card/post-card.jsx';

class ProfilePage extends Component {
  render() {
    return (
      <div className='profile-wrapper'>
        <Row>
          <Col md={4}>
            <div className='short-info'>
              <div className='avatar-wrapper'>
                <img src='https://via.placeholder.com/150x150' alt='avatar' />
              </div>
              <div className='user-name'>@vasil4264</div>
              <div className='date-registered'>Registered on 12.12.2012</div>
              <Link to='/editProfile' className='btn btn-outline-secondary'>
                Edit profile
              </Link>
            </div>
          </Col>
          <Col md={8}>
            <div className='detail-info'>
              <div className='detail-info__item'>
                <h2>Bio</h2>
                <p>I love lego, so I have registered here to impress somebody else</p>
              </div>
              <div className='detail-info__item'>
                <h2>Gender</h2>
                <p>Male</p>
              </div>
              <div className='detail-info__item'>
                <h2>Date of birth</h2>
                <p>01.02.1999</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* TODO: User's posts list */}
        <div className='recent-posts'>
          <h2>Recent posts by Vasil</h2>
          <Row>
            <PostCard
              type={1}
              id={1}
              title='Star wars'
              img='https://via.placeholder.com/400x300'
              date='24.12.2021'
            />
            <PostCard
              type={1}
              id={1}
              title='Star wars'
              img='https://via.placeholder.com/400x300'
              date='24.12.2021'
            />
            <PostCard
              type={1}
              id={1}
              title='Star wars'
              img='https://via.placeholder.com/400x300'
              date='24.12.2021'
            />
            <PostCard
              type={1}
              id={1}
              title='Star wars'
              img='https://via.placeholder.com/400x300'
              date='24.12.2021'
            />
          </Row>
        </div>
      </div>
    );
  }
}
export default ProfilePage;
