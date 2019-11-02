import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Box,
  Text,
  Image,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/core"

const Header = ({ image }) => {
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
    <Box as="header" position="relative" mt={[4, 20]} mb={20} boxShadow="2xl">
      <Image objectFit="cover" maxHeight="50vh" width="full" src={image} />
      <IconButton
        size="lg"
        p="0"
        color="gray.500"
        aria-label="toggle theme mode"
        icon={colorMode === "light" ? "sun" : "moon"}
        onClick={toggleColorMode}
        position="absolute"
        top="0"
        right="0"
        m="2"
        bg="transparent"
        border="1px"
        borderRadius="full"
        borderColor="gray.500"
        _hover={{
          bg: "transparent",
        }}
      />
    </Box>
  )
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

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
