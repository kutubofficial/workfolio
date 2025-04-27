import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BranchIcon, BugIcon, FolderIcon, NodeIcon } from "./utils/randomIcons";

const About = ({ lightMode }) => {
  return (
    <Box
      w={{ base: "100vw", md: "100vw", lg: "100vw" }}
      h={{ base: "100vh", md: "100vh", lg: "100vh" }}
      bgGradient={
        lightMode
          ? "linear-gradient(to top left,#f2f3f2 50%, #f5f5f5 50%)"
          : "linear-gradient(188deg, rgba(44,44,44,1) 10%, rgba(44,44,44,1) 130%)"
      }
      fontFamily={"Rubik"}
      userSelect={"none"}
      draggable={"false"}
      position={"relative"}
      id="about"
    >
      <HStack
        w={"100%"}
        display={"flex"}
        alignItems={"flex-start"}
        flexWrap={["wrap", "wrap", "nowrap"]}
        justifyContent={"center"}
        paddingTop={{ base: "16rem", md: 0, lg: 0 }}
        pl={["1rem", 0, 0]}
        pr={["1rem", 0, 0]}
      >
        {/* Left */}
        <Box
          mt={["-14rem", 0, 0]}
          w={["90%", "90%", "50%"]}
          h={"100vh"}
          display={{ base: "none", md: "flex", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={lightMode ? "/images/about_bg.png" : "/images/about_dark.png"}
            width={460}
            height={410}
            alt="About image"
          />
        </Box>
        {/* Right */}
        <Box
          w={["100%", "80%", "50%"]}
          h={"100%"}
          pt={"3.5rem"}
          mt={["-15rem", 0, 0]}
        >
          <Box w={"100%"} h={"100%"} color={lightMode ? "#000" : "#f5f5f5"}>
            <Text fontWeight={"700"} fontSize={"2.5rem"}>
              LET ME
            </Text>
            <Text fontWeight={"700"} fontSize={"2.5rem"}>
              INTRODUCE MYSELF
            </Text>
            {/* <Text fontWeight={'700'} fontSize={'2.5rem'}>INTRO</Text> */}
          </Box>
          <Box
            mt={"1.2rem"}
            w={["100%", "100%", "75%"]}
            fontFamily={"Roboto"}
            color={lightMode ? "#777" : "#ccc"}
          >
            <Text lineHeight={"26px"}>
              Hi, I&apos;m Kutubuddin Ansari, a passionate MERN stack developer
              with a strong foundation in JavaScript, React.js, and backend
              development. I love building web applications that are efficient,
              scalable, and user-friendly. With expertise in C, C++, HTML5,
              CSS3, Bootstrap, and Tailwind CSS, I continuously explore new
              technologies and improve my problem-solving skills.
            </Text>
            <Text mt={"1.2rem"} lineHeight={"26px"}>
              Currently, I'm enhancing my backend skills with Node.js and
              MongoDB while working on real-world projects. I enjoy
              collaborating on innovative ideas and contributing to open-source
              projects.
            </Text>
          </Box>
          <Box
            mt={["1.5rem", "2rem", "2.5rem"]}
            w={["100%", "100%", "75%"]}
            fontFamily={"Rubik"}
            pb={["1rem", 0, 0]}
          >
            <a href="/Resume.pdf" download="Kutubuddin_Ansari.pdf">
              <Button
                px={"3rem"}
                w={["100%", "auto", "auto"]}
                py={"1.5rem"}
                bgColor={"#5580E9"}
                color={"#f5f5f5"}
                variant={"solid"}
                border={"2px solid #5580E9"}
                boxShadow={
                  lightMode ? "2px 2px 7px #749bfc" : "1px 1px 3px #749bfc"
                }
                transition={"0.2s all"}
                _hover={{
                  border: "2px solid #5580E9",
                  bgColor: "#f5f5f5",
                  color: "#515151",
                  boxShadow: "none",
                }}
              >
                GET CV
              </Button>
            </a>
          </Box>
        </Box>
      </HStack>
      {/* Background Icons */}
      <Box display={["none", "none", "block"]}>
        <FolderIcon top={50} right={300} />
        <BranchIcon top={150} left={600} />
        <NodeIcon right={150} bottom={130} />
        <BugIcon bottom={5} left={450} />
      </Box>
      {/* Background Icons */}
    </Box>
  );
};

export default About;
