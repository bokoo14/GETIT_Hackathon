import React from "react";

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
    Title:{
        color: "black",
        fontSize: 32,
    },
    img:{
        display : "block",
        border: "1px solid grey",
        borderRadius: 16,
        padding : 20,
        margin : 4,
    },
    messageText:{
        color: "black",
        fontSize: 16,
    },
    columnlayout:{
        flexDirection: "column",
    },
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
            </div>
        )
    }
}

export default Notification