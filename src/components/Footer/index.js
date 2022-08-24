import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import { FaFacebookF } from "react-icons/fa";
import Instagram from "@mui/icons-material/Instagram";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        pt: "7%",
      }}
    >
      <Box sx={{ width: "85%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={2.4} md={3} sm={6} xs={10}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#222",
                    fontWeight: "bold",
                  }}
                >
                  ACADEMIA
                </Typography>
                <Typography
                  sx={{
                    mt: "-1%",
                    color: "#1eb2a6",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  ONLINE EDUCATION & LEARNING
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: "4%" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "gray",
                    fontWeight: 500,
                    width: "76%",
                    lineHeight: 1.8,
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                <Grid
                  sx={{ mt: "2%" }}
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={2.4} sm={1.8} md={3} lg={3}>
                    <Twitter
                      sx={{
                        color: "white",
                        border: "1px solid rgba(256, 256, 256, .3)",
                        borderRadius: "60px",
                        padding: "11px",
                        backgroundColor: "#1eb2a6",
                        ":hover": {
                          backgroundColor: "#fdbe33",
                          color: "#030f27",
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={2.4} sm={1.8} md={3} lg={3}>
                    <FaFacebookF
                      className="linkedin"
                      style={{
                        color: "white",
                        fontSize: "24px",
                        border: "1px solid rgba(256, 256, 256, .3)",
                        borderRadius: "60px",
                        padding: "11px",
                        backgroundColor: "#1eb2a6",
                        cursor: "pointer",
                        // ":hover": { backgroundColor: "#fdbe33",color:'#030f27',cursor:'pointer' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={2.4} sm={1.8} md={3} lg={3}>
                    <Instagram
                      sx={{
                        color: "white",
                        border: "1px solid rgba(256, 256, 256, .3)",
                        borderRadius: "60px",
                        padding: "11px",
                        backgroundColor: "#1eb2a6",
                        ":hover": {
                          backgroundColor: "#fdbe33",
                          color: "#030f27",
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2.4} md={3} sm={6} xs={10}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                  }}
                >
                  Explore
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: "4%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  About Us
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Services
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Courses
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Blog
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Contact us
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2.4} md={3} sm={6} xs={12}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                  }}
                >
                  Quick Links
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: "4%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Pricing
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Terms & Conditions
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Privacy
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#777",
                    display: "flex",
                    alignItems: "center",
                    ml: "-2%",
                    "&:hover": {
                      color: "#1eb2a6",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ArrowForwardIcon
                    sx={{ color: "#1eb2a6", fontSize: "14px", pr: "5px" }}
                  />
                  Feedbacks
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2.4} md={3} sm={6} xs={12}>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                  }}
                >
                  Recent Posts
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ mt: "6%" }}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={5}>
                      <img
                        src="https://preview.colorlib.com/theme/academia/images/ximage_1.jpg.pagespeed.ic.7R2Zr2FA0t.webp"
                        style={{
                          width: "55px",
                          height: "55px",
                          backgroundSize: "100%",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "4px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#1eb2a6",
                          width: "115px",
                        }}
                      >
                        Jan. 18, 2021 Admin
                      </Typography>
                      <Typography
                        sx={{ fontSize: "16px", color: "#777", width: "115px" }}
                      >
                        Creativity and Inspiration
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ mt: "7%" }}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={5}>
                      <img
                        src="https://preview.colorlib.com/theme/academia/images/ximage_2.jpg.pagespeed.ic.LFeFzbiNiA.webp"
                        style={{
                          width: "55px",
                          height: "55px",
                          backgroundSize: "100%",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "4px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#1eb2a6",
                          width: "115px",
                        }}
                      >
                        Jan. 18, 2021 Admin
                      </Typography>
                      <Typography
                        sx={{ fontSize: "16px", color: "#777", width: "115px" }}
                      >
                        Creativity and Inspiration
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ mt: "7%" }}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={5}>
                      <img
                        src="https://preview.colorlib.com/theme/academia/images/ximage_4.jpg.pagespeed.ic.maJrh0w-s2.webp"
                        style={{
                          width: "55px",
                          height: "55px",
                          backgroundSize: "100%",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "4px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#1eb2a6",
                          width: "115px",
                        }}
                      >
                        Jan. 18, 2021 Admin
                      </Typography>
                      <Typography
                        sx={{ fontSize: "16px", color: "#777", width: "115px" }}
                      >
                        Creativity and Inspiration
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2.4} md={3} sm={6} xs={12}>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                  }}
                >
                  Have a Questions?
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ mt: "6%" }}>
                <Box sx={{ width: "100%" }}>
                  <Grid container rowSpacing={1}>
                    <Grid item xs={6}>
                      <FaMap
                        style={{
                          color: "#1eb2a6",
                          fontSize: "19px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#777",
                          width: "115px",
                          width: "220px",
                        }}
                      >
                        {" "}
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ mt: "7%" }}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <FaPhoneAlt
                        style={{
                          color: "#1eb2a6",
                          fontSize: "19px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#777",
                          width: "115px",
                          width: "220px",
                        }}
                      >
                        {" "}
                        +2 392 3929 210
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ mt: "15%" }}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <FaTelegramPlane
                        style={{
                          color: "#1eb2a6",
                          fontSize: "20px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#777",
                          width: "115px",
                          width: "220px",
                        }}
                      >
                        {" "}
                        info@yourdomain.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1} columns={12} sx={{ mt: "4%" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: "4%" }}>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#777", pb: "4%" }}
            >
              Copyright ©2022 All rights reserved | This template is made with
              🖤 by Colorlib
            </Typography>
          </Grid>
        </Grid>
        </Box>
    </Box>
  );
}

export default Footer;
