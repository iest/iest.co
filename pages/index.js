import React from "react";
import Head from "next/head";
import { Flex, Box, Text } from "rebass";

const Index = () => (
  <>
    <Head>
      <style>{`body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }`}</style>
    </Head>
    <Flex
      bg="#F1F1F1"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box>
        <Text fontWeight="bold" color="#B3B3B3">
          ⚠️ Coming soon
        </Text>
      </Box>
    </Flex>
  </>
);

export default Index;
