import React from "react";
// import styled from "styled-components";
import TagButton from "../ui/TagButton";
import WriteButton from "../ui/WriteButton";

// const wrapper=styled.div`
//     width: 905px;
//     height: 181px;
//     left: 433px;
//     top: 405px;
//     flexDirection: "row";
//     border: "1px solid grey";
//     borderRadius: 16;
//     backgroundColor : "white";
//     text-align:center;
    
// `


const styles = {
    wrapper:{
        width : 930,
        height: 150,
        margin: 20,
        display: "flex",
        // marginRight:"10px",
        marginLeft:"200px",
        flexDirection: "row",
        border: "2px solid grey",
        borderRadius: 16,
        backgroundColor : "white",
        // textAlign: 'center',
        // justifyContent: 'center'
    },
    name:{
        color: "black",
        fontSize: 30,
        marginRight:480
    },
    img:{
        display : "block",
        border: "1px solid grey",
        borderRadius: 70,
        padding : 20,
        margin : 6,
        marginLeft:10,
    },
    messageText:{
        color: "black",
        fontSize: 18,
        marginLeft: 5,
        marginTop : 5,
        marginBottom:10
    },
    columnlayout:{
        width:600,
        flexDirection: "column",
        padding:20,
    },
    button:{
        display: 'inline-block',
        marginTop : 45,
        marginRight :5,
        float : 'center',
        textAlign : 'center'
    }
};


class CommunityListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <img style ={styles.img} alt="noImage" src={this.props.image} />
                <div align="left" style={styles.columnlayout}> 
                    <div style={styles.layouts}>
                        <div style={styles.name}>
                            {this.props.name}
                        </div>
                        <hr/>
                        <div style={styles.messageText}>
                            {this.props.message}
                        </div>
                        {this.props.tag.map((Tag)=>{
                            return(
                            <TagButton title={Tag.tag} onClick={()=>{}}/>
                            )
                        })}
                    </div>
                </div>
                <div style={styles.button}>
                    <WriteButton title="상담 신청하기" onClick={()=>{}}/>
                </div>
            </div>
        )
    }
}

export default CommunityListItem;