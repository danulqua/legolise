import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './profile-page.scss';
import { Col, Row } from 'reactstrap';

import PostCard from '../../post-card/post-card.jsx';
import PostService from '../../../services/post-service';
import UserService from '../../../services/user-service';

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const service = new PostService();
  const userService = new UserService();
  const [userData, setData] = useState({
    res: {
      bio: '',
      username: '',
      email: '',
      password: '',
      gender: '',
      dateOfBirth: '',
      createdOn: ''
    }
  });

  useEffect(() => {
    service.getAllPosts().then((res) => {
      if (!res.error) {
        return setPosts(res);
      }
    });
  }, []);

  useEffect(() => {
    userService.getUserInfo().then((res) => {
      console.log(res);
      return setData((data) => ({
        ...data,
        res
      }));
    });
  }, []);

  const content = posts.map((post) => {
    console.log(post);
    const { _id, title, pictures, liked, createdOn, createdBy } = post;
    return (
      <PostCard
        key={_id}
        id={_id}
        title={title}
        img={pictures[0]}
        liked={liked}
        date={createdOn}
        userId={createdBy}
      />
    );
  });

  return (
    <div className='profile-wrapper'>
      <Row>
        <Col md={4}>
          <div className='short-info'>
            <div className='avatar-wrapper'>
              <img src={process.env.PUBLIC_URL + 'avatar.jpg'} alt='avatar' />
            </div>
            <div className='user-name'>{userData.res.username}</div>
            <div className='date-registered'>Registered on {userData.res.createdOn}</div>
            <Link to='/editProfile' className='btn btn-outline-secondary'>
              Edit profile
            </Link>
          </div>
        </Col>
        <Col md={8}>
          <div className='detail-info'>
            <div className='detail-info__item'>
              <h2>Bio</h2>
              <p>{userData.res.bio}</p>
            </div>
            <div className='detail-info__item'>
              <h2>Date of birth</h2>
              <p>{userData.res.dateOfBirth}</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* TODO: User's posts list */}
      <div className='recent-posts'>
        <h2>Recent posts by {userData.res.username}</h2>
        <Row>{content}</Row>
      </div>
    </div>
  );
};
export default ProfilePage;
