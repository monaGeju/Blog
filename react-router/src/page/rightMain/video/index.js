import React from 'react';
import { Route, Link } from 'react-router-dom'
import ReactPage from './ReactPage.js'
import Flutter from './Flutter.js'
import Vue from './Vue.js'

function Video () {

  return (
    <div>
      <div className='topNav'>
        <ul>
          <li>
            <Link to="/video/reactpage" style={{marginRight: '200px'}}>React教程</Link>
            <Link to="/video/flutter" style={{marginRight: '200px'}}>Flutter教程</Link>
            <Link to="/video/vue" style={{marginRight: '200px'}}>Vue教程</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
        </div>
        <Route path="/video/reactpage/" component={ ReactPage } />
        <Route path="/video/flutter/" component={ Flutter } />
        <Route path="/video/vue/" component={ Vue } />
      </div>
    </div>
  )
}

export default Video;
