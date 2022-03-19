import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      fontSize: '20',
      bg: mode(
        'url("/images/detroit-industry-light-mode.png")',
        'url("/images/detroit-industry-dark-mode.png")'
      )(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontFamily: "'Dancing Script', cursive",
        fontSize: 24,
        fontWeight: '600',
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  // Body: {
  //   baseStyle: {
  //     filter: 'sepia(75%)'
  //   }
  // },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Dancing Script', cursive",
  body: 'Josefin Sans, sans-serif',
  fontSize: '20'
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
