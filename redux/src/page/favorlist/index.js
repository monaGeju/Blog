import React, { Component } from 'react'
import styles from './index.module.scss'
import { Input, Button, List } from 'antd'
import store from './../../redux/store';
import { addItem, deleteItem, getListData } from './../../redux/action'

class FavorList extends Component {

  constructor(props) {

    super(props);

    this.state = {
      title: '请在下方添加框输入你喜欢的童年电影',
      inputValue: '',
      listData: []
    }
  }

  componentDidMount() {

    store.subscribe(this.storeChange)

    this.setState({
      listData: store.getState().listData
    })
  }

  storeChange = () => {

    this.setState(store.getState())
  }

  inputChange = ({ target: { value } }) => {

    this.setState({
      inputValue: value
    })
  }

  handleAddItem = () => {

    const { inputValue } = this.state

    store.dispatch(addItem(inputValue))
  }

  handleDeleteItem = (index) => {

    store.dispatch(deleteItem(index))
  }

  handleGetListData = () => {

    store.dispatch(getListData())
  }

  render() {

    const { listData, title } = this.state

    return (
      <div className={ styles.page }>
        <h1>{ title }</h1>
        <div>
          <Input placeholder="请输入名称" onChange={ this.inputChange } className={ styles.input } />
          <Button type="primary" onClick={ this.handleAddItem }>新增</Button>
          <Button type="primary" style={{marginLeft: '20px'}} onClick={ this.handleGetListData }>获取远程数据</Button>
        </div>
        <div className={ styles.mainContent }>
          <List
            bordered
            dataSource={ listData }
            renderItem={(item, index) => (
              <List.Item className={ styles.listItem } key={item + index} onClick={ () => { this.handleDeleteItem(index) } }>{item}</List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default FavorList;