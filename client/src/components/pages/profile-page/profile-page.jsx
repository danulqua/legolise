import React, { Component } from 'react';
import './profile-page.scss';
import { Col, Row } from 'reactstrap';

import ShortInfo from '../../profile-short-info';
import Social from '../../profile-social';
import FullInfo from '../../profile-full-info';
import UserPosts from '../../profile-user-posts';
import FriendList from '../../friend-list';

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
              <div className='user-name'>
                Vasil Kozakov <span>@vasil4264</span>
              </div>
              <div className='date-registered'>Registered on 12.12.2012</div>
            </div>
          </Col>
          <Col md={8}>
            <div className='detail-info'>
              <div className='detail-info__item'>
                <h2>About</h2>
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

        {/* <ul>
          <Row className='profile-row-container'>
            <ShortInfo
              userName='VasylKuro1999'
              about='Файний хлопець'
              rating='9.2'
              avatar='avatar2.png'
            />
            <FullInfo
              firstName='Василь'
              lastName='Куропатко'
              occupation='Студент в КПІ'
              roomatesPreferences='Спокійні, доброзичливі, охайні'
              priceRange='3000-5000'
              dateOfBirth='1999-02-01'
            />
          </Row>
          <Row className='profile-row-container'>
            <Social
              telegram='@vasyl1999'
              viber='+380956791842'
              whatsApp='+380956791842'
              phoneNumber='+380956791842'
            />
          </Row>
          <Row className='profile-row-container'>
            <FriendList
              userId='aswaxc'
              friendList={[
                { id: 'aasd', userName: 'zirael', avatar: 'avatar2.png' },
                { id: 'efgg', userName: 'whoisthere', avatar: 'avatar2.png' },
                {
                  id: 'adcaz',
                  userName: 'friendofmine',
                  avatar: 'avatar2.png'
                },
                { id: 'shdv', userName: 'snowball', avatar: 'avatar2.png' },
                { id: 'dnfia', userName: 'blackbunny', avatar: 'avatar2.png' }
              ]}
            />
            <UserPosts
              userPosts={[
                { id: 1, title: 'title1' },
                { id: 2, title: 'title2' },
                { id: 3, title: 'title3' },
                { id: 4, title: 'title4' },
                { id: 5, title: 'title5' }
              ]}
            />
          </Row>
        </ul> */}
      </div>
    );
  }
}
export default ProfilePage;
