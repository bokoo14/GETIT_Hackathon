import "./App.css";
import styled from "styled-components";
import { css } from "styled-components";
import Home from "./components/Home";
import Logo from "./images/Logo.png";
import Blog from "./components/page/Blog";
import Feed from "./components/page/feed";
import CommunityList from "./components/list/CommunityList";
import NotificationList from "./components/list/Notificationlist";
import WriteButton from "./components/ui/WriteButton";
//전체
const Div = styled.div`
  // overflow: hidden;
  // font-family: "Roboto Slab", serif;
  background-color: #f5eddd;
`;

//왼쪽 초록색 box
const Slice = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 22%;
  height: 100%;
  left: 0px;
  top: 0px;

  background: #dbe2ba;
  border: 2px solid #b1b69a;
`;

const Img = styled.div`
  margin-left: 10px;
  width="50px";
  height="50px";
`;

const WelcomeDiv = styled.div`
  padding: 2rem 4rem;
  margin-left: 3.8em;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Welcome = styled.h1`
  color: #334841;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  line-height: 50px;
  font-family: "gmk";
`;

const ThreeDiv = styled.div`
  padding: 2rem 4rem;
  margin-left: 3.8em;
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  //border: 1px solid gray;
`;

const Ul = styled.nav`
  font-size: 1.1em;
  min-width: 100px;
  padding-right: 20px;
`;

const Link = styled.a`
  display: block;
  margin: 0 calc(20px * -1);
  padding: 8px 20px;
  border-radius: 4px;
  color: #fffffe;
  text-decoration: none;

  ${(p) =>
    p.active &&
    css`
      color: #ff8906;
      font-weight: bold;
    `}

  &:hover {
    background: white;
    color: gray;
    transform: translateY(-2px);
    transition: 1s;
  }

  &:not([href]) {
    color: #a7a9be;
    background: revert;
    transform: none;
  }
`;
const Separator = styled.hr`
  margin: 0;
  padding: 0;
  border: 0;
  height: 1px;
  border-top: 1px solid #fffffe;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const List = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
`;

const Menu = styled.nav`
  display: inline;
  font-size: 150%;
  font-style: italic;
  align-items: center;
  text-align: center;
  padding-top: 13%;
  font-family: "Hallym";
  position: absolute;
  padding-left: 3%;
  height: 20%;
  width: 17%;
`;

const One = styled.div`
  // margin-bottom: 35%;
`;

const Two = styled.div`
  margin-left : 20%;

`;

const Three = styled.div``;

const Four = styled.div``;

const Five = styled.div``;

const Header = styled.div``;

function Main(props) {
  return (
    <Div>
      <Slice></Slice>
      <Container>
        <Header>
          <Img src={Logo} />
          <Menu>
            <Ul>
              <Link href="#Home">Home</Link>
              <Separator></Separator>
              <Link href="#PetInfo">Pet 정보</Link>
              <Separator></Separator>
              <Link href="#Community">Pet 커뮤니티</Link>
              <Separator></Separator>
              <Link href="#Matching">전문가 매칭</Link>
              <Separator></Separator>
              <Link href="#Items">상품</Link>
              <Separator></Separator>
            </Ul>
          </Menu>
        </Header>
        <List className="list">
          <One id="Home">
            <Home></Home>
          </One>
        </List>
        <List className="list">
          <Two id="PetInfo"><Blog /></Two>
        </List>
        <List className="list">
          <Three id="Community">
            <ThreeDiv><WriteButton title = {"글쓰기"}/><NotificationList /></ThreeDiv>
          </Three>
        </List>
        <List className="list">
          <Four id="Matching"><CommunityList /></Four>
        </List>
        <List className="list">
          <Five id="Items"><Feed /></Five>
        </List>
      </Container>
    </Div>
  );
}

export default Main;