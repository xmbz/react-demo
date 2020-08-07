// 初始化state数据
export const initialState = {
  typeName: ""
};

// 定义action常量
const actionType = {
  CHANGE_TYPENAME: "CHANGE_TYPENAME" //
};

// 定义action方法
export const dicActions = {
  changeTypeName(typeName) {
    return {
      type: actionType.CHANGE_TYPENAME,
      typeName
    };
  }
};

// 输出模块的reducer方法
export default function dic(state = initialState, action = {}) {
  switch (action.type) {
    case actionType.CHANGE_TYPENAME:
      return { ...state, ...{ typeName: action.typeName } };
    default:
      return state;
  }
}
