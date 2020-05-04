const initialState = {
  listData: [
    '神厨小福贵',
    '迪迦奥特曼',
    '猫和老鼠'
  ]
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'GETLIST':

      console.log(action.payload)
      return {
        ...state,
        listData: action.payload
      }

    case 'ADDITEM':

      return {
        ...state,
        listData: [
          ...state.listData,
          action.payload
        ]
      }

    case 'DELETEITEM':

      const tempList = [...state.listData]
      tempList.splice(action.payload, 1)

      return {
        ...state,
        listData: tempList,
      }

    default:

    return state
  }
}