import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Container } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgrondColor:"white"
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{
      backgroundColor:"#F4F4F4"
    }}>
      <Container>
        <Box>
          <Grid item xs={12}>
            <Item sx={{
              boxShadow: "none",
              background: "none",
              
            }}>
              <Box>
                <Typography sx={{
                  color: "#1DACA0"
                }}><b>OUR PRICING</b></Typography>
                <Typography sx={{
                  fontSize: "40px"
                }}><b>Pricing & Packages</b></Typography>
              </Box>
            </Item>
          </Grid>
          <Box sx={{ width: '100%' }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={3}>
                <Item sx={{
                  p: "18%",
                  boxShadow: "none",
                  backgroundColor: "white"
                }}>

                  <Box>
                    <Typography>
                      <b>BASIC PLAN</b>
                    </Typography>

                    <Typography sx={{
                      fontSize: "50px",
                      pt: "20px",
                      color: "#1DACA0"
                    }}>
                      <AttachMoneyIcon sx={{
                        fontSize: "40px",
                        mb: '10px',
                        color: "black"

                      }} /> <b> 49K</b>
                    </Typography>
                    <Typography sx={{

                      pt: "30px"
                    }}>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Button variant="outlined" sx={{
                      mt: "40px",
                      color: "#1DACA0",
                      p:'7% 20%',
                      '&:hover': {
                        backgroundColor: '#1DACA0',
                        color:"white"
                      },
                    }} disableElevation>
                       GET STARTED
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{
                  p: "18%",
                  boxShadow: "none",
                  backgroundColor: "white"
                }}>

                  <Box>
                    <Typography>
                      <b>BEGINNER PLAN</b>
                    </Typography>

                    <Typography sx={{
                      fontSize: "50px",
                      pt: "20px",
                      color: "#1DACA0"
                    }}>
                      <AttachMoneyIcon sx={{
                        fontSize: "40px",
                        mb: '10px',
                        color: "black"

                      }} />  <b>79K</b>
                    </Typography>
                    <Typography sx={{

                      pt: "30px"
                    }}>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Button variant="outlined" sx={{
                      mt: "40px",
                      color: "#1DACA0",
                      p:'7% 20%',
                      '&:hover': {
                        backgroundColor: '#1DACA0',
                        color:"white"
                      }
                    }} disableElevation>
                       GET STARTED
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{
                  p: "18%",
                  boxShadow: "none",
                  backgroundColor: "white"
                }}>
                  <Box>
                    <Typography>
                      <b>PREMIUM PLAN
                      </b>
                    </Typography>
                    <Typography sx={{
                      fontSize: "50px",
                      pt: "20px",
                      color: "#1DACA0"
                    }}>
                      <AttachMoneyIcon sx={{
                        fontSize: "40px",
                        mb: '10px',
                        color: "black"

                      }} /> <b>109K</b>
                    </Typography>
                    <Typography sx={{

                      pt: "30px"
                    }}>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Button variant="outlined" sx={{
                      mt: "40px",
                      color: "#1DACA0",
                      p:'7% 20%',
                      '&:hover': {
                        backgroundColor: '#1DACA0',
                        color:"white"
                      }
                    }} disableElevation>
                      GET STARTED
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item sx={{
                  p: "18%",
                  boxShadow: "none",
                  backgroundColor: "white"
                }}>

                  <Box>
                    <Typography>
                      <b>ULTIMATE PLAN</b>
                    </Typography>

                    <Typography sx={{
                      fontSize: "50px",
                      pt: "20px",
                      color: "#1DACA0"
                    }}>
                      <AttachMoneyIcon sx={{
                        fontSize: "40px",
                        mb: '10px',
                        color: "black"

                      }} />  <b>149K</b>
                    </Typography>
                    <Typography sx={{

                      pt: "30px"
                    }}>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Button variant="outlined" sx={{
                      mt: "40px",
                      color: "#1DACA0",
                      p:'7% 20%',
                      
                      '&:hover': {
                        backgroundColor: '#1DACA0',
                        color:"white"
                      }
                    }} disableElevation>
                       GET STARTED
                    </Button>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
