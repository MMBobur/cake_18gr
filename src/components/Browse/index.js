import React from 'react'
import './style.css'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  hover: {
    "&:hover": {
      backgroundColor: '#1EB2A6',
    }
  }

}));

const Data = [
  {
    name: 'UI/UX Design Courses',
    courses: 25,
    image: 'https://media.istockphoto.com/vectors/analytics-monitor-icon-trendy-flat-vector-analytics-monitor-icon-on-vector-id1092269542',
    color: 'white'
  },
  {
    name: 'Art & Design',
    courses: 25,
    image: 'https://pic.onlinewebfonts.com/svg/img_198226.png',
    color: '#1EB2A6',
    textColor: 'white'
  },
  {
    name: 'Computer Science',
    courses: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSRGIK7Grsys5ntjGhN7VDA34lV_iEoNVMw&usqp=CAU',
    color: 'white'
  },
  {
    name: 'History & Archeologic',
    courses: 25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8xOPdz6KN8qPnfbW-dsYISjxunNfn5yb0v6gmEwjOyISkyx9xRymxnsi-23CsWuWs2s&usqp=CAU',
    color: 'white'
  },
  {
    name: 'Software Engineering',
    courses: 25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztQut5o7UEC_09t7cpmdJKtk74EGXJCqfa1BCb5WebZhKKwLDFQyJUwfdc__Vk2ltYKQ&usqp=CAU',
    color: 'white'
  },
  {
    name: 'Information',
    courses: 25,
    image: 'https://cdn-icons-png.flaticon.com/512/1875/1875103.png',
    color: 'white'
  },
  {
    name: 'Health & Fitness',
    courses: 25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdH04GteMbjTcAm2ELeJFy0DE22Lz1S_0RQ&usqp=CAU',
    color: 'white'
  },
  {
    name: 'Marketing',
    courses: 25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkh23m69eUbw2nThTMoiWHXeqiiqKWGkvSwTa7Huo5zZQG4Sb3VrSrvUIL90SUVw5TU5Y&usqp=CAU',
    color: 'white'
  },
  {
    name: 'Graphic Design',
    courses: 25,
    image: 'https://st2.depositphotos.com/6628792/9627/v/950/depositphotos_96276122-stock-illustration-graphics-design-icon.jpg',
    color: 'white'
  },
  {
    name: 'Music',
    courses: 25,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
    color: 'white'
  },
  {
    name: 'Business Administration',
    courses: 25,
    image: 'https://cdn-icons-png.flaticon.com/512/2370/2370266.png',
    color: 'white'
  },
  {
    name: 'Web Managment',
    courses: 25,
    image: 'https://cdn-icons-png.flaticon.com/512/2318/2318906.png',
    color: 'white'
  }
]

function Browse() {
  return (
    <Box sx={{ backgroundColor: '#F8F8F8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center', paddingBottom: '10%', fontFamily: 'Arial', width: '85%' }}>
        <div style={{ paddingTop: '5%', paddingBottom: '5%', marginTop: '3%', marginBottom: '3%' }}>
          <h4 style={{ color: '#1EB2A6', fontWeight: 'bold', fontSize: '20px' }}>COURSES</h4>
          <h1 style={{ fontSize: '50px', color: '#323232' }}>Browse Our Online Courses</h1>
        </div>
        <Grid container spacing={2} columnSpacing={0}>
          {Data.map((val, index) => {
            return (
              <Grid key={index} xs={10} sm={12} md={4} lg={2}>
                <Item style={{ width: '150px', height: '180px', backgroundColor: `${val.color}`, cursor: 'pointer', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)', padding: '50px' }}>
                  <div>
                    <img src={val.image} alt="" style={{ color: 'blue', width: '70px', height: '70px' }} />
                  </div>
                  <div>
                    <h3 style={{ color: `${val.textColor}` }}>
                      {val.name}
                    </h3>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h5 style={{ backgroundColor: '#F8F8F8', padding: '5px ', color: '#1EB2A6', borderRadius: '2px' }}>
                      {val.courses} courcess
                    </h5>
                  </div>
                </Item>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>

  )
}

export default Browse