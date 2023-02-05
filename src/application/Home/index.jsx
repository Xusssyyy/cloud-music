import React from "react";
import { Top, Tab, TabItem } from "./style";
import { NavLink, Outlet, useNavigate } from "react-router-dom"; //利用NavLink组件进行路由跳转

function Home(props) {
  const navigate = useNavigate();

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search" onClick={() => navigate("/search")}>
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
