import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import { reducer as singersReducer } from "../application/Singers/store/index";
import { reducer as albumReducer } from "../application/Album/store/index";
import { reducer as singerInfoReducer } from "../application/Singer/store/index";
import { reducer as searchReducer } from "../application/Search/store/index";
export default combineReducers({
  // 之后开发具体功能模块时添加reducer
  recommend: recommendReducer,
  singers: singersReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer,
  search: searchReducer,
});
