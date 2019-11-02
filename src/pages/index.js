import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import { Flex, Box, Text, Image, Button } from "@chakra-ui/core"

const IndexPage = props => {
  const { image, title, intro, meImage } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <Header image={image} meImage={meImage} />
      <Text
        as="h2"
        fontSize="3xl"
        mb="6"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="0.125em"
      >
        {title}
      </Text>
      <Flex flexDir="column">
        <Project />
        <Project />
        <Project />
      </Flex>
      <Text fontFamily="Lato" fontSize="lg">
        {intro}
      </Text>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark {
      frontmatter {
        image
        intro
        title
        meImage
      }
    }
  }
`

const Project = () => (
  <Box height="45vh" width="full" bg="white" boxShadow="2xl" mb="6">
    <Text mx="auto" my="auto"></Text>
  </Box>
)

export default IndexPage
