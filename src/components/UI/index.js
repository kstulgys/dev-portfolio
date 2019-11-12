
import React from "react"
import { Box, Flex, Text } from "@chakra-ui/core"

export const TextTitle = ({ children, ...rest }) => (
  <Flex mb={[6, 10]} {...rest}>
    <Box>
      <Text
        as="h3"
        fontSize="3xl"
        textTransform="uppercase"
        letterSpacing="0.125em"
      >
        {children}
      </Text>
      {/* <Divider /> */}
    </Box>
  </Flex>
)