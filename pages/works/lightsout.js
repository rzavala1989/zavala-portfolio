import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        LIGHTSOUT <Badge>2019</Badge>
      </Title>
      <P>
        A simple client-side React app that is a online rendition of a handheld
        game from the 1980s. Makes use of custom SVGs and modals.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile responsive web app</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/lightsout_eyecatch.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
