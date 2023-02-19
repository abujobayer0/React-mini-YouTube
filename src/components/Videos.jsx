import { Stack,Box } from "@mui/material"
import {VideoCard,ChannelCard, Preloader} from"./"
const Videos = ({videos,direction}) => {
    if(!videos?.length)return <Preloader/>
    return (
       <Stack direction={direction||"row"} flexWrap="wrap " gap={2} justifyContent={"start"} >
{videos.map((item,idx)=>(
    <Box key={idx}>
        {item.id.videoId&&<VideoCard video={item} />}
        {item.id.channelId&&<ChannelCard video={item} channelDetail={item} />}
    </Box>
))}
       </Stack>
    );
};

export default Videos;