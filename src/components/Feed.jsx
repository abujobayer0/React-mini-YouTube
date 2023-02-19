import React,{useState,useEffect} from "react";
import { Box,Stack,Typography}from"@mui/material"
import {SideBar,Videos} from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data=>{setVideos(data.items)})
  },[selectedCategory])
 
  return <Stack
  sx={{flexDirection:{sx:"column",md:"row"},background:"linear-gradient(90deg, rgba(15,43,107,1) 0%, rgba(76,40,158,1) 50%, rgba(21,14,75,1) 100%)"}}
  ><Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}}>
<SideBar 
setSelectedCategory={setSelectedCategory}
selectedCategory={selectedCategory}
/>
<Typography className="copyright" variant="body2" sx={{mt:1.5,color:"#fff"}}>
  Copyright 2023
</Typography>
  </Box>
<Box p={2} sx={{overflowY:"auto",height:"90vh", flex:2}} >
  <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}> {selectedCategory}<span style={{color:"#00abe4" ,padding:"0 10px"}}>videos</span></Typography>
  <Videos videos={videos}/>
</Box>
  </Stack>
};

export default Feed;
