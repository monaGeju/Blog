import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from './index.module.scss';
import { List, Row, Col } from 'antd'
import Frontpage from '../rightMain/Frontpage.js'
import Video from '../rightMain/video'
import WorkSpace from './../rightMain/workSpace'

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

    return (
        <Router>
          <div className={ styles.page }>
            <Row>
              <Col span={ 4 } className={ styles.leftNav }>
                  <List>
                    <Link to='/'>
                      <List.Item>博客首页</List.Item>
                    </Link>
                    <Link to='/video'>
                      <List.Item>视频教程</List.Item>
                    </Link>
                    <Link to='/workspace'>
                      <List.Item>职场技能</List.Item>
                    </Link>
                  </List>
              </Col>
              <Col span={ 20 } className={ styles.rightMain }>
                <> 
                  {/* 注意：只有首页会且必须使用exact，否则会出现问题，具体问题还没探究 */}
                  <Route key={ 0} path='/' exact component={ Frontpage } />

                  <Route key={ 1} path='/video' component={ Video } />

                  <Route key={ 2} path='/workspace' component={ WorkSpace } />
                </>
              </Col>
            </Row>
          </div>
        </Router>
    )
  }
}



export default App;