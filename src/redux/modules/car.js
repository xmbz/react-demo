// 初始化state数据
export const initialState = {
  count: 0,
  title: "首页展示",
};

// 定义action常量
const actionType = {
  ADD_COUNT: "ADD_COUNT" // 新增数量
};

// 定义action方法
export const carActions = {
  addCount(count) {
    return {
      type: actionType.ADD_COUNT,
      count
    };
  }
};  

// 输出模块的reducer方法
export default function car(state = initialState, action = {}) {
  switch (action.type) {
    case actionType.ADD_COUNT:
      return { ...state, ...{ count: state.count + action.count } };
    default:
      return state;
  }
}
