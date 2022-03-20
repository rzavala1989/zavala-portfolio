import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sendbird">
    <Container>
      <Title>
        Sendbird <Badge>2021-2022</Badge>
      </Title>
      <P>
        A messaging app built with custom Sendbird API, built as a progressive
        web app on Electron built with all custom components in Storybook. FOr
        the purpose of demo and user intelligence, I used the Sendbird API to
        create a chat room with users in a demo database.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://songbird-nu.vercel.app/">
            https://songbird-nu.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Firebase, React, Redux Sagas, Electron, Chalk, Storybook</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sendbird_eyecatch.png" alt="Sendbird" />
    </Container>
  </Layout>
)

export default Work
