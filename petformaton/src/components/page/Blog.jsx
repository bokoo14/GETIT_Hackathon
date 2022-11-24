import React, {Component} from "react";
import styled from "styled-components";

const ImgPet = styled.img`
width: 240px;
height: 246px;
left: 1089px;
top: 239px;
object-fit: cover;
border-radius: 10px;
`;

const TablePet = styled.table`
width: 240px;
height: 346px;
left: 1089px;
top: 239px;

background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(204, 204, 204, 0.5);
border-radius: 10px;
`

const TablePetTop = styled.table`
box-sizing: border-box;

width: 720px;
height: 60px;
left: 402px;
top: 108px;
margin-bottom: 10px;
border: 4px solid #FFFFFE;
border-radius: 50px;
`

const Td = styled.td`
width: 150px;
height: 30px;
left: 904px;
top: 129px;

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #000000;
`

class Blog extends Component{

    render(){

        return (
            <>
                <TablePetTop className="table">
                    <tr>
                        <Td>추천</Td>
                        <Td>강아지 연구소</Td>
                        <Td>고양이 연구소</Td>
                        <Td>뉴스/브랜드</Td>
                    </tr>   
                </TablePetTop>

                <TablePet>
                    <tr className="tr">
                        <td><ImgPet src={ require('../../images/DogImage/pic1.png') }/></td>
                        <td><ImgPet src={ require('../../images/DogImage/pic2.png') }/></td>
                        <td><ImgPet src={ require('../../images/DogImage/pic3.png') }/></td>
                    </tr>
                    <tr className="tr">
                        <Td>수달</Td>
                        <Td>강아지</Td>
                        <Td>리트리버</Td>
                    </tr>
                    <tr className="tr">
                        <td><ImgPet src={ require('../../images/DogImage/pic4.png') }/></td>
                        <td><ImgPet src={ require('../../images/DogImage/pic5.png') }/></td>
                        <td><ImgPet src={ require('../../images/DogImage/pic6.png') }/></td>
                    </tr>
                    <tr className="tr">
                        <Td>고양이</Td>
                        <Td>팽귄</Td>
                        <Td>병아리</Td>
                    </tr>
                </TablePet>
            </>
        )
    }
}

export default Blog;