/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './search-form.css';

export default class SearchForm extends Component {
  render() {
    return (
      <form id='search-posts'>
        <div className='search-input-block'>
          <input className='search-text' type='text' name='text' placeholder='Пошук...'></input>
          <button className='button action'>Пошук</button>
        </div>
        <div className='search-filters'>
          <Row>
            <Col lg={3} md={6}>
              <div className='filter-block'>
                <h4>Тип оголошення</h4>
                <div className='form-radio'>
                  <input type='radio' id='type-1' name='postType' value='flat' defaultChecked />
                  <label htmlFor='type-1'>Пошук співмешканця</label>
                </div>
                <div className='form-radio'>
                  <input type='radio' id='type-2' name='postType' value='group' />
                  <label htmlFor='type-2'>Пошук групи</label>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='filter-block'>
                <h4>Район</h4>
                <select name='district'>
                  <option></option>
                  <option>Голосіївський</option>
                  <option>Дарницький</option>
                  <option>Деснянський</option>
                  <option>Дніпровський</option>
                  <option>Оболонський</option>
                  <option>Печерський</option>
                  <option>Подільский</option>
                  <option>Святошинський</option>
                  <option>Солом'янський</option>
                  <option>Шевченківський</option>
                </select>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='filter-block'>
                <h4>Адреса</h4>
                <input type='text' name='address' placeholder='Вулиця...' />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='filter-block'>
                <h4>Ціна</h4>
                <div className='price-block'>
                  <input
                    className='price-range'
                    name='minPrice'
                    type='number'
                    placeholder='Від'
                    defaultValue='0'
                    min='0'
                  />
                  <span>-</span>
                  <input
                    className='price-range'
                    name='maxPrice'
                    type='number'
                    placeholder='До'
                    min='0'
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </form>
    );
  }
}
