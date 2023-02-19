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

    <Box p={2} sx={{overflowY:"auto",height:"90vh", flex:2}} >
  <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>Search Results for :<span style={{color:"#f31503"}}>{searchTearm}</span>Videos </Typography>
  <Videos videos={videos}/>
</Box>
  )
  
};

export default SearchFeed;
