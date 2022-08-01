import React from 'react'
import LandingTemp from './LandingTemp'

function Home() {
  const holder = "Search by question...."
  const text = "ask a question"
  return (
    <>
    <LandingTemp holder={holder} text={text}/>
    </>
  )
}

export default Home