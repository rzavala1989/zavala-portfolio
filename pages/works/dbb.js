import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Do Betr Business">
    <Container>
      <Title>
        Do Betr Business<Badge>2018 - 2019</Badge>
      </Title>
      <P>
        A fullstack javascript application that helps business and self-employed
        professionals to easiliy keep track of and tax deductible expenses. This
        app appeals to Fortune 500 executives and independent contractors alike.
      </P>{' '}
      <P> Server is served on MongoDB and deployed on Heroku.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://desolate-taiga-15973.herokuapp.com/">
            https://desolate-taiga-15973.herokuapp.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Redux, MongoDB Atlas, NodeJS, Express</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/dbb_eyecatch.jpg" alt="dbb" />
    </Container>
  </Layout>
)

export default Work
