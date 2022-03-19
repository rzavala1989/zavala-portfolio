import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PALACE FITS">
    <Container>
      <Title>
        PALACE FITS <Badge>2020-</Badge>
      </Title>
      <P>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $200k.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://palace-fits-final.herokuapp.com/">
            https://palace-fits-final.herokuapp.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Firebase, React, Redux Sagas, GraphQL</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/palace-fits_eyecatch.png"
        alt="Palace Fits"
      />
    </Container>
  </Layout>
)

export default Work
