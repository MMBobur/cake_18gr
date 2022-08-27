import React from 'react';
import './style.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndexFollow = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#000',
            }}
        >
            <Box sx={{ p: '5%' }}>
                <Typography
                    sx={{
                        mt: '2%',
                        color: '#C3C3C3',
                        fontSize: '300%',
                        fontFamily: 'Calibri',
                        fontWeight: 100,
                        textAlign: 'center',
                    }}
                >
                    Follow us on Instagram
                </Typography>
                <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant="outlined" startIcon={<InstagramIcon />}
                        sx={{
                            mt: '2.5%',
                            borderColor: '#E5BF4A',
                            color: '#E5BF4A',
                            borderRadius: '0px',
                            width: '12.5%',
                            height: '8vh',
                            textTransform: 'capitalize',
                            '&:hover': {
                                borderColor: '#E5BF4A',
                                color: '#E5BF4A',
                                backgroundColor: '#000',
                            }
                        }}
                    >
                        Cakeshop
                    </Button>
                </Stack>
                <Container>
                    <Box sx={{ flexGrow: 1, mt: '5%' }}>
                        <Grid container spacing={2} columns={12}>
                            <Grid item xs={12} sm={3}>
                                <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                                    <img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra1.jpg.pagespeed.ic.Oprq8U7fLo.webp'
                                        style={{
                                            width: '267.5px',
                                        }}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                                    <img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra2.jpg.pagespeed.ic.PYyDEdzkD9.webp'
                                        style={{
                                            width: '267.5px'
                                        }}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                                    <img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra3.jpg.pagespeed.ic.OAmXJmHyZ9.webp'
                                        style={{
                                            width: '267.5px'
                                        }}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                                    <img src='https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra4.jpg.pagespeed.ic.0TvhEUconE.webp'
                                        style={{
                                            width: '267.5px'
                                        }}
                                    />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default IndexFollow;