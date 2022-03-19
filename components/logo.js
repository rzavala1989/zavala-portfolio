import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  top: 1px;
  height: 30px;
  line-height: 20px;
  position: relative;
  top: 4px;
  margin-right: 2px !important;
  img {
    transition: 200ms ease;

    font-size: 30px;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/chess_piece_king_${useColorModeValue(
    'black',
    'white'
  )}-1.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={30} height={30} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Josefin Sans, sans-serif"
            fontSize={30}
            fontWeight="400"
            ml={3}
          >
            Ricardo Zavala
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
