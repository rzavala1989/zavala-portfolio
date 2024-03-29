import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPalace from '../public/images/works/palace-fits_eyecatch.png'
import thumbCryptoHub from '../public/images/works/cryptohub_eyecatch.png'
import thumbZaxximo from '../public/images/works/zaxximo-eyecatch.png'
import thumbLO from '../public/images/works/lightsout_eyecatch.png'
import thumbDBB from '../public/images/works/dbb_eyecatch.png'
import thumbBlackJack from '../public/images/works/blackjack_eyecatch.png'
import thumbTracker from '../public/images/works/a-tracker_eyecatch.png'
import thumbSendbird from '../public/images/works/sendbird_eyecatch.png'
import thumbCNC from '../public/images/works/cnc_eyecatch.png'

//styles to be exported
//styles to be exported
const darkGrey = '#111111'
const tan = '#D2B48C'
//

const Works = () => (
  <Layout title="Works">
    <Container
      p={5}
      borderRadius="lg"
      bg={useColorModeValue('white', darkGrey)}
      borderWidth={2}
      borderColor={useColorModeValue(tan, 'silver')}
    >
      <Heading as="h3" fontSize={28} mb={4} textAlign={'center'}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="sendbird"
            title="Sendbird"
            thumbnail={thumbSendbird}
          >
            A progressive web app for messaging, build with React, Firebase, and
            Electron on Ant Design UI. and Framer Motion.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="cnc" title="Chess Not Checkrs" thumbnail={thumbCNC}>
            A web app for playing chess with configurable AI for computer
            difficulty, build with React, and Java Spring Boot
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="palace-fits"
            title="PALACE FITS"
            thumbnail={thumbPalace}
          >
            Full stack React e-commerce app that uses Google Firebase and
            Firestone for inventory and Google OAuth
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cryptohub"
            title="CryptoHub"
            thumbnail={thumbCryptoHub}
          >
            Ant Design, Chart.js, and Redux Toolkit to communicate with two APIs
            via RapidAPI to deliver current cryptocurrency news and stats
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="zaxximo" title="Zaxximo" thumbnail={thumbZaxximo}>
            React task management app which allows admins to create staff, set
            tasks/schedules, as well as task deletion/reassignment.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="dbb" title="Do Betr Business" thumbnail={thumbDBB}>
            React task management app which allows admins to create staff, set
            tasks/schedules, as well as task deletion/reassignment.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Smaller Apps and Games
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="lightsout" thumbnail={thumbLO} title="LIGHTSOUT">
            Desktop React App of a real-life classic handheld game
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="blaqjaq" thumbnail={thumbBlackJack} title="BlaqJaq">
            Desktop React App of a Blackjack game created with React Hooks and
            reducers
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="atoue"
            thumbnail={thumbTracker}
            title="A Tracker of Unfortunate Events"
          >
            A natural disaster tracker app that allows users to display events
            with the NASA API
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
