import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoChannelTitle,demoChannelUrl,demoVideoUrl,demoVideoTitle } from "../utils/constants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  
    return (
      <Card sx={{width:{xs:"100% ", sm:"358px",md:"320px",},boxShadow: "rgba(148, 187, 233, 0.3) 0px 4px 12px",borderRadius:"0px",background:"transparent",backdropFilter:"blur(55px)"}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia
        alt={snippet?.title}
        sx={{width:{xs:"100%",sm:358,md:320},height:180}}
        image={snippet?.thumbnails?.high?.url}/>
        </Link>
        <CardContent sx={{background:"transparent",backdropFilter:"blur(35px)",height:"106px"}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight={"bold"} color="#fff">
                {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
                {snippet?.channelTitle||demoChannelTitle}
                <CheckCircle sx={{fontSize:10,color:"gray",ml:"5px",}}/>
            </Typography>
        </Link>
        </CardContent>
      </Card>
    );
};

export default VideoCard;