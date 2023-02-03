import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
export default combineReducers({
  // 之后开发具体功能模块时添加reducer
  recommend: recommendReducer,
});
