import React from 'react'
import './style.css';

import Girl from '../Header/assets/girl.jpg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Stack from '@mui/material/Stack';

function Header() {
  return (
    <Box
      sx={{
        height: '150vh',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Girl})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '100vh',
          backgroundColor: 'primary.dark',
          // position: 'fixed',
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Box>
              <Typography
                sx={{
                  width: '20%',
                  fontSize: '225%',
                  color: '#fff',
                  fontWeight: 700,
                  "&:hover": {
                    color: '#1EB2A6'
                  },
                }}
              >
                ACADEMIA
              </Typography>
              <Typography
                sx={{
                  color: '#fff',
                }}
              >
                ONLINE EDUCATION & LEARNING
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                ml: '12%'
              }}
            >
              <AccessTimeIcon sx={{ color: '#fff', fontSize: '400%', mt: '5%' }} />
              <Box sx={{ color: '#fff', mt: '12%' }}>
                <Typography>
                  Monday - Friday
                </Typography>
                <Typography>
                  8:00AM-8:00PM
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                ml: '5%'
              }}
            >
              <LocalPhoneOutlinedIcon sx={{ color: '#fff', fontSize: '400%', mt: '5%' }} />
              <Box sx={{ color: '#fff', mt: '12%' }}>
                <Typography>
                  Call Us
                </Typography>
                <Typography>
                  +2 392 3929 210
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                color: '#1EB2A6',
                ml: '5%',
              }}
            >
              <Button
                sx={{
                  mt: '2%',
                  borderRadius: '100px',
                  backgroundColor: '#CCE4F7',
                  height: '75%',
                  "&:hover": {
                    backgroundColor: '#1EB2A6',
                    color: '#fff'
                  },
                }}
              >
                <FaFacebookF />
              </Button>
              <Button
                sx={{
                  mt: '2%',
                  borderRadius: '100px',
                  backgroundColor: '#CCE4F7',
                  height: '75%',
                  "&:hover": {
                    backgroundColor: '#1EB2A6',
                    color: '#fff'
                  },
                }}
              >
                <BsTwitter />
              </Button>
              <Button
                sx={{
                  mt: '2%',
                  borderRadius: '100px',
                  backgroundColor: '#CCE4F7',
                  height: '75%',
                  "&:hover": {
                    backgroundColor: '#1EB2A6',
                    color: '#fff'
                  },
                }}>
                <BsInstagram />
              </Button>
              <Button
                sx={{
                  mt: '2%',
                  borderRadius: '100px',
                  backgroundColor: '#CCE4F7',
                  height: '75%',
                  "&:hover": {
                    backgroundColor: '#1EB2A6',
                    color: '#fff'
                  },
                }}>
                <MdLanguage />
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              mt: '3%',
              backgroundColor: 'rgb(173,206,211, 0.6)',
              width: '95%',
              height: '15vh',
            }}
          >
            <Box sx={{ mt: '2.5%' }}>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  ml: '2%',
                  fontSize: '115%',
                  "&:hover": {
                    color: '#1EB2A6',
                  },
                }}
              >
                Home
              </Link>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  ml: '3.5%',
                  fontSize: '115%',
                  "&:hover": {
                    color: '#1EB2A6',
                  },
                }}
              >
                All Courses
              </Link>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  ml: '3.5%',
                  fontSize: '115%',
                  "&:hover": {
                    color: '#1EB2A6',
                  },
                }}
              >
                About
              </Link>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  ml: '3.5%',
                  fontSize: '115%',
                  "&:hover": {
                    color: '#1EB2A6',
                  },
                }}
              >
                Team
              </Link>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  ml: '3.5%',
                  fontSize: '115%',
                  "&:hover": {
                    color: '#1EB2A6',
                  },
                }}
              >
                Pricing</Link>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  ml: '3.5%',
                  fontSize: '115%',
                  "&:hover": {
                    color: '#1EB2A6',
                  },
                }}
              >
                Journal
              </Link>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  ml: '3.5%',
                  fontSize: '115%',
                  "&:hover": {
                    color: '#1EB2A6',
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Box>
        </Box>
        <Container>
          <Box>
            <Typography
              sx={{
                color: '#E3EEF0',
                mt: '5%',
              }}
            >
              WELCOME TO ACADEMIA
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '250%',
                fontWeight: 700,
              }}
            >
              Best Online Education
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '250%',
                fontWeight: 700,
                mt: '-1%',
              }}
            >
              Expertise
            </Typography>
            <Typography
              sx={{
                color: '#E3EEF0',
                mt: '2%'
              }}
            >
              Far far away, behind the word mountains, far from the countries
            </Typography>
            <Typography
              sx={{
                color: '#E3EEF0',
              }}
            >
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
            <Box sx={{ mt: '3%' }}>
              <Stack direction="row" spacing={0.5}>
                <Button variant="outlined" endIcon={<ArrowRightAltIcon />}
                  sx={{
                    backgroundColor: '#1EB2A6',
                    color: '#fff',
                    borderColor: '#1EB2A6',
                    height: '8vh',
                    '&:hover': {
                      backgroundColor: '#1EB2A6',
                      color: '#fff',
                      borderColor: '#1EB2A6',
                    }
                  }}
                >
                  GET STARTED NOW!
                </Button>
                <Button variant="contained" endIcon={<ArrowRightAltIcon />}
                  sx={{
                    backgroundColor: '#fff',
                    color: '#1EB2A6',
                    borderColor: '#fff',
                    height: '8vh',
                    '&:hover': {
                      backgroundColor: '#fff',
                      color: '#1EB2A6',
                      borderColor: '#fff',
                    }
                  }}>
                  VIEW COURSE
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box >
  )
}

export default Header