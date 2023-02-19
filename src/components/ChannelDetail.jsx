import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos,ChannelCard}from"./"
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const {id}=useParams()
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(data=>setChannelDetail(data?.items[0]));
    
  },[id])
  useEffect(()=>{
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  },[id])
  console.log(videos)
  return <Box minHeight="95vh" sx={{background:"linear-gradient(90deg, rgba(15,43,107,1) 0%, rgba(76,40,158,1) 50%, rgba(21,14,75,1) 100%)"}}>
    <Box>
      <div style={{
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",zIndex:10,height
        :"300px"
      }}/>
      <ChannelCard 
      marginTop={"-110px"}
      channelDetail={channelDetail}/>
    </Box>
    <Box display={"flex"} p={2}>

<Box sx={{mr:{sm:"100px"}}}/>
<Videos videos={videos} />

    </Box>
  </Box>;
};

export default ChannelDetail;
