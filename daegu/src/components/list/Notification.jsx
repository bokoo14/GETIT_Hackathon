import React from "react";
import image from "./imageage.png"
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
        padding : "20px 0px 0px 0px",
    },
    Title:{
        color: "black",
        fontSize: 32,
        padding : "0px 0px 10px 0px",
        fontFamily: "Hallym",
    },
    img:{
        display : "block",
        border: "1px solid white",
        borderRadius: 16,
        padding : 20,
        margin : 4,
    },
    messageText:{
        color: "black",
        fontSize: 16,
        letterSpacing: 1.5,
        lineHeight:2,
        fontFamily: "Hallym",
    },
    columnlayout:{
        flexDirection: "column",
    },
    Block:{
        display : "block",
        padding : 20,
        margin : 4,
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
                <div style={styles.Block}>
                    <img alt="noImage" src={image} />
                </div>
            </div>
        )
    }
}

export default Notification