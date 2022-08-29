import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default () => {
    return (
        <Box sx={{
            p: "8%",
            backgroundColor: "#0A0A0A"
        }}>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Item sx={{
                            background: "none",
                            boxShadow: "none",
                            mb:"1%"
                        }}>
                            <Typography sx={{
                                color: "white",
                                fontFamily: "Poiret One",
                                lineHeight: 1.3,
                                fontSize: "40px",
                            }}>
                                This is Schilers. Awesome Food <br /> Theme. Purchase it and eat <br /> Burgers.
                            </Typography>
                            <Typography sx={{
                                color: "#E5BF4A",
                                fontSize: "25px",
                                fontWeight: "bold"
                            }}>
                                _________
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item sx={{
                            background:"none",
                            boxShadow:"none",
                            textAlign:"left",
                        }}>
                            <Box sx={{
                                width:"90%",
                                ml:"16%"
                            }}>
                                <Typography sx={{
                                    color:"#E5BF4A",
                                    fontSize:"23px",
                                    mb:"28px",
                                    fontFamily:"Jost"
                                }}>
                                    This is Schilers. Awesome Food Theme. <br />
                                    Purchase it and eat Burgers.
                                </Typography>
                                <Typography sx={{
                                    color:"#fff",
                                    fontSize:"15px",
                                    lineHeight:1.5,
                                    fontFamily:"Jost"
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br /> dolor in reprehen derit in voluptate velit esse cillum.
                                </Typography>
                                <Typography sx={{
                                    color:"#fff",
                                    fontSize:"15px",
                                    lineHeight:1.5,
                                    mt:"3%",
                                    fontFamily:"Jost"
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br /> dolor in reprehen derit in voluptate velit esse cillum.
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item sx={{
                            background:"none",
                            boxShadow:"none"
                        }}>
                            <CardMedia
                                component="img"
                                sx={{ width: "100%" }}
                                image="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xabout1.jpg.pagespeed.ic.Q8jbhT8BVC.webp"
                                alt="Live from space album cover"
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
