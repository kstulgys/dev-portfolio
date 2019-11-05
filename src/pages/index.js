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
    {...props}
  />
)

const Project = ({ i, title, image, description, tags }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      width={["full", "48%"]}
      // bg={colorMode === "light" ? "white" : "inherit"}
      minHeight="40vh"
      boxShadow="md"
      fontFamily="Lato"
      borderRadius="lg"
      overflow="hidden"
      border="2px solid"
      borderColor="gray.200"
      mb={[8, 0]}
    >
      {/* <Image
        display={["none", "block"]}
        width="50%"
        opacity="0.75"
        objectFit="cover"
        src={image}
      /> */}
      <Flex flexDir={["column"]} p={[4, 6]}>
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
        <Text fontSize="lg">
          <Box
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Text>
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

const Contact = () => (
  <Flex flexDir="column" mb="20">
    <TextTitle mb="6" textAlign="center">
      Contacts
    </TextTitle>
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

const About = ({ about }) => (
  <Flex flexDir="column" mb="20">
    <TextTitle mb="6">About</TextTitle>
    <Text fontFamily="Lato" fontSize="lg">
      <Box id="___gatsby" dangerouslySetInnerHTML={{ __html: about }} />
    </Text>
  </Flex>
)

const Projects = ({ projects }) => (
  <Flex flexDir="column" mb="20">
    <TextTitle mb="6">Projects</TextTitle>
    <Flex flexDir={["column", "row"]} justifyContent="space-between">
      {projects.map((props, i) => {
        return <Project key={props.image} i={i} {...props} />
      })}
    </Flex>
  </Flex>
)

const Technologies = ({ technologies }) => (
  <Flex
    mt={[0, 32]}
    mb={[10, 20]}
    align="flex-start"
    flexDir={["column", "row"]}
  >
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
)

export default IndexPage
