import styled from "styled-components";
import { css } from "styled-components";
import pet from "../images/pet.png";
import Logo from "../images/Logo.png";
import one from "../images/1.png";
import two from "../images/2.png";

const styles = {
  wrapper_main:{
      marginLeft:30
  }
}
const Div = styled.div`
  width: 100%;
  //height: 100%;
  left: 100%;
  top: 100%;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 150%;
  line-height: 200%;
  //text-align: center;

  color: #000000;

  margin-left: 40%;
  margin-top: 1%;
`;

const DivImg = styled.div`
  width: 100%;
  //height: 100%;
  left: 100%;
  top: 100%;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 150%;
  line-height: 200%;
  //text-align: center;

  color: #000000;

  margin-left: 15%;
  margin-top: 1%;
`;

const Img = styled.img`
width: 300px;
height: 300px;
object-fit: cover;
margin-left : 100px;
}
`;

const Text = styled.div`
  width: 100%;
  left: 100%;
  top: 100%;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 150%;
  line-height: 200%;
  text-align: center;

  color: #000000;

  margin-left: 20%;
  margin-top: 1%;
`;

function Home(props) {
  return (
    <>
      <Div>
        <img src={pet} width="8%" height="8%" />
        사랑스러운 애완동물을 위한 서비스
        <img src={pet} width="8%" height="8%" />
        <br />
        <img src={Logo} width="40%" height="40%"/>
        <br />
      </Div>
      <DivImg>
        <Img src={one} width="10%" height="10%" />
        <Img src={two} width="10%" height="10%" />
      </DivImg>
      <Text>
        애완동물이 아프거나, 특이한 행동을 보인다면 더이상 걱정하지 마세요.
        <br />
        petFormation에서 사랑스러운 애완동물을 위한 서비스가 마련되어 있습니다!
      </Text>
    </>
  );
}

export default Home;
