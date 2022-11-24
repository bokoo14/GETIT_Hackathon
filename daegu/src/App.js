import "./App.css";
import styled from "styled-components";
import { css } from "styled-components";
import Blog from "./components/page/Blog";
import Feed from "../src/components/feed";

const Div = styled.div`
  overflow: hidden;
  font-family: "Roboto Slab", serif;
  background-color: #bbdefb;
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
const Header = styled.div``;


function Main(props) {
  return (
    <Div>
      <Container>
        <Header>
          <Logo>
            <b>Petformation</b>
          </Logo>
          <Menu>
            <Ul>
              <Link href="#Pet 정보">Pet 정보</Link>
              <Separator></Separator>
              <Link href="#Pet 커뮤니티">Pet 커뮤니티</Link>
              <Separator></Separator>
              <Link href="#전문가 매칭">전문가 매칭</Link>
              <Separator></Separator>
              <Link href="#상품">상품</Link>
              <Separator></Separator>
            </Ul>
          </Menu>
        </Header>
        <List className="list">
          <One id="Pet 정보">
            <Blog/>
          </One>
        </List>
        <List className="list">
          <Two id="Pet 커뮤니티"><Blog/></Two>
        </List>
        <List className="list">
          <Three id="전문가 매칭">
            <ThreeDiv>전문가 매칭</ThreeDiv>
          </Three>
        </List>
        <List className="list">
          <Four id="상품"><Feed/></Four>
        </List>
      </Container>
    </Div>
  );
}

export default Main;
