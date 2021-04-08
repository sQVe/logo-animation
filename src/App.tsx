import React from 'react'

import {
  BackgroundCloud,
  Pupil,
  ForegroundCloud,
  PartsWrapper,
  Title,
  Tower,
  Sclera,
} from './components'

import './global.css'

export default function App() {
  return (
    <main className="App">
      <PartsWrapper>
        <BackgroundCloud />
        <Sclera />
        <Pupil />
        <Tower />
        <ForegroundCloud />
      </PartsWrapper>
      <Title />
    </main>
  )
}
