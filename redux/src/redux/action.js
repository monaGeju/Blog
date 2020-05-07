import axios from 'axios'
import { message } from 'antd'

export const addItem = (payload) => (
  {
    type: 'ADDITEM',
    payload,
  }
)

export const deleteItem = (payload) => ({
  type: 'DELETEITEM',
  payload
})


export const getListData = (payload) => {

  return (dispatch) => {

    // 请求数据
    axios.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then(({ data: {result} }) => {

    //处理数据
      const tempData = []

      result.forEach(item => {

        tempData.push(item.text)
      })

      console.log(tempData)
      message.success('请求数据成功')

      const action = {
        type: 'GETLIST',
        payload: tempData
      }
    // 为啥要再次派发事件？
      dispatch(action)
    })
  }
}