import "./App.css";
import styled from "styled-components";
import { css } from "styled-components";
import WriteButton from "./components/ui/WriteButton";
import TagButton from "./components/ui/TagButton";
import NotificationList from "./components/list/Notificationlist";
import CommunityPage from "./components/page/CommunityPage";
import CommunityList from "./components/list/CommunityList";

const Div = styled.div`
  overflow: hidden;
  font-family: "Roboto Slab", serif;
  background-color: #F5EDDD;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
  font-size: 20px;
  font-style: italic;
  align-items: center;
  text-align: center;
  padding-top: 150px;
  font-family: "Hallym";
  position: absolute;
  padding-left: 1.3em;
  height: 80px;
  width: 240px;
`;

const One = styled.div`
  /* background-size: cover;
    text-align: center;
    padding-top: 180px;
    padding-bottom: 130px; */
`;

const Two = styled.div``;

const Three = styled.div``;

const Five = styled.div``;

const Four = styled.div`
  text-align: center;
  align-items: center;
`;

const Logo = styled.h3`
  margin-top: 30px;
  position: absolute;
  left: 1em;
  font-size: 2.1em;
  color: white;
  font-family: "Hallym";
  font-weight: bold;
`;
const Header = styled.div`
`;

function Main(props) {
  return (
    <Div>
      <Container>
        <Header>
          <Logo>
            <b>대구 어때</b>
          </Logo>
          <Menu>
            <Ul>
              <Link href="#Home">Home</Link>
              <Separator></Separator>
              <Link href="#Search">Search</Link>
              <Separator></Separator>
              <Link href="#MyBlog">My Blog</Link>
              <Separator></Separator>
              <Link href="#Community">Community</Link>
              <Separator></Separator>
              <Link href="#LogIn">Log In</Link>
              <Separator></Separator>
            </Ul>
          </Menu>
        </Header>
        <List className="list">
          <One id="Home">
            <WelcomeDiv>
              <Welcome>
                대구의 다양한 장소들을 알아보세요!
                <br></br>
                나만 알기 아쉬운 장소를 공유해주세요!
              </Welcome>
            </WelcomeDiv>
          </One>
        </List>
        <List className="list">
          <Two id="Search">search page</Two>
        </List>
        <List className="list">
          <Three id="MyBlog">
            <ThreeDiv>
              <WriteButton id="WriteButton" title="글쓰기" onClick/>
              <NotificationList />
            </ThreeDiv>
          </Three>
        </List>
        <List className="list">
          <Four id="Community">
            <WriteButton id="WriteButton" title="글쓰기" onClick/>
            <TagButton title="#안녕" onClick/>
            <CommunityList/>
          </Four>
        </List>
        <List className="list">
          <Five id="LogIn">login</Five>
        </List>
      </Container>
    </Div>
  );
}

export default Main;
