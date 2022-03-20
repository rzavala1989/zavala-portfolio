import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="A Tracker Of Unfortunate Events">
    <Container>
      <Title>
        A Tracker Of Unfortunate Events <Badge>2019</Badge>
      </Title>
      <P>
        An app built with NASA API to display the current weather and the
        natural disaster events, specifically tropical cyclones, volcanic
        eruptions, and wildfires.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://a-tracker-of-unfortunate-events.vercel.app/">
            https://a-tracker-of-unfortunate-events.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile responsive web app</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/a-tracker_eyecatch.png"
        alt="A Tracker Of Unfortunate Events"
      />
    </Container>
  </Layout>
)

export default Work
