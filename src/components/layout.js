/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Text,
  Flex,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
  IconButton,
} from "@chakra-ui/core"
import SEO from "./seo"
import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <SEO />
        {/* <BgImage /> */}
        <AppContainer>{children}</AppContainer>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const AppContainer = ({ children }) => (
  <Flex overflowY="scroll" height="100vh" position="relative">
    <Flex
      as="main"
      flex="1"
      maxWidth="5xl"
      mx="auto"
      px="4"
      flexDir="column"
      position="relative"
    >
      <ThemeToggle />
      {children}
    </Flex>
  </Flex>
)

const BgImage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  // const bgColor = { light: "gray.100", dark: "gray.800" }
  const color = { light: "gray.800", dark: "gray.100" }
  const bgUrl = {
    light:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    dark:
      "https://images.unsplash.com/photo-1432821579285-1b649e5b1ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  }

  return (
    <Flex
      flexDir="column"
      height="100vh"
      color={color[colorMode]}
      backgroundImage={`url(${bgUrl[colorMode]})`}
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="absolute"
      opacity="0.05"
      top="0"
      bottom="0"
      width="full"
    />
  )
}

const ThemeToggle = () => {
  const currentColorMode =
    typeof window === "undefined"
      ? "dark"
      : window.localStorage.getItem("darkMode") === "true"
      ? "dark"
      : "light"

  const { colorMode, toggleColorMode } = useColorMode(currentColorMode)
  const icon = { light: "sun", dark: "moon" }
  const color = { light: "gray.800", dark: "gray.100" }

  return (
    <IconButton
      transform="scale(1.5)"
      size="lg"
      p="0"
      color="purple.400"
      aria-label="toggle theme mode"
      icon={icon[colorMode]}
      onClick={toggleColorMode}
      position="absolute"
      top="0"
      right="0"
      m={[6]}
      bg="transparent"
      borderRadius="full"
      _hover={{
        bg: "transparent",
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
