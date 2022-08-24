import * as React from "react";

import CountUp from "react-countup";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import photo from "../Progress/progress.jpg";

import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { MdOutlineLocalLibrary } from "react-icons/md";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function Progress() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${photo})`,
        width: "100%",
        height: "300px",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <Box sx={{ width: "85%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 0, sm: 0, lg: 0 }}
                >
                  <Grid item xs={6} sx={{}}>
                    <FaUserGraduate
                      style={{
                        fontSize: "60px",
                        color: "white",
                        fontWeight: "normal",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "40px",
                        fontWeight: 700,
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      <CountUp start={1500} end={3000} duration={2} />
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.8,
                        textAlign: "left",
                        width: "160px",
                      }}
                    >
                      SUCCESS STORIES
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 0, sm: 0, lg: 0 }}
                >
                  <Grid item xs={6} sx={{}}>
                    <MdOutlineEngineering
                      style={{
                        fontSize: "65px",
                        color: "white",
                        fontWeight: "normal",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "40px",
                        fontWeight: 700,
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      <CountUp start={100} end={320} duration={2} />
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.8,
                        textAlign: "left",
                        width: "160px",
                      }}
                    >
                      TRUSTED TUTORS
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 0, sm: 0, lg: 0 }}
                >
                  <Grid item xs={6} sx={{}}>
                    <GoCalendar
                      style={{
                        fontSize: "60px",
                        color: "white",
                        fontWeight: "normal",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "40px",
                        fontWeight: 700,
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      <CountUp start={500} end={1000} duration={2} />
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.8,
                        textAlign: "left",
                        width: "160px",
                      }}
                    >
                      SCHEDULES
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 0, sm: 0, lg: 0 }}
                >
                  <Grid item xs={6} sx={{}}>
                    <MdOutlineLocalLibrary
                      style={{
                        fontSize: "60px",
                        color: "white",
                        fontWeight: "normal",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "40px",
                        fontWeight: 700,
                        lineHeight: 1,
                        textAlign: "left",
                      }}
                    >
                      <CountUp start={300} end={587} duration={2} />
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.8,
                        textAlign: "left",
                        width: "160px",
                      }}
                    >
                      COURSES
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Progress;
