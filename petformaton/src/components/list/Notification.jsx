import React from "react";
import Image from "./imageage.png"
const styles = {
    wrapper:{
        width : 930,
        height: 150,
        margin: 20,
        display: "flex",
        marginLeft: 200,
        flexDirection: "row",
        border: "2px solid grey",
        borderRadius: 16,
        backgroundColor : "white",
    },
    Title:{
        color: "black",
        fontSize: 20,
        marginBottom : 10,
        fontFamily: "Noto Sans KR"
    },
    img:{
        display : "block",
        borderRadius: 40,
        padding : 20,
        margin : 4,
    },
    messageText:{
        color: "black",
        fontSize: 16,
        fontFamily: "Noto Sans KR",
        marginRight : 10,
    },
    layouts:{
        width:600,
        flexDirection: "column",
        padding:20,
    },
    ImageH:{
        display : "block",
        padding:20,
        marginRight : 20,
        margin : 10,
    }
};


class Notification extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <img style ={styles.img} alt="noImage" src={this.props.image} />
                <div align="left" style={styles.layouts}>
                    <div style={styles.Title}>
                        {this.props.title}
                    </div>
                    <hr/>
                    <div style={styles.messageText}>
                        {this.props.message}
                    </div>
                </div>
                <img style ={styles.ImageH} alt ="NoImage" src={Image} />
            </div>
        )
    }
}

export default Notification;