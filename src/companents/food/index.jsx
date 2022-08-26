import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const index = () => {
  return (
  
<Box sx={{bgcolor:"#0B0B0B"}}>
<Typography variant='h3' sx={{textAlign:"center",color:"white",pt:"5%",fontFamily:"cursive"}}>Food Lover's Say</Typography>
    <Box sx={{display:"flex",mt:"3%"}}>

<Box sx={{border:"1px solid rgba(255,255,255,.2);" ,borderLeft:"none",height:"45vh",width:"38%"}}>
<Rating name="size-medium" defaultValue={5} sx={{width:"35%",justifyContent:"right",mt:"8%",fontWeight:"bold",color:"#E5BF4A"}} />
<Typography  sx={{fontSize:"28px",fontFamily:"revert",width:"80%",textAlign:"left",ml:"10%",lineHeight:"1.5",color:"white"}}>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</Typography>

<Stack spacing={1} sx={{ml:"12%",mt:"15%"}}>
                      <Stack direction="row" spacing={2}>

                        <Avatar alt="Cindy Baker" src="https://avatars.mds.yandex.net/i?id=1d3d8bdfd459332e9c86ce83f49b0019-5236332-images-thumbs&ref=rim&n=33&w=141&h=188" /><Typography variant='h6' sx={{color:"white"}}>Wilma Mumduya</Typography>
                      </Stack>
                    </Stack>
</Box>

<Box sx={{border:"1px solid rgba(255,255,255,.2);" ,borderLeft:"none",height:"45vh",width:"38%"}}>
<Rating name="size-medium" defaultValue={5} sx={{width:"35%",justifyContent:"right",mt:"8%",fontWeight:"bold",color:"#E5BF4A"}} />
<Typography  sx={{fontSize:"28px",fontFamily:"revert",width:"80%",textAlign:"left",ml:"10%",lineHeight:"1.5",color:"#FFFFFF"}}>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</Typography>

<Stack spacing={1} sx={{ml:"12%",mt:"15%"}}>
                      <Stack direction="row" spacing={2}>

                        <Avatar alt="Cindy Baker" src="https://protalismany.ru/wp-content/uploads/2018/11/plohie-misli.jpg" /><Typography variant='h6' sx={{color:"white"}}>Wilma Mumduya</Typography>
                      </Stack>
                    </Stack>
</Box>

<Box sx={{border:"1px solid rgba(255,255,255,.2);" ,borderRight:"none",borderLeft:"none",height:"45vh",width:"38%"}}>
<Rating name="size-medium" defaultValue={5} sx={{width:"35%",justifyContent:"right",mt:"8%",fontWeight:"bold",color:"#E5BF4A"}} />
<Typography  sx={{fontSize:"28px",fontFamily:"revert",width:"80%",textAlign:"left",ml:"10%",lineHeight:"1.5",color:"white"}}>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</Typography>

<Stack spacing={1} sx={{ml:"12%",mt:"15%"}}>
                      <Stack direction="row" spacing={2}>

                        <Avatar alt="Cindy Baker" src="https://avatars.mds.yandex.net/i?id=52290074f12b6ef2e45e79f8be8c9ac8-5204968-images-thumbs&n=13" /><Typography variant='h6' sx={{color:"white"}}>Wilma Mumduya</Typography>
                      </Stack>
                    </Stack>
</Box>


    </Box>
    </Box>

  )
}

export default index