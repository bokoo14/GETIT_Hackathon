import React from "react";
import TagButton from "../ui/TagButton";
import WriteButton from "../ui/WriteButton";

const styles = {
    wrapper:{
        width : 1200,
        height: 150,
        margin: 20,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
        backgroundColor : "white",
    
    },
    Name:{
        color: "black",
        fontSize: 35,
    },
    img:{
        display : "block",
        border: "1px solid grey",
        borderRadius: 70,
        padding : 20,
        margin : 4,
    },
    messageText:{
        color: "black",
        fontSize: 20,
    },
    columnlayout:{
        flexDirection: "column",
    },
    tag:{
        fontSize: 16,
    },
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
                <div style={styles.layouts}>
                    <div style={styles.Name}>
                        {this.props.Name}
                    </div>
                    <div style={styles.messageText}>
                        {this.props.Message}
                    </div>
                    {this.props.tag.map((Tag)=>{
                        return(
                        <TagButton title={Tag.tag} onClick={()=>{}} style={styles.tag}/>
                        )
                    })}
                </div>
                <WriteButton title="상담\n신청하기" onClick={()=>{}}/>
            </div>
        )
    }
}

export default CommunityListItem;