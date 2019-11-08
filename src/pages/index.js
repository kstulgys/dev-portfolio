import React from "react"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Divider from "../components/Divider"
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
  Grid,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core"
import { FiMail, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi"
import { FaMediumM } from "react-icons/fa"

const IndexPage = props => {
  const {
    meImage,
    about,
    technologies,
    title,
    projects,
    talks,
  } = props.data.allContentYaml.nodes[0]

  return (
    <Layout>
      <SEO title="Home" />
      <Header title={title} meImage={meImage} />
      <Technologies technologies={technologies} />
      <ItemsToggle title="Projects" count={projects.length}>
        <Projects projects={projects} />
      </ItemsToggle>
      {[].length > 0 && (
        <ItemsToggle title="Talks" count={talks.length}>
          <Grid
            gridGap="6"
            // gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
            gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}
          >
            {talks.map(({ title, image }) => (
              <Link
                borderRadius="md"
                backgroundImage={image}
                px={[4]}
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="2px solid"
                borderColor="gray.200"
                height="64"
                position="relative"
              >
                <Text textAlign="center" fontSize="3xl">
                  {title}{" "}
                </Text>
                <Stack
                  isInline
                  flexWrap="wrap"
                  position="absolute"
                  bottom="0"
                  left="0"
                  width="full"
                  p={[2]}
                >
                  {["@React Sydney"].map(conference => {
                    return (
                      <Badge
                        // border="2px solid"
                        // borderColor="purple.200"
                        fontFamily="Lato"
                        // variant="subtle"
                        // variantColor="purple"
                        fontSize="md"
                        mt="2"
                      >
                        {conference}
                      </Badge>
                    )
                  })}
                </Stack>
              </Link>
            ))}
          </Grid>
        </ItemsToggle>
      )}
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
        talks {
          title
          image
        }
        projects {
          description
          image
          tags
          title
          github
        }
      }
    }
  }
`

const ItemsToggle = ({ count, title, children }) => {
  return (
    <AccordionItem
      mb={[16, 20]}
      style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
    >
      <AccordionHeader>
        <Flex flex="1" textAlign="left">
          <TextTitle mb={0}>
            {title} ({count})
          </TextTitle>
        </Flex>
        <AccordionIcon size="10" pl="auto" />
      </AccordionHeader>
      <AccordionPanel p="0" mt={[6, 10]}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}
const TextTitle = ({ children, ...rest }) => (
  <Flex mb={[6, 10]} {...rest}>
    <Box>
      <Text
        as="h3"
        fontSize="2xl"
        textTransform="uppercase"
        letterSpacing="0.125em"
      >
        {children}
      </Text>
      {/* <Divider /> */}
    </Box>
  </Flex>
)

const Technologies = ({ technologies }) => (
  <Flex
    mt={[0, 32]}
    mb={[16, 20]}
    align="flex-start"
    flexDir={["column", "row"]}
  >
    <Box>
      <TextTitle mt="2" mb={[6, 0]}>
        Technologies I'm excited to work with
      </TextTitle>
    </Box>

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

const Project = ({
  i,
  title,
  image,
  description,
  tags,
  github,
  ...otherProps
}) => {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const bgColor = { light: "white", dark: "transparent" }
  // const color = { light: "gray.800", dark: "gray.100" }
  return (
    <Flex
      // bg={bgColor[colorMode]}
      // color={color[colorMode]}
      width="full"
      minHeight="35vh"
      boxShadow="md"
      fontFamily="Lato"
      borderRadius="md"
      overflow="hidden"
      border="2px solid"
      borderColor="gray.200"
    >
      <Flex flex="1" flexDir={["column"]} p={[4, 6]}>
        <Flex>
          <Box mb="4">
            <Link isExternal href={title}>
              <Text
                fontWeight="bold"
                fontSize="2xl"
                // textDecoration="none"
                // _hover={{
                //   textDecoration: "none",
                // }}
              >
                {title.split("//")[1]}
              </Text>
            </Link>

            {/* <Box height="1" bg="purple.400" /> */}
          </Box>
        </Flex>
        <Text flex="1" fontSize="lg" fontWeight="lighter">
          <Markdown source={description} />
        </Text>
        <Stack isInline mt="6" flexWrap="wrap">
          {tags.map(tag => (
            <Badge m="1" variant="subtle" variantColor="purple" fontSize="md">
              {tag}
            </Badge>
          ))}
          {github && (
            <Link isExternal href={github}>
              <Badge m="1" variant="subtle" fontSize="md">
                GitRepo
              </Badge>
            </Link>
          )}
        </Stack>
      </Flex>
    </Flex>
  )
}

const About = ({ about }) => (
  <Flex flexDir="column" mb="20">
    <TextTitle>About</TextTitle>
    <Text fontFamily="Lato" fontSize="xl" fontWeight="lighter">
      <Markdown source={about} />
    </Text>
  </Flex>
)

const Projects = ({ projects }) => (
  <Flex flexDir="column">
    <Flex flexDir={["column", "row"]} justifyContent="space-between">
      <Grid
        gridGap="6"
        gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      >
        {projects.map((props, i) => {
          return <Project key={props.image} i={i} {...props} />
        })}
      </Grid>
    </Flex>
  </Flex>
)

const Contact = () => (
  <Flex flexDir="column" my="20">
    <Flex justifyContent="center" mb="2">
      <TextTitle textAlign="center">Contact me</TextTitle>
    </Flex>
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
      ⓒ 2019, Built with{" "}
      <Link isExternal href="https://www.gatsbyjs.org/">
        Gatsby
      </Link>{" "}
      and 💖
    </Text>
  </Flex>
)

export default IndexPage
