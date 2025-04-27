"use client";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";
import data from "../workfolio/allCards";

const TabsComponent = ({ lightMode }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box mt={"2rem"} w={"100%"}>
      <Tabs
        variant={"solid-rounded"}
        colorScheme={"white"}
        onChange={(e) => {
          setSelectedTab(e);
        }}
        display={"flex"}
        flexDir={"column"}
        flexWrap={"wrap"}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        isLazy={true}
      >
        <TabList
          w={"100%"}
          gap={"2rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ base: "space-around", md: "center", lg: "center" }}
          flexWrap={"wrap"}
        ></TabList>
        <TabPanels mt={"2rem"}>
          <TabPanel
            display={"flex"}
            justifyContent={{ base: "center", md: "left", lg: "left" }}
            gap={"3rem"}
            pl={{ base: "auto", md: "2.5rem", lg: "2.5rem" }}
            flexWrap={"wrap"}
            h={"100%"}
          >
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap="2rem"
              w="100%"
              px="1rem"
            >
              {data?.map((card) => {
                return (
                  <Card
                    lightMode={lightMode}
                    key={card?.key}
                    // tag={card.tag}
                    title={card?.title}
                    description={card?.description}
                    image={card?.image}
                    link={card?.link}
                    view={card?.view}
                  />
                );
              })}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsComponent;
