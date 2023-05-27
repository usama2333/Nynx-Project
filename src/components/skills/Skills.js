import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data, responsive } from "./style";
import SkillsCard from "./SkillsCard";




const Skills = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          background: "#FFE3C5",
          //  height : '699px',
        }}
      >
        <Box
          sx={{
            pt: "70px",
            // ml: { xs: "20px", sm: "50px" },
            pb: "70px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
              lineHeight: "100%",
              color: "#422438",
              ml: { xs: "20px", sm: "30px" },
            }}
          >
            Get inspired with skillsets made by our
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xs: "30px", md: "35px", lg: "45px", xl: "45px" },
              lineHeight: "100%",
              color: "#422438",
              ml: { xs: "20px", sm: "30px" },
            }}
          >
            Experts
          </Typography>


          <Box sx={{
          mt: "40px",
            // ml: {  xs: "50px" , sm : '60px' },
        }}>
          <Carousel responsive={responsive} ssr={true} showDots={true} autoPlay={true} autoPlaySpeed={2000}>
            {data.map((data)=> (
              <SkillsCard 
              name={data.name} 
              img={data.img} 
              logo={data.logo} 
              sur={data.sur} 
              text1={data.text1}
              text2={data.text2}
              reviews={data.reviews}
              fixed = {data.fixed}
              fixedPrice = {data.fixedPrice}
              monthly={data.monthly}
              monthlyPrice={data.monthlyPrice}
              />
            ))}
          </Carousel>
        </Box>

          {/* <Stack
            direction="row"
            flexWrap="wrap"
            // spacing={2}
            justifyContent='space-evenly'
            alignItems='center'
            sx={{ mt: "40px" }}
          >
            {data.map((data) => (
              <Box
                sx={{
                  width: "290px",
                  height: "390px",
                  border: "1px solid rgba(66, 36, 56, 0.15)",
                  borderRadius: "10px",
                  background: "#FFFFFF",
                  mb: "40px",
                }}
              >
                <Box component="img" src={data.img}></Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mt: "16px",
                  }}
                >
                  <Box
                    component="img"
                    src={data.logo}
                    sx={{
                      height: "36px",
                      width: "36px",
                      ml: "20px",
                      mr: "3px",
                    }}
                  ></Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "136%",
                        color: "#422438",
                      }}
                    >
                      {data.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "130%",
                        color: "#422438",
                        opacity: 0.5,
                      }}
                    >
                      {data.sur}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#422438",
                    ml: "20px",
                    mt: "10px",
                  }}
                >
                  {data.text1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#422438",
                    ml: "20px",
                  }}
                >
                  {data.text2}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "130%",
                    color: "#422438",
                    ml: "20px",
                    opacity: 0.5,
                    mt: "6px",
                    mb: "12px",
                  }}
                >
                  {data.reviews}
                </Typography>

                <Box
                  sx={{
                    border: "1px solid #E3D6D1",
                    width: "100%",
                  }}
                ></Box>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    mt: "20px",
                    pl: "10px",
                    pr: "10px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.fixed}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.fixedPrice}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.monthly}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "122%",
                        color: "#000000",
                        opacity: 0.8,
                      }}
                    >
                      {data.monthlyPrice}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack> */}

        </Box>
      </Container>
    </Fragment>
  );
};

export default Skills;
