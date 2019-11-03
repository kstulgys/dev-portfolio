/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import {
  Box,
  Text,
  Flex,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core"
import SEO from "./seo"

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <SEO />
        <Flex
          color={colorMode === "light" ? "gray.800" : "gray.200"}
          bg={colorMode === "light" ? "gray.200" : "gray.800"}
          flexDir="column"
          width="full"
          minHeight="100vh"
        >
          <Box as="main" maxWidth="5xl" mx="auto" px="4">
            {children}
          </Box>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
