import React, { useState, } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import Rating from '@mui/material/Rating';
import { Avatar } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import ComputerIcon from '@mui/icons-material/Computer';

import Stack from '@mui/material/Stack';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));

function Explore() {

  return (
   

        <Box sx={{ height: '55vh', }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

            <Grid item md={3} sm={12} xs={12} sx={{ width: '100%' ,display:"flex",ml:"7%"}}>
              <Box sx={{display:"flex"}} >
                <Item sx={{border:"1px solid black", height: { lg: '53vh' }, width: "55vh", textAlign: { md: 'left', sm: 'center' }, pl: { md: '10%', sm: '0%' } }}>
                  <Typography variant='h4' sx={{ textAlign: { xs: 'right', sm: 'center', md: 'center' ,lg:"center"}, pr: { xs: '10%', sm: '0%', md: '0%' }, width: "20%" , display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
                    <HandymanIcon sx={{ fontSize: "230%", borderRadius: "50px", bgcolor: "#1EB2A6", color: "white", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center" }} />
                  </Typography>
                  <Typography  sx={{ fontSize:"3.4vh",color: 'black', fontWeight: 'bold', width: "55%", mt: "-20%",ml:"25%" }}>
                    HTML, CSS, and Javascript for Web Developers
                  </Typography>
 
                  <Typography variant='body1' sx={{  fontWeight: "bold", width: "95%", lineHeight: '30px', height: "5vh", mb: "5%", mt:"5%",color:"#1EB2A6",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
                    
                      <Rating name="size-medium" defaultValue={5} sx={{ml:"-13%", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center",color:"#1EB2A6"}} />(0.5)
                  </Typography>
                  <Typography variant='body1' sx={{ml:"-3%", fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%", lineHeight: '30px', height: "5vh", mb: "2%", }}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={2}>

                        <Avatar alt="Cindy Baker" src="https://avatars.mds.yandex.net/i?id=1d3d8bdfd459332e9c86ce83f49b0019-5236332-images-thumbs&ref=rim&n=33&w=141&h=188" /><b style={{ color: "lightgray" }}>by John Smith</b>
                      </Stack>
                    </Stack>
                  </Typography>
                  <Typography variant='h9' sx={{ ml:"-6%",color: "#1EB2A6", fontWeight: "bold", fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%",mb:"10%"}}>
                    50 lectures (190 hrs)
                  </Typography>

                  <Typography variant='body1' sx={{  fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%", bgcolor: "#F8F8F8", color: '#1EB2A6', lineHeight: '30px', height: "5vh", mb: "2%", }}>
                    $100 All Course / $15 per month
                  </Typography>

                  <Button variant="outlined" sx={{ fontWeight: "bold", width: "95%", border: "1px solid #1EB2A6", color: '#1EB2A6',  height: "5vh","&:hover":{bgcolor:"#1EB2A6",color:"white"}, }} >
                    ENROLL NOW!
                  </Button>

                </Item>
             

              </Box>
              <Box sx={{display:"flex",ml:"2%"}} >
                <Item sx={{border:"1px solid black", height: { lg: '53vh' }, width: "55vh", textAlign: { md: 'left', sm: 'center' }, pl: { md: '10%', sm: '0%' } }}>
                  <Typography variant='h4' sx={{ textAlign: { xs: 'right', sm: 'center', md: 'center' ,lg:"center"}, pr: { xs: '10%', sm: '0%', md: '0%' }, width: "20%" , display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
                    <ComputerIcon sx={{ fontSize: "230%", borderRadius: "50px", bgcolor: "#1EB2A6", color: "white", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center" }} />
                  </Typography>
                  <Typography  sx={{ fontSize:"3.4vh",color: 'black', fontWeight: 'bold', width: "55%", mt: "-20%",ml:"25%" }}>
                  Basic Funmen for Software Engineering
                  </Typography>

                  <Typography variant='body1' sx={{  fontWeight: "bold", width: "95%", lineHeight: '30px', height: "5vh", mb: "5%", mt:"5%",color:"#1EB2A6",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
                    
                      <Rating name="size-medium" defaultValue={5} sx={{ml:"-13%", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center",color:"#1EB2A6"}} />(0.5)
                  </Typography>
                  <Typography variant='body1' sx={{ml:"-3%", fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%", lineHeight: '30px', height: "5vh", mb: "2%", }}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={2}>

                        <Avatar alt="Cindy Baker" src="https://avatars.mds.yandex.net/i?id=211676b592bdebe681935e6aaa75de8b-5523677-images-thumbs&ref=rim&n=33&w=141&h=188" /><b style={{ color: "lightgray" }}>by John Smith</b>
                      </Stack>
                    </Stack>
                  </Typography>
                  <Typography variant='h9' sx={{ ml:"-6%",color: "#1EB2A6", fontWeight: "bold", fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%",mb:"10%"}}>
                    50 lectures (190 hrs)
                  </Typography>

                  <Typography variant='body1' sx={{  fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%", bgcolor: "#F8F8F8", color: '#1EB2A6', lineHeight: '30px', height: "5vh", mb: "2%", }}>
                    $100 All Course / $15 per month
                  </Typography>

                  <Button variant="outlined" sx={{ fontWeight: "bold", width: "95%", border: "1px solid #1EB2A6", color: '#1EB2A6',  height: "5vh" ,"&:hover":{bgcolor:"#1EB2A6",color:"white"},}} >
                    ENROLL NOW!
                  </Button>

                </Item>
             

              </Box>
              <Box sx={{display:"flex",ml:"2%"}} >
                <Item sx={{border:"1px solid black", height: { lg: '53vh' }, width: "55vh", textAlign: { md: 'left', sm: 'center' }, pl: { md: '10%', sm: '0%' } }}>
                  <Typography variant='h4' sx={{ textAlign: { xs: 'right', sm: 'center', md: 'center' ,lg:"center"}, pr: { xs: '10%', sm: '0%', md: '0%' }, width: "20%" , display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
                    <AutoGraphIcon sx={{ fontSize: "230%", borderRadius: "50px", bgcolor: "#1EB2A6", color: "white", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center" }} />
                  </Typography>
                  <Typography  sx={{ fontSize:"3.4vh",color: 'black', fontWeight: 'bold', width: "55%", mt: "-20%",ml:"25%" }}>
                  Introducing to Programming with WordPress
                  </Typography>

                  <Typography variant='body1' sx={{  fontWeight: "bold", width: "95%", lineHeight: '30px', height: "5vh", mb: "5%", mt:"5%",color:"#1EB2A6",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
                    
                      <Rating name="size-medium" defaultValue={5} sx={{ml:"-13%", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center",color:"#1EB2A6"}} />(0.5)
                  </Typography>
                  <Typography variant='body1' sx={{ml:"-3%", fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%", lineHeight: '30px', height: "5vh", mb: "2%", }}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={2}>

                        <Avatar alt="Cindy Baker" src="https://avatars.mds.yandex.net/i?id=2a0000017a0ff9b0819935a3fe63cd93a970-4829304-images-thumbs&n=13" /><b style={{ color: "lightgray" }}>by John Smith</b>
                      </Stack>
                    </Stack>
                  </Typography>
                  <Typography variant='h9' sx={{ ml:"-6%",color: "#1EB2A6", fontWeight: "bold", fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%",mb:"10%"}}>
                    50 lectures (190 hrs)
                  </Typography>

                  <Typography variant='body1' sx={{  fontWeight: "bold", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: "95%", bgcolor: "#F8F8F8", color: '#1EB2A6', lineHeight: '30px', height: "5vh", mb: "2%", }}>
                    $100 All Course / $15 per month
                  </Typography>

                  <Button variant="outlined" sx={{ fontWeight: "bold", width: "95%", border: "1px solid #1EB2A6", color: '#1EB2A6',  height: "5vh" ,"&:hover":{bgcolor:"#1EB2A6",color:"white"},}} >
                    ENROLL NOW!
                  </Button>

                </Item>
             

              </Box>
            </Grid>

          </Grid>

        </Box>
     
  )
}

export default Explore