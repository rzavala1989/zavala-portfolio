import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="BlaqJaq">
    <Container>
      <Title>
        BlaqJaq <Badge>2021-2022</Badge>
      </Title>
      <P>
        A Desktop React App of a Blackjack game created with React Hooks and
        reducers. Has persistent state and uses custom hooks to handle game
        logic and styled components for personalized layouts
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cp-blaqjaq.vercel.app/">
            https://cp-blaqjaq.vercel.app/
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
          <span>Framer Motion</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/blackjack_eyecatch.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
