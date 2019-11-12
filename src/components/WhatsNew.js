
import React from "react"
import {
  Flex,
  Text,
  Stack,
  Badge,
  Link,
  Grid,
  Box
} from "@chakra-ui/core"
import { TextTitle } from "./UI";

const WhatsNew = () => {
  return (
    <Flex flexDir="column" mb="20">
      <TextTitle>What's new</TextTitle>
      <Text fontSize='3xl' mb='4'>Talks</Text>
      <Grid
        mb='10'
        gridGap="6"
        // gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
        gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}
      >

        {[{ title: 'Gatsby 💖 Netlify CMS' }].map(({ title, image }) => (
          <Link
            borderRadius="md"
            // backgroundImage={image}
            px={[4]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="2px solid"
            borderColor="gray.200"
            height="64"
            position="relative"
          >
            <Box>
              <Text textAlign="center" fontSize="3xl" lineHeight="short">
                {title}
              </Text>
              <Box textAlign='center' mt='2'>
                <Text>@Atlassian HQ</Text>
                <Text>5/12/2019 6PM</Text>
              </Box>
            </Box>

            <Stack
              isInline
              flexWrap="wrap"
              position="absolute"
              bottom="0"
              left="0"
              width="full"
              p={[2]}
            >
              {["#React Sydney", "#meetup"].map(conference => {
                return (
                  <Badge
                    variant="subtle"
                    variantColor="purple"
                    fontFamily="Lato"
                    // variant="subtle"
                    // variantColor="purple"
                    fontSize="sm"
                    mt="2"
                  >
                    {conference}
                  </Badge>
                )
              })}
            </Stack>
          </Link>
        ))}
      </Grid>
      <Text fontSize='3xl' mb='4'>Mentoring</Text>
      <Grid
        gridGap="6"
        // gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
        gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}
      >

        {[{ title: 'MusesCodeJS workshop' }].map(({ title, image }) => (
          <Link
            borderRadius="md"
            // backgroundImage={image}
            px={[4]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="2px solid"
            borderColor="gray.200"
            height="64"
            position="relative"
          >
            <Box>
              <Text textAlign="center" fontSize="3xl" lineHeight="short">
                {title}
              </Text>
              <Box textAlign='center' mt='2'>
                <Text>@Microsoft Reactor</Text>
                <Text>16/11/2019 9AM</Text>
              </Box>
            </Box>

            <Stack
              isInline
              flexWrap="wrap"
              position="absolute"
              bottom="0"
              left="0"
              width="full"
              p={[2]}
            >
              {["#MusesCodeJS", "#workshop"].map(conference => {
                return (
                  <Badge
                    // border="2px solid"
                    // borderColor="purple.200"
                    fontFamily="Lato"
                    variant="subtle"
                    variantColor="purple"
                    fontSize="sm"
                    mt="2"
                  >
                    {conference}
                  </Badge>
                )
              })}
            </Stack>
          </Link>
        ))}
      </Grid>
    </Flex>
  )
}

export default WhatsNew