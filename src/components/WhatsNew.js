import React from "react"
import { Flex, Text, Stack, Badge, Link, Grid, Box } from "@chakra-ui/core"
import { TextTitle } from "./UI"

const WhatsNew = () => {
  return (
    <Flex flexDir={["column"]} mb="20">
      <TextTitle>What's new</TextTitle>
      <Grid gridTemplateColumns={["1fr", "1fr 1fr"]}>
        <Box>
          <Grid gridGap="6" gridTemplateColumns={["1fr"]}>
            {[{ title: "Gatsby 💖 Netlify CMS" }].map(({ title, image }) => (
              <Link
                width="full"
                borderRadius="md"
                px={[4]}
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="2px solid"
                borderColor="gray.200"
                height="64"
                position="relative"
              >
                <Badge
                  position="absolute"
                  top="0"
                  right="0"
                  fontFamily="Lato"
                  variant="subtle"
                  fontSize="sm"
                  m="2"
                >
                  Talking
                </Badge>
                <Box width="full">
                  <Text textAlign="center" fontSize="3xl" lineHeight="short">
                    {title}
                  </Text>
                  <Box textAlign="center" mt="2">
                    <Text>@Atlassian HQ</Text>
                    <Text>2/12/2019 6PM</Text>
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
        </Box>
      </Grid>
    </Flex>
  )
}

export default WhatsNew
