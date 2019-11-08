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
import Divider from "./Divider"

const Header = ({ meImage }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex as="header" my={[0, 20]}>
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
          border="6px solid"
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
        <Flex justifyContent="center" my="3">
          <Box>
            <Text fontSize={["2xl", "3xl"]} fontFamily="Lato" width="auto">
              A Fullstack Engineer
            </Text>
            <Divider />
          </Box>
        </Flex>
        <Text fontSize={["3xl", "4xl"]} fontFamily="Nova Mono" mt="2">
          Code and Design is my passion.
        </Text>
      </Flex>
    </Flex>
  )
}
Header.propTypes = {
  meImage: PropTypes.string,
}

Header.defaultProps = {
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
