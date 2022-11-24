import React from "react";
import Notification from "./Notification";
import data from "./data.json";


var timer;

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
                {this.state.notifications.map((notifications)=>{
                    return (
                        <Notification
                            id = {notifications.id}
                            title = {notifications.Title}
                            image = {notifications.image}
                            message = {notifications.message} />
                    )
                })}
            </div>
        );
    }
}

export default NotificationList;