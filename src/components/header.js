import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/core"

const Header = ({ image, meImage }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  // const data = useStaticQuery(graphql`
  //   query {
  //     markdownRemark {
  //       frontmatter {
  //         image
  //         intro
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Flex as="header" position="relative" my={[0, 20]}>
      <Flex
        flex="1"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        flexDir="column"
        height={["100vh", "auto"]}
      >
        <Image
          boxShadow="xl"
          mx="auto"
          border="10px solid"
          borderColor="gray.200"
          src={meImage}
          height={[56, 64]}
          width={[56, 64]}
          borderRadius="full"
          // position="absolute"
          // bottom="-100px"
          // left="0"
        />
        <Text
          fontSize={["4xl", "5xl"]}
          fontFamily="Nova Mono"
          fontWeight="bold"
          mt="4"
        >
          Hi, I'm Karolis 👋
        </Text>
        <Flex justifyContent="center" my="4">
          <Box>
            <Text fontSize={["2xl", "3xl"]} fontFamily="Lato" width="auto">
              A Fullstack Engineer
            </Text>
            <Box height="2px" bg="gray.600" />
          </Box>
        </Flex>
        <Text fontSize={["3xl", "4xl"]} fontFamily="Nova Mono">
          Code and Design is my passion.
        </Text>
      </Flex>
      <IconButton
        size="lg"
        p="0"
        color="gray.700"
        aria-label="toggle theme mode"
        icon={colorMode === "light" ? "sun" : "moon"}
        onClick={toggleColorMode}
        position="absolute"
        top="0"
        right="0"
        mt={[4, 2]}
        mr={[0, 2]}
        bg="transparent"
        border="1px"
        borderRadius="full"
        borderColor="gray.700"
        _hover={{
          bg: "transparent",
        }}
      />
    </Flex>
  )
}
Header.propTypes = {
  image: PropTypes.string,
  meImage: PropTypes.string,
}

Header.defaultProps = {
  image: ``,
  meImage: ``,
}

// {/* <Flex
// backgroundImage={`url(${image})`}
/* Set a specific height */

/* Create the parallax scrolling effect */
// backgroundAttachment="fixed"
// backgroundPosition="center"
// backgroundRepeat="no-repeat"
// backgroundSize="cover"
// height="50vh"
// objectFit="cover"
// // maxHeight="50vh"
// width="full"
// src={image}
// > */}

// export const query = graphql`
// query {
//   markdownRemark {
//     frontmatter {
//       image
//       intro
//       title
//     }
//   }
// }
// `

export default Header
