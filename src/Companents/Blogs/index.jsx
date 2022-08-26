import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{
            backgroundColor: "black"
        }}>
            <Container>
                <Box sx={{
                    backgroundColor: "black"
                }}>
                    <Grid item xs={6} >
                        <Item sx={{
                            boxShadow: "none",
                            background: "black"
                        }}>
                            <Grid container spacing={2} columns={16}>
                                <Grid item xs={8}>

                                    <Item sx={{
                                        boxShadow: "none",
                                        background: "black"
                                    }}>
                                        <Box>
                                            <Typography sx={{
                                                fontSize: "40px",
                                                color: "white",
                                                backgroundColor: "black",
                                                textAlign: "left"
                                            }}>Our Blogs</Typography>
                                        </Box>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item sx={{
                                        boxShadow: "none",
                                        background: "black"
                                    }}>
                                        <Box sx={{
                                            textAlign: "right",
                                            background: "black"
                                        }}>
                                            <Button sx={{

                                                bgcolor: "#E5BC39",
                                                color: "black",
                                                p: "15px 35px",
                                                borderRadius: "none",
                                                border: "1px solid #E5BC39",

                                                '&:hover': {
                                                    backgroundColor: 'black',
                                                    color: "#E5BC39"
                                                },
                                            }} disableElevation>
                                                MORE BLOG

                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>

                        </Item>
                    </Grid>

                </Box>
            </Container>
            
            <Box sx={{ width: '100%', mt: "60px" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                    <Grid item xs={3} >
                        <Item sx={{
                            boxShadow: "none",
                            background: "black",
                          
                            
                        }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: "100%", height: "60vh" }}
                                    image="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xblog1.jpg.pagespeed.ic.I8InqMtKRD.webp"
                                    alt="Live from space album cover"
                                />
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={3} >

                       <Item sx={{
                        background:"black",
                        border:"1px solid white"
                       }}>
                       <Box sx={{
                            textAlign: "left",
                            p: "4%"
                        }}>
                            <Typography sx={{
                                fontSize: "28px",
                                textAlign: "left",
                                color: "#E5BC39",

                            }}>Tomato, black olive, feta & anchovy tart ulla mco laboris</Typography>
                            <Typography sx={{
                                textAlign: "left",
                                color: "white",
                                pt: "10px"
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</Typography>
                            <Button sx={{

                                color: "#E5BC39",
                                pt: "25px"

                            }} disableElevation>
                                LEARN MORE
                                <br />
                                ______________
                            </Button>

                        </Box>
                       </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{
                            boxShadow: "none",
                            background: "black"
                        }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: "100%", height: "60vh" }}
                                    image="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xblog2.jpg.pagespeed.ic.kwTFqKjCrz.webp"
                                    alt="Live from space album cover"
                                />
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{
                            boxShadow: "none",
                            background: "black",
                            border:"1px solid white"
                        }}>
                            <Box sx={{
                                textAlign: "left",
                                p:"4%"
                            }}>
                                <Typography sx={{
                                    fontSize: "28px",
                                    textAlign: "left",
                                    color: "#E5BC39",

                                }}>Tomato, black olive, feta & anchovy tart ulla mco laboris</Typography>
                                <Typography sx={{
                                    textAlign: "left",
                                    color: "white",
                                    pt: "10px"
                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</Typography>
                                <Button sx={{

                                    color: "#E5BC39",
                                    pt: "25px"

                                }} disableElevation>
                                    LEARN MORE
                                    <br />
                                    ______________
                                </Button>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
