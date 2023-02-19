import { CheckCircle } from "@mui/icons-material";
import { Typography,CardContent,CardMedia, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({channelDetail,marginTop}) => (<Box sx={{boxShadow:"rgba(55, 44, 44, 0.4) 0px 0px 0px 2px, rgba(255, 255, 255, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",width:{xs:"356px",md:"320px"},height:"326px",margin:"auto",marginTop,background:"transparent",backdropFilter:"blur(35px)"}}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",color:"#FFF"}}>
            <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url|| demoProfilePicture}
            alt={channelDetail?.snippet?.title} 
            sx={{borderRadius:"50%",height:"180px",width:"180px",mb:2,border:"1px solid #e3e3e3"}}/>
            <Typography variant={"h6"}>
{channelDetail?.snippet?.title}
<CheckCircle sx={{fontSize:14,color:"gray",ml:"5px",}}/>
            </Typography>
            {channelDetail?.statistics?.subscriberCount&&(
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
            )}
        </CardContent>
    </Link>
</Box>)

export default ChannelCard;