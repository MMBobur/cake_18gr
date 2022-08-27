import React from 'react'
import './style.css'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Lake from './Lake.webp'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    textIndent: '50px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
}));

const Item1 = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    textIndent: '50px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
    color: 'white',
}));

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', marginTop: '30px' }}>
            <Box sx={{ textAlign: 'center', paddingBottom: '10%', fontFamily: 'Arial', width: '69%' }}>
                <div style={{ borderBottom: '1px solid gray', marginBottom: '50px' }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={12} md={12} lg={4}>
                            <Item><img src={Lake} alt="" /></Item>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={8}>
                            <Item1>
                                <h3 className='H3'>HOME</h3>
                                <h3 className='H3'>CAKES</h3>
                                <h3 className='H3'>ABOUT</h3>
                                <h3 className='H3'>BLOG</h3>
                                <h3 className='H3'>CONTACT</h3>
                            </Item1>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ borderBottom: '1px solid gray', paddingBottom: '50px', marginBottom: '-100px' }}>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <Item>
                                <div>
                                    <h4 style={{ textAlign: 'start', fontWeight: 'bold' }}>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                                </div>
                                <button className='Button'><InstagramIcon className="Icon" /> Instagram</button>
                                <button className='Button'><FacebookIcon className="Icon" /> Facebook</button>
                                <button className='Button'><TwitterIcon className="Icon" /> Twitter</button>
                            </Item>
                        </Grid>
                        <Grid xs={3}>
                            <Item>
                                <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/icon/location.svg" alt="" />
                                <div style={{ textAlign: 'start' }}>
                                    <h2 style={{ color: '#e5bf4a' }}>Location</h2>
                                </div>
                                <div style={{ textAlign: 'start' }}>
                                    <h3>4736 Poe Lane, HOT</h3>
                                    <h3>SPRINGS, Montana-59845</h3>
                                </div>
                            </Item>
                        </Grid>
                        <Grid xs={3}>
                            <Item>
                                <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/icon/location.svg" alt="" />
                                <div style={{ textAlign: 'start' }}>
                                    <h2 style={{ color: '#e5bf4a' }}>Contact</h2>
                                </div>
                                <div style={{ textAlign: 'start' }}>
                                    <h3>913-473-7000</h3>
                                    <h3>contact@cakeshop.com</h3>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </Box>
    )
}

export default Footer