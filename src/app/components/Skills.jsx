import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SkillBox from "./miscellaneous/SkillBox";
import { iconsArr } from "./miscellaneous/icons";

const Skills = ({ lightMode }) => {
  return (
    <Box
      id="skills"
      w={{ base: "100vw", md: "100vw", lg: "100vw" }}
      minH={"40vh"}
      maxH={"200vh"}
      bgColor={lightMode ? "#f5f5f5" : "#2c2c2c"}
      fontFamily={"Rubik"}
      pl={["1.5rem", "3rem", "5rem"]}
      pr={["1.5rem", "3rem", "5rem"]}
      // pt={["1.5rem", "3rem", "5rem"]}
      userSelect={"none"}
      draggable={"false"}
      position={"relative"}
      overflow="hidden"
    >
      <Box
        pt={["0rem", "3rem", "2rem"]}
        w={"100%"}
        fontWeight={"700"}
        fontSize={"2.5rem"}
        color={lightMode ? "#000" : "#f1f1f1"}
        position={"relative"}
        _before={{
          content: `""`,
          position: "absolute",
          bottom: 0,
          left: [-4, -7, -10],
          height: "5%",
          width: "35%",
          bgColor: "#5580E9",
          borderRadius: "1rem",
        }}
      >
        <Text fontSize={"2.4rem"}>SKILLS</Text>
      </Box>

      <Box
        mt={"7rem"}
        mb={"2rem"}
        width="100%"
        overflow="hidden"
        position="relative"
      >
        <Box
          display="flex"
          alignItems="center"
          css={{
            animation: "marquee 8s linear infinite",
            "@media (max-width: 768px)": {
              animation: "marquee 4s linear infinite", // <-- faster on mobile
            },
            "@keyframes marquee": {
              "0%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[...iconsArr, ...iconsArr]?.map((icon, index) => (
            <SkillBox icon={icon} key={index} lightMode={lightMode} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
