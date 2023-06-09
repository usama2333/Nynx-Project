import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import leftArrow from "../../assests/images/leftArrow.png";
import rightArrow from "../../assests/images/rightArrow.png";

import vectorArrow from "../../assests/images/vectorArrow.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Caro from "../caro/Caro";
import { data, responsive } from "./style";



const Categories = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          background: "#E5E5E5",
          pt: { xs: "60px", sm: "70px", md: "100px" },
          pb: { sm: "70px", xs: "30px" },
        }}
      >
        <Stack
          direction={{ sm: "row", xs: "column" }}
          alignItems="center"
          sx={{ ml: "60px" }}
          //   justifyContent="space-around"
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xl: "45px", lg: "42px", md: "38px", sm: "36px" },
              lineHeight: "100%",
              /* identical to box height */
              textTransform: "capitalize",
              color: "#422438",
              width: { md: "900px", sm: "700px", xs: "auto" },
            }}
          >
            Fast Track Your Workspace With Our popular Categories
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box component="img" src={leftArrow}></Box>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                /* identical to box height */
                textTransform: "uppercase",
                textAlign: "center",
                letterSpacing: "0.14rem",
                color: "#D9CCC8",
                ml: "10px",
                mr: "10px",
              }}
            >
              Drag
            </Typography>

            <Box component="img" src={rightArrow}></Box>
          </Box>
        </Stack>

        {/* <Stack
          sx={{
            mt: "40px",
            ml: {  xs: "50px" , sm : '60px' },
          }}
          direction="row"
          justifyContent='space-around'
          alignItems = 'center'
          // spacing={{ xl: 1, lg: 3, md: 1 }}
          flexWrap="wrap"
        >

        {data.map((data) => (
      
          <Box
            sx={{
              background: "#FFF6EC",
              border: "1px solid rgba(66, 36, 56, 0.15)",
              borderRadius: "10px",
              mb: { xs: "20px", md : '20px', lg : '0px' },
              // height : '343px',
              // width : '292px'
            }}
          >
            <Box
              component="img"
              src={data.img}
              sx={{
                borderRadius: "10px",
                mb: "30px",
                height: {xs : '180px'  , sm : '200px'},
                width: {xs : '230px' , sm : '250px'},
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                ml: "20px",
                mb: "50px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: {xs :'16px' , sm : '18px' , md : '20px'},
                  lineHeight: "100%",
                  color: "#422438",
                }}
              >
                {data.name}
              </Typography>
              <Box
                component="img"
                src={vectorArrow}
                sx={{
                  height: "10px",
                  width: "5px",
                  ml: "30px",
                }}
              ></Box>
            </Box>
          </Box>
                
        ))}

        </Stack> */}

        <Box sx={{
          mt: "40px",
            // ml: {  xs: "50px" , sm : '60px' },
        }}>
          <Carousel responsive={responsive} ssr={true}  autoPlay={true} autoPlaySpeed={2000}>
            {data.map((data)=> (
              <Caro name={data.name} img={data.img}/>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Categories;
