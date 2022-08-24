import React from "react";
import "./style.css";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// icons
import { RiAdminFill } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  boxShadow: "0px 0px 0px 0px",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Recent() {
  return (
    <Box>
      <Container>
        <Typography className="our_blog" variant="h6">
          OUR BLOG
        </Typography>
        <Typography className="recent_from_blog" variant="h4">
          RECENT FROM BLOG
        </Typography>
      </Container>
      <Box>
        <Box sx={{ flexGrow: 1, ml: "8%" }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="350"
                    image="https://preview.colorlib.com/theme/academia/images/ximage_1.jpg.pagespeed.ic.7R2Zr2FA0t.webp"
                  />
                  <CardContent>
                    <br/>
                    <Typography sx={{color: "#1eb2a6"}}>
                      <RiAdminFill />
                      ADMIN
                      <GoCalendar />
                      JAN. 18, 2021
                      <FaRegComment />3 comments
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="h5" component="div">
                      Build your Dream Software & Engineering Career
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="350"
                    image="https://preview.colorlib.com/theme/academia/images/ximage_2.jpg.pagespeed.ic.LFeFzbiNiA.webp"
                  />
                  <CardContent><br/>
                    <Typography sx={{color: "#1eb2a6"}}>
                      <RiAdminFill />
                      ADMIN
                      <GoCalendar />
                      JAN. 18, 2021
                      <FaRegComment />3 comments
                    </Typography><br/>
                    <Typography gutterBottom variant="h5" component="div">
                      Build your Dream Software & Engineering Career
                    </Typography><br/>
                    <Typography variant="body2" color="text.secondary">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="350"
                    image="https://preview.colorlib.com/theme/academia/images/ximage_3.jpg.pagespeed.ic.mPHHvHgH24.webp"
                  />
                  <CardContent><br/>
                    <Typography sx={{color: "#1eb2a6"}}>
                      <RiAdminFill />
                      ADMIN
                      <GoCalendar />
                      JAN. 18, 2021
                      <FaRegComment />3 comments
                    </Typography><br/>
                    <Typography gutterBottom variant="h5" component="div">
                      Build your Dream Software & Engineering Career
                    </Typography><br/>
                    <Typography variant="body2" color="text.secondary">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Recent;
