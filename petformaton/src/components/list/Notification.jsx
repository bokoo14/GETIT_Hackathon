import React from "react";
import Image from "./imageage.png"
const styles = {
    wrapper:{
        width : 930,
        height: 130,
        margin: 20,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
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
        margin : 4,
    },
    messageText:{
        color: "black",
        fontSize: 16,
        fontFamily: "Noto Sans KR",
        marginRight : 10,
    },
    layouts:{
        flexDirection: "column",
        
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
                <div style={styles.layouts}>
                    <div style={styles.Title}>
                        {this.props.title}
                    </div>
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