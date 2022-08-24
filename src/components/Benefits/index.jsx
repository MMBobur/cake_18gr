import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import R1 from './r1.webp'
import { Typography } from '@mui/material';
import { datas } from './data';
import Container from '@mui/material/Container';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),

  textAlign: 'left',
  ":hover": {
    backgroundColor: "#5DC7BF",
    color: "white"
  },
  boxShadow: "none"
}));
export default () => {
  const [data, setData] = useState(datas)
  return (
    <Box sx={{
      backgroundColor:"#F8F8F8"
    }}>
      <Container >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "120vh" }}
              image={R1}
              alt="Live from space album cover"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{
              color: "#5DC7BF",
              fontWeight: "bold"
            }}>
              LEARN ANYTHING
            </Typography>
            <Typography variant='h3' sx={{
              fontWeight: "bold",
              color: "black",
              mt: "1%"
            }}>
              Benefits About Online <br /> Learning Expertise
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: "5%" }}>
              {data.map((val, index) => {
                return (
                  <Grid item xs={12}>
                    <Item sx={{
                      p: "4% 4%"
                    }}>
                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2}>
                          {val.icon}
                        </Grid>
                        <Grid item xs={10}>
                          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                            {val.name}
                          </Typography>
                          <Typography sx={{ mt: "3%" }}>
                            {val.title}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Item>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

