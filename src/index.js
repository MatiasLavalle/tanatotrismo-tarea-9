import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../src/Header';
import Section from '../src/Section';
import Footer from '../src/Footer';


const app = <div>
  <Header/>
  <Section/>
  <Footer/>
</div>

ReactDOM.render(app,document.getElementById('root'))