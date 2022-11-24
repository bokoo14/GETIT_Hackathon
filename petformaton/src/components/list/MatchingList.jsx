import React from "react";
import MatchingListItem from "./MatchingListItem";
import TagButton from "../ui/TagButton";
import data from "../Data/communityData.json";
import tagData from "../Data/tagData.json";

const styles ={
    layout:{
        marginLeft:100
    },
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

class MatchingList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            matchingListItem:[],
            tagListItem:[],
        };
    }

    componentDidMount(){
        const {matchingListItem,tagListItem} = this.state;
        timer= setInterval(()=>{
            if(matchingListItem.length<data.length){
                const index = matchingListItem.length;
                matchingListItem.push(data[index]);
                this.setState({
                    matchingListItem:matchingListItem,
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
            <div style={styles.layout}>
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
                    {this.state.matchingListItem.map((Item)=>{
                        return (
                            <MatchingListItem
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

export default MatchingList;