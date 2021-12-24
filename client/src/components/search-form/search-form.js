/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './search-form.css';

export default class SearchForm extends Component {
  render() {
    return (
      <form id='search-posts'>
        <div className='search-input-block'>
          <input className='search-text' type='text' name='text' placeholder='Search...'></input>
          <button className='button action'>Search</button>
        </div>
      </form>
    );
  }
}
