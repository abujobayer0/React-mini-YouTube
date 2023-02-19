
import {Stack}from"@mui/material"
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "../components/SearchBar"
const NavBar = () => {
  
  return(
 <Stack direction="row"
  alignItems="center"
   p={2} 
   sx={{position:"sticky",background:"linear-gradient(90deg, rgba(15,43,107,1) 0%, rgba(76,40,158,1) 50%, rgba(21,14,75,1) 100%)",top:0,left:0,zIndex:1,justifyContent:"space-between",borderBottom:"1px solid #3d3d3d"}}>
<Link to="/" style={{display:"flex",alignItems:"center"}}>
  <img src={logo} alt="logo" height={45}/>
</Link>
<SearchBar/>
 </Stack>)
};

export default NavBar;
