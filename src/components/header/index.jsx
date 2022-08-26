import * as React from "react";

import cake from '../header/cake.jpg';

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Typography } from "@mui/material";


import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const Header = () => {
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 40) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
  }, []);

  return (
    <Box>
    <Box sx={{ backgroundColor: "#0a0a0a", height: "230px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: "20px",
        }}
      >
        <Box sx={{ pl: "20px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item sx={{ display: "flex" }}>
                <FacebookIcon
                  fontSize="small"
                  sx={{
                    color: "white",
                    ":hover": { color: "#e5bf4a", cursor: "pointer" },
                  }}
                />
                <InstagramIcon
                  fontSize="small"
                  sx={{
                    color: "white",
                    pl: "17px",
                    ":hover": { color: "#e5bf4a", cursor: "pointer" },
                  }}
                />
                <TwitterIcon
                  fontSize="small"
                  sx={{
                    color: "white",
                    pl: "17px",
                    ":hover": { color: "#e5bf4a", cursor: "pointer" },
                  }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{pl:'80px'}}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>
                <CardMedia
                  component="img"
                  sx={{ width: 235,cursor:'pointer' }}
                  image="data:image/webp;base64,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"
                  alt="Live from space album cover"
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ pr: "20px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>
                <Button
                  size="large"
                  variant="outlined"
                  sx={{
                    width: "260px",
                    textTransform: "capitalize",
                    padding: "11px 20px",
                    fontSize: "17px",
                    color: "#e5bf4a",
                    borderColor: "#e5bf4a",
                    borderRadius: "0px",
                    ":hover": {
                      backgroundColor: "#e5bf4a",
                      color: "white",
                      borderColor: "#e5bf4a",
                    },
                  }}
                >
                  Call Us: +10 783 346 4378
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        position="fixed"
        sx={{
          backgroundColor: isScroll ? "#0a0a0a" : "transparent",
          transition: ".3s",
          transitionProperty: "all",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease",
          transitionDelay: "0s",
          paddingTop: "25px",
          paddingBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          top:isScroll ? '0px' :'auto'
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                color: "white",
                fontSize: "20px",
                mr:'20px',
                transition:'all .4s',
                "&:hover": {
                  fontSize: "20px",
                  color: "#e5bf4a",
                },
              }}
            >
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              color: "white",
              fontSize: "20px",
              mr:'20px',
              transition:'all .4s',
              "&:hover": {
                fontSize: "20px",
                color: "#e5bf4a",
              },
            }}
            >
              <ListItemText primary="CAKES" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              color: "white",
              fontSize: "20px",
              mr:'20px',
              transition:'all .4s',
              "&:hover": {
                fontSize: "20px",
                color: "#e5bf4a",
              },
            }}
            >
              <ListItemText primary="ABOUT" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              color: "white",
              fontSize: "20px",
              mr:'20px',
              transition:'all .4s',
              "&:hover": {
                fontSize: "20px",
                color: "#e5bf4a",
              },
            }}
            >
              <ListItemText primary="BLOG" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              color: "white",
              fontSize: "20px",
              mr:'20px',
              transition:'all .4s',
              "&:hover": {
                fontSize: "20px",
                color: "#e5bf4a",
              },
            }}
            >
              <ListItemText primary="CONTACT" />
            </ListItemButton>
          </ListItem>
        </Box>
      </Box>
    </Box>
    <Box sx={{ width: '100%',backgroundImage:`url(${cake})`,height:'700px',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat', }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item sx={{p:'200px 0px 0px 130px'}}>
          <Typography sx={{color:'white',fontSize:'70px',fontFamily:'cursive',textAlign:'left',lineHeight:1.2}}>Healthy Made </Typography>
          <Typography sx={{color:'white',fontSize:'70px',fontFamily:'cursive',textAlign:'left',lineHeight:1.2}}>Delicious Cake</Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{textAlign:'left',p:'50px 0px 0px 130px'}}>
          <Button
                  size="large"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#e5bf4a",
                    textTransform: "capitalize",
                    padding: "20px 40px",
                    fontSize: "16px",
                    color: "#2a2a2a",
                    borderColor: "#2a2a2a",
                    borderRadius: "0px",
                    ":hover": {
                      color: "#e5bf4a",
                      backgroundColor: "transparent",
                      borderColor: "#e5bf4a",
                    },
                  }}
                >
                  ORDER NOW
                </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Header;
