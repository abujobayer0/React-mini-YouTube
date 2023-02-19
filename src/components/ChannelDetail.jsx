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
  return <Box minHeight="95vh">
    <Box>
      <div style={{
        background: "linear-gradient(90deg, rgba(127,190,255,1) 34%, rgba(80,92,255,1) 100%",zIndex:10,height
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
