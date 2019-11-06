import React from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
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
import { FaMediumM } from "react-icons/fa"

const IndexPage = props => {
  console.log({ props })
  const {
    meImage,
    about,
    technologies,
    title,
    projects,
  } = props.data.allContentYaml.nodes[0]

  console.log(meImage, about, technologies, title, projects)

  return (
    <Layout>
      <SEO title="Home" />
      <Header title={title} meImage={meImage} />
      <Technologies technologies={technologies} />
      <Projects projects={projects} />
      <About about={about} />
      <Contact />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentYaml {
      nodes {
        meImage
        about
        technologies
        title
        projects {
          description
          image
          tags
          title
        }
      }
    }
  }
`
const TextTitle = props => (
  <Text
    as="h3"
    fontSize="2xl"
    textTransform="uppercase"
    letterSpacing="0.125em"
    mb={[6, 10]}
    {...props}
  />
)

const Technologies = ({ technologies }) => (
  <Flex
    mt={[0, 32]}
    mb={[16, 20]}
    align="flex-start"
    flexDir={["column", "row"]}
  >
    <TextTitle mt="2" mb={[6, 0]}>
      Technologies I'm excited to work with
    </TextTitle>
    <Stack px={[0, 6]} isInline flexWrap="wrap">
      {technologies.map(tech => {
        return (
          <Badge
            // border="2px solid"
            // borderColor="purple.200"
            fontFamily="Lato"
            variant="subtle"
            variantColor="purple"
            fontSize="xl"
            mt="2"
          >
            {tech}
          </Badge>
        )
      })}
    </Stack>
  </Flex>
)

const Project = ({ i, title, image, description, tags }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = { light: "white", dark: "transparent" }
  const color = { light: "gray.800", dark: "gray.100" }

  return (
    <Flex
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      width={["full", "48%"]}
      minHeight="40vh"
      boxShadow="xl"
      fontFamily="Lato"
      borderRadius="lg"
      overflow="hidden"
      border="2px solid"
      borderColor="gray.200"
      mb={[i === 0 ? 8 : 0, 0]}
    >
      <Flex flex="1" flexDir={["column"]} p={[4, 6]}>
        <Flex>
          <Box mb="4">
            <Link isExternal href={title}>
              <Text
                fontWeight="black"
                fontSize="2xl"
                // textDecoration="none"
                // _hover={{
                //   textDecoration: "none",
                // }}
              >
                {title}
              </Text>
            </Link>

            <Box height="1" bg="purple.400" />
          </Box>
        </Flex>
        <Text flex="1" fontSize="lg">
          <Markdown source={description} />
        </Text>
        <Stack isInline mt="6" flexWrap="wrap">
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

const About = ({ about }) => (
  <Flex flexDir="column" mb="20">
    <TextTitle>About</TextTitle>
    <Text fontFamily="Lato" fontSize="xl">
      <Markdown source={about} />
    </Text>
  </Flex>
)

const Projects = ({ projects }) => (
  <Flex flexDir="column" mb={[16, 20]}>
    <TextTitle>Projects</TextTitle>
    <Flex flexDir={["column", "row"]} justifyContent="space-between">
      {projects.map((props, i) => {
        return <Project key={props.image} i={i} {...props} />
      })}
    </Flex>
  </Flex>
)

const Contact = () => (
  <Flex flexDir="column" mb="20">
    <TextTitle textAlign="center">Contact me</TextTitle>
    <Stack isInline align="center" justifyContent="center" spacing={[3, 8]}>
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
      <Link isExternal href="https://medium.com/karolis-stulgys">
        <Box as={FaMediumM} size="12" />
      </Link>
    </Stack>
  </Flex>
)

const Footer = () => (
  <Flex justifyContent="center" py={10}>
    <Text>
      Built with{" "}
      <Link isExternal href="https://www.gatsbyjs.org/">
        Gatsby
      </Link>{" "}
      and 💖
    </Text>
  </Flex>
)

export default IndexPage
