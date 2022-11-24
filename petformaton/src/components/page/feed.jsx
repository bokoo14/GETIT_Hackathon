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


const Td2 = styled.td`
width: 150px;
height: 30px;
left: 904px;
top: 129px;

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 22px;
text-align: center;
color: #000000;
`

class feed extends Component{

    render(){

        return (
            <>
                <TablePetTop className="table">
                    <tr>
                        <Td>사료</Td>
                        <Td>간식</Td>
                        <Td>애완용품</Td>
                        <Td>애견옷</Td>
                    </tr>   
                </TablePetTop>

                <TablePet>
                    <tr className="tr">
                        <td><ImgPet src={ require('../../images/FeedImage/feed0.png') }/></td>
                        <td><ImgPet src={ require('../../images/FeedImage/feed1.png') }/></td>
                        <td><ImgPet src={ require('../../images/FeedImage/feed2.png') }/></td>
                    </tr>
                    <tr className="tr">
                        <Td2>로얄캐닌 사료 미니 인도어 어덜트 8.7kg</Td2>
                        <Td2>컴페니언팻츠클래식 어널트 쇠고기 애견사료</Td2>
                        <Td2>[사료보관통 증정] 로얄캐닌 사료 미니 인도어 퍼피 3KG</Td2>
                    </tr>
                    <tr className="tr">
                        <td><ImgPet src={ require('../../images/FeedImage/feed3.png') }/></td>
                        <td><ImgPet src={ require('../../images/FeedImage/feed4.png') }/></td>
                        <td><ImgPet src={ require('../../images/FeedImage/feed5.png') }/></td>
                    </tr>
                    <tr className="tr">
                        <Td2>도그랑 어널트 진도골드 간식 사료</Td2>
                        <Td2>하림팻푸드 더리얼 그레인프리 크런치 어널트 강아지 사료</Td2>
                        <Td2>개별스틱 참치 조갯살 믹스 츄르 20개입 간식 고양이</Td2>
                    </tr>
                </TablePet>
            </>
        )
    }
}

export default feed;