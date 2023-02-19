import React,{useState,useEffect} from "react";
import { Box,Typography}from"@mui/material"
import {Videos} from "./"
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const SearchFeed = () => {
const { searchTearm}=useParams()
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTearm}`).then(data=>{setVideos(data.items)})
  },[searchTearm])
 
  return (

    <Box p={2} sx={{overflowY:"auto",height:"90vh", background:"linear-gradient(90deg, rgba(15,43,107,1) 0%, rgba(76,40,158,1) 50%, rgba(21,14,75,1) 100%)", flex:2}} >
  <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>Search Results for :<span style={{color:"#00abe4",padding:"0 10px"}}>{searchTearm}</span>Videos </Typography>
  <Videos videos={videos}/>
</Box>
  )
  
};

export default SearchFeed;
