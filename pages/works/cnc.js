import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chess Not Checkrs">
    <Container>
      <Title>
        Chess Not Checkrs <Badge>2022</Badge>
      </Title>
      <P>
        A web app for playing chess with configurable AI for computer
        difficulty, build with React, and Java Spring Boot. Microservice-based
        RESTful API for the game logic which allows for a user to create a game,
        join a game against an AI opponent, and can configure the AI difficulty
        in real time. A Docker image is also built for containerization.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">
            Live link coming soon
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/rzavala1989/chess-not-checkrs">
            Chess Not Checkrs
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, ContextAPI, Docker, Java Spring Boot</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cnc_eyecatch.png" alt="Sendbird" />
    </Container>
  </Layout>
)

export default Work
