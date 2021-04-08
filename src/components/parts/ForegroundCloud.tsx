import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Svg = styled(motion.svg).attrs({
  viewBox: '0 0 101 41',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  fill: none;
  bottom: -5%;

  > * {
    fill: white;
  }
`

export const ForegroundCloud = () => (
  <Svg
    animate={{ x: '15%' }}
    initial={{ x: '25%' }}
    transition={{
      duration: 14,
      repeat: Infinity,
      repeatType: 'mirror',
      repeatDelay: 4,
    }}
    height="70%"
    width="70%"
  >
    <path d="M85.709 0.883301C78.46 0.883301 72.4515 6.1953 71.3571 13.1408C70.1719 12.8098 68.9262 12.628 67.635 12.628C64.0946 12.628 60.8656 13.9652 58.4238 16.1614C55.9885 12.747 51.9982 10.5205 47.4867 10.5205C43.5029 10.5205 39.9257 12.2559 37.4645 15.0103C35.1049 12.2472 31.5991 10.4946 27.6823 10.4946C26.5944 10.4946 25.5412 10.6309 24.5333 10.8841C21.9921 7.9414 18.2375 6.0762 14.0461 6.0762C6.3942 6.0762 0.191399 12.2818 0.191399 19.9371C0.191399 27.5924 6.3942 33.7979 14.0461 33.7979C15.7979 33.7979 17.474 33.469 19.0161 32.8762C21.3021 34.962 24.343 36.2365 27.6823 36.2365C31.3201 36.2365 34.601 34.724 36.9411 32.2963C39.4023 35.4099 43.2088 37.4114 47.4845 37.4114C50.826 37.4114 53.8798 36.1888 56.2308 34.1679C58.7114 37.8138 62.8921 40.2112 67.635 40.2112C74.2898 40.2112 79.842 35.4943 81.135 29.2195C82.573 29.6955 84.109 29.9595 85.709 29.9595C93.733 29.9595 100.239 23.451 100.239 15.4236C100.239 7.3961 93.735 0.883301 85.709 0.883301Z" />
  </Svg>
)

export default ForegroundCloud
