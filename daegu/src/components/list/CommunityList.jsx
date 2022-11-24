import React from "react";
import CommunityListItem from "./CommunityListItem";
import TagButton from "../ui/TagButton";
import data from "./communityData.json";
import tagData from "./tagData.json";

const styles ={
    wrapper:{
        width : 930,
        margin: 20,
        display: "flex",
        textAlign: 'center',
        marginLeft: 200,
        // justifyContent: 'center'
    },
    wrapper_search:{
        flexDirection: "row"
    },
    searchbar:{
        width : 930,
        height: 45,
        margin: 20,
        display: "end",
        // marginRight:"10px",
        marginLeft:"200px",
        flexDirection: "flex",
        // border: "1px solid grey",
        borderRadius: 10,
        backgroundColor : "white",
    },
    search_btn:{
        border:0,
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'inline-block',
        marginRight : 5,
        float : 'right'
    },
    search:{
        marginTop:3,
        width:38,
        height:38,
    }
}

var timer;
var timer1;

class CommunityList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            communityListItem:[],
            tagListItem:[],
        };
    }

    componentDidMount(){
        const {communityListItem,tagListItem} = this.state;
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
        timer1 = setInterval(()=>{
            if(tagListItem.length<tagData.length){
                const index1 = tagListItem.length;
                tagListItem.push(tagData[index1]);
                this.setState({
                    tagListItem:tagListItem,
                })
            }else{
                clearInterval(timer1);
            }
        },0);
    }

    render(){
        return(
            <div>
                <div style={styles.searchbar}>
                    <button style={styles.search_btn}><img src="https://cdn-icons-png.flaticon.com/512/3542/3542003.png" style={styles.search}/></button>
                </div>
                <div style={styles.wrapper}>
                    {this.state.tagListItem.map((Tag)=>{
                        return (
                            <TagButton title={"#"+Tag.tag} onClick={()=>{}}/>
                        )
                    })}
                </div>
                <div>
                    {this.state.communityListItem.map((Item)=>{
                        return (
                            <CommunityListItem
                                id = {Item.Id}
                                name = {Item.Name}
                                image = {Item.Image}
                                message = {Item.Message}
                                tag = {Item.Tag} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default CommunityList;