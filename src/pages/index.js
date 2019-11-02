import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import { Box, Text, Image, Button } from "@chakra-ui/core"

const IndexPage = props => {
  const { image, title, intro } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <Header image={image} />
      <Text as="h2" fontSize="3xl">
        {title}
      </Text>
      <Text>{intro}</Text>
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
      }
    }
  }
`

export default IndexPage
