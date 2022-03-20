import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Zaxximo">
    <Container>
      <Title>
        Zaxximo <Badge>2020 - 2021</Badge>
      </Title>
      <P>
        Zaximo is a task management app which allows admins to create staff, set
        tasks/schedules, as well as task deletion/reassignment.
      </P>{' '}
      <P>
        {' '}
        Also, this app is hooked onto the same server as corresponding React
        Native App for employees to log in and have access to their tasks.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://arcane-woodland-70033.herokuapp.com/">
            https://arcane-woodland-70033.herokuapp.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            ReactJS, React Native, Context API, MongoDB Atlas, NodeJS, React
            Materalize, Docker
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/zaxximo-eyecatch.png" alt="Zaxximo" />
    </Container>
  </Layout>
)

export default Work
