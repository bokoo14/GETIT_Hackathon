import React from "react";
import CommunityListItem from "./CommunityListItem";
import data from "../Data/communityData.json"


var timer;

class CommunityList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            communityListItem:[],
        };
    }

    componentDidMount(){
        const {communityListItem} = this.state;
        timer= setInterval(()=>{
            if(communityListItem.length<data.length){
                const index = communityListItem.length;
                communityListItem.push(data[index]);
                this.setState({
                    communityListItem:communityListItem,
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
                {this.state.communityListItem.map((communityListItem)=>{
                    return (
                        <CommunityListItem
                            id = {communityListItem.Id}
                            name = {communityListItem.Name}
                            image = {communityListItem.Image}
                            message = {communityListItem.Message}
                            tag = {communityListItem.Tag} />
                    )
                })}
            </div>
        );
    }
}

export default CommunityList;