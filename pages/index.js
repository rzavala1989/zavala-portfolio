import NextLink from 'next/link'
import { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoLogoGoogle } from 'react-icons/io5'
import thumbHome2 from '../public/images/thumb-home-2.jpg'
import thumbHome from '../public/images/thumb-home.jpg'

//styles to be exported
const darkGrey = '#111111'
const tan = '#D2B48C'
//

const Home = () => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <Layout>
      <Container
        p={5}
        borderRadius="lg"
        bg={useColorModeValue('white', darkGrey)}
        borderWidth={2}
        borderColor={useColorModeValue(tan, 'silver')}
      >
        <Box
          fontFamily="'Dancing Script', cursive"
          borderRadius="lg"
          mb={6}
          fontSize={42}
          display={'flex'}
          p={3}
          justifyContent={'center'}
          alignItems={'center'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <ControlledZoom
            width="100%"
            isZoomed={isZoomed}
            onZoomChange={handleZoomChange}
            overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
            // overlayBgColorEnd="radial-gradient(circle, rgba(205,200,200,1) 8%, rgba(0,0,0,1) 14%, rgba(0,0,0,0.8127626050420168) 100%)"
            transitionDuration={600}
            zoomMargin={400}
          >
            <img src="diamond.png" alt="diamond" />
          </ControlledZoom>{' '}
          in the rough...
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ricardo Zavala
            </Heading>
            <p>Digital Craftsman ( UI/UX / Developer / React )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxHeight="133px"
              backgroundPosition="center"
              display="inline-block"
              borderRadius="full"
              src={useColorModeValue(
                '/images/headshot-light.jpg',
                '/images/headshot-dark.jpg'
              )}
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Me!
          </Heading>
          <Paragraph>
            Hello, all! My name is Ricardo and I am a fullstack software
            engineer and recent graduate of the Full Stack Flex Career Path
            bootcamp at Thinkful. My love for coding blossomed due to my
            penchant for solving problems and seeing my visions play out to
            completion. I cannot wait to see where my interests take me as a
            programmer. I am currently studying Data Science in the Python
            Language.{' '}
          </Paragraph>{' '}
          <br />
          <Paragraph>
            As for myself, I currently live in Tulsa, OK. I was born in Toledo,
            OH, and I have also spent significant time in Las Vegas, NV and San
            Antonio and Austin, TX. I am a fiance, a father, and a man looking
            to make a monumental change. I stay physically active by running on
            various trails, playing basketball, and working out in the gym. I
            stimulate my creativity through photography of cityscapes, and
            broaden my horizons through travel. Occasionally I will test my luck
            at the casino, as I am also fond of blackjack and poker.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('orange', 'purple')}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>
            Born in Toledo, Ohio
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Bachelor of the Arts, Industrial/Organizational Psychology
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            First developer job at Zappos
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Became Senior Architect on TouchTo
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/rzavala1989" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('#F5F5DC', 'purple')}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @rzavala1989
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:zavala.ricardo.m@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('#F5F5DC', 'purple')}
                  leftIcon={<Icon as={IoLogoGoogle} />}
                >
                  zavala.ricardo.m@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ricardo-zavala-17000265/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('#F5F5DC', 'purple')}
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Ricardo Zavala (LinkedIn Profile)
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem title="San Francisco trip" thumbnail={thumbHome2} />

            <GridItem title="My hometown of Las Vegas" thumbnail={thumbHome} />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
