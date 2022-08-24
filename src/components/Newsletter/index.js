import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { InputBase, Typography } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  boxShadow:'none'
}));



function Newsletter() {
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgb(30, 178, 166) !important',height:'260px'  }}>
        <Box sx={{ width: '80%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, lg: -5 }}>
        <Grid item xs={6} sx={{display:'flex',alignItems:'center',justifyContent:'center',}}>
          <Item>
            <Typography sx={{color:'white',fontSize:28,fontWeight:'bold',textAlign:'left'}}>Newsletter - Stay tune and get the latest update</Typography>
            <Typography sx={{color:'white',fontSize:18,fontWeight:400,textAlign:'left'}}>Far far away, behind the word mountains</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sx={{display:'flex',alignItems:'center',justifyContent:'center',}}>
          <Item sx={{}}>
          <InputBase placeholder='Enter email address' sx={{width:'170%',color:'white',borderBottom:'1px solid white',fontSize:'17px'}} />
          <TelegramIcon sx={{position:'relative',bottom:'30px',left:'275px'}} />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default Newsletter;