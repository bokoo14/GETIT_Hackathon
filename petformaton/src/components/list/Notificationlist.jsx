import React from "react";
import Notification from "./Notification";
import WriteButton from "../ui/WriteButton";
import data from "../Data/data.json";


var timer;

const styles ={
    wrapper:{
        marginLeft:100
    },
    button:{
        marginLeft:300,
    }
}
class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications:[],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer= setInterval(()=>{
            if(notifications.length<data.length){
                const index = notifications.length;
                notifications.push(data[index]);
                this.setState({
                    notifications:notifications,
                })
            }
            else{
                clearInterval(timer);
            }
        },0);
    }

    render(){
        return(
            <div>
                <div style={styles.button}>
                <WriteButton title = {"글쓰기"} onClick={()=>{}}/>
                </div>
                <div style={styles.wrapper}>
                {this.state.notifications.map((notifications)=>{
                    return (
                        <div>
                        <Notification
                            id = {notifications.id}
                            title = {notifications.Title}
                            image = {notifications.image}
                            message = {notifications.message} />
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}

export default NotificationList;