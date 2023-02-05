import React, { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { Container } from "./style";
import { ImgWrapper, CollectButton, SongListWrapper, BgLayer } from "./style";
import Header from "../../baseUI/header/index";
import Scroll from "../../baseUI/scroll/index";
import SongsList from "../SongsList";
import { connect } from "react-redux";
import { getSingerInfo, changeEnterLoading } from "./store/actionCreators";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./../../baseUI/loading/index";

function Singer(props) {
  const [showStatus, setShowStatus] = useState(true);
  const imageWrapper = useRef();
  const songScrollWrapper = useRef();
  const { artist: immutableArtist, songs: immutableSongs, loading } = props;
  const { getSingerDataDispatch } = props;
  const artist = immutableArtist.toJS();
  const songs = immutableSongs.toJS();

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  console.log("id", id);

  useEffect(() => {
    let h = imageWrapper.current.offsetHeight;
    //在使用offsetHeight计算内容的高度时报Uncaught TypeError: Cannot read property 'offsetHeight' of null这个错误。
    //错误原因：JS运行的时候页面还没有加载完成，js代码找不到页面元素，就会抛出这个问题
    //解决方案：把自定义js放在<body/>结束标签前。
    songScrollWrapper.current.style.top = `${h}px`;
    console.log(songScrollWrapper.current.style.top, "////");
  }, []);

  useEffect(() => {
    getSingerDataDispatch(id);
  }, [getSingerDataDispatch, id]);

  const handleBack = useCallback(() => {
    setShowStatus(false);
    navigate(-1);
  }, []);

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
    >
      <Container>
        <Header title={artist.name} handleClick={handleBack}></Header>
        <ImgWrapper bgUrl={artist.picUrl} ref={imageWrapper}>
          <div className="filter"></div>
        </ImgWrapper>
        <CollectButton>
          <i className="iconfont">&#xe62d;</i>
          <span className="text"> 收藏 </span>
        </CollectButton>
        <SongListWrapper ref={songScrollWrapper}>
          <Scroll>
            <SongsList songs={songs} showCollect={false}></SongsList>
          </Scroll>
        </SongListWrapper>
        {loading ? <Loading></Loading> : null}
      </Container>
    </CSSTransition>
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  artist: state.getIn(["singerInfo", "artist"]),
  songs: state.getIn(["singerInfo", "songsOfArtist"]),
  loading: state.getIn(["singerInfo", "loading"]),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getSingerDataDispatch(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getSingerInfo(id));
    },
  };
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singer));
