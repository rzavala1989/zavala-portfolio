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
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbLO from '../public/images/works/lightsout_eyecatch.png'
import thumbDBB from '../public/images/works/dbb_eyecatch.png'
import thumbBlackJack from '../public/images/works/blackjack_eyecatch.png'

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
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
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
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
