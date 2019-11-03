import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Stack,
  Badge,
  useColorMode,
  Link,
} from "@chakra-ui/core"
import { FiMail, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi"

const TextTitle = props => (
  <Text
    as="h3"
    fontSize="2xl"
    textTransform="uppercase"
    letterSpacing="0.125em"
    {...props}
  />
)

const Project = ({ title, image, description, tags }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      width={["full", "48%"]}
      bg={colorMode === "light" ? "white" : "inherit"}
      minHeight="40vh"
      boxShadow="md"
      mb={[10, 16]}
      fontFamily="Lato"
      borderRadius="lg"
      overflow="hidden"
      border="2px solid"
      borderColor="gray.200"
    >
      {/* <Image
        display={["none", "block"]}
        width="50%"
        opacity="0.75"
        objectFit="cover"
        src={image}
      /> */}
      <Flex flexDir={["column"]} p={[4, 10]}>
        <Flex>
          <Box mb="4">
            <Link isExternal href={title}>
              <Text
                fontWeight="black"
                fontSize="2xl"
                textDecoration="none"
                _hover={{
                  textDecoration: "none",
                }}
              >
                {title}
              </Text>
            </Link>

            <Box height="1" bg="purple.400" />
          </Box>
        </Flex>
        <Text fontSize="lg">{description}</Text>
        <Stack isInline mt="auto" pt="6" flexWrap="wrap">
          {tags.map(tag => (
            <Badge mt="2" variant="subtle" variantColor="purple" fontSize="md">
              {tag}
            </Badge>
          ))}
        </Stack>
      </Flex>
    </Flex>
  )
}
const IndexPage = props => {
  const {
    intro,
    meImage,
    projects,
    technologies,
  } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <Header image="" meImage={meImage} />
      <Flex mt={[0, 32]} mb="20" align="flex-start" flexDir={["column", "row"]}>
        <TextTitle mb={[6, 0]}>Technologies I'm excited to work with</TextTitle>
        <Stack px={[0, 4]} isInline flexWrap="wrap">
          {technologies.map(tech => {
            return (
              <Badge
                // border="2px solid"
                // borderColor="purple.200"
                fontFamily="Lato"
                variant="subtle"
                variantColor="purple"
                fontSize="xl"
                mb="2"
              >
                {tech}
              </Badge>
            )
          })}
        </Stack>
      </Flex>
      <Flex flexDir="column" mb="20">
        <TextTitle mb="6">Projects</TextTitle>
        <Flex flexDir={["column", "row"]} justifyContent="space-between">
          {projects.map(props => {
            return <Project {...props} />
          })}
        </Flex>
      </Flex>
      <Flex flexDir="column" mb="20">
        <TextTitle mb="6">About</TextTitle>
        <Text fontFamily="Lato" fontSize="lg">
          {/* {intro} */}+ Passionate fullstack developer successful at
          completing lucrative and labor-intensive projects.
          <br /> + Over 6 years of experience doing engineering software demos,
          training, and technical support for clients.
          <br /> + I get excited about opportunities to create mutually
          beneficial partnerships that drive growth on both sides of the
          relationship, specifically in the world of tech/web development. Want
          to connect? Feel free to email me at karolis.stulgys@gmail.com.
          <br />
          <br /> Other themes that make me excited - human performance, food,
          longevity, powerlifting, strength training, bodybuilding, meditation,
          yoga.
        </Text>
      </Flex>
      <Flex flexDir="column" mb="20">
        <TextTitle mb="6" textAlign="center">
          Contact
        </TextTitle>
        <Stack isInline align="center" justifyContent="center" spacing={8}>
          <Link isExternal href="mailto:karolis.stulgys@gmail.com">
            <Box as={FiMail} size="12" strokeWidth="1" />
          </Link>
          <Link isExternal href="https://bit.ly/35R8qB2">
            <Box as={FiFileText} size="12" strokeWidth="1" />
          </Link>
          <Link isExternal href="https://github.com/kstulgys">
            <Box as={FiGithub} size="12" strokeWidth="1" />
          </Link>
          <Link isExternal href="https://www.linkedin.com/in/kstulgys/">
            <Box as={FiLinkedin} size="12" strokeWidth="1" />
          </Link>
        </Stack>
      </Flex>
      <Flex justifyContent="center" py={10}>
        <Text>
          Built with <Link>Gatsby</Link> and 💖
        </Text>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark {
      frontmatter {
        intro
        meImage
        technologies
        projects {
          description
          image
          title
          tags
        }
      }
    }
  }
`

export default IndexPage
