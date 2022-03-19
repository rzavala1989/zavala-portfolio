import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="cryptohub">
    <Container>
      <Title>
        CryptoHub <Badge>2021-</Badge>
      </Title>
      <P>
        This is a React app scaffolded with Ant Design, Chart.js, and Redux
        Toolkit to communicate with two APIs via RapidAPI to deliver current
        cryptocurrency news and up-to-date statistics
      </P>
      <P>
        This app is still in development in order to add new views and perhaps
        upgrade the API to something more exhaustive
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>All Platforms</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux Toolkit, Ant Design</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cryptohub_eyecatch.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
