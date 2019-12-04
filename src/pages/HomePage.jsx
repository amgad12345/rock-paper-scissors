import React, { Component, useState, useEffect } from 'react'
import TheGame from '../components/TheGame'
import paper1 from '../images/paper1.png'
import paper2 from '../images/paper2.png'
import rock1 from '../images/rock1.png'
import rock2 from '../images/rock2.png'
import scissors1 from '../images/scissors1.png'
import iscissors2 from '../images/scissors2.png'
import { setState } from 'expect/build/jestMatchersObject'

const HomePage = () => {
  const [Rock, SetRock] = useState([])
  const [Scissors, SetScissors] = useState([])
  const [Paper, SetPaper] = useState([])
  const [RShowClass, RSetShowClass] = useState([])
  const [PShowClass, PSetShowClass] = useState([])
  const [SShowClass, SSetShowClass] = useState([])
  const [cRShowClass, cRSetShowClass] = useState([])
  const [cPShowClass, cPSetShowClass] = useState([])
  const [cSShowClass, cSSetShowClass] = useState([])
  const rockset = value => {
    RSetShowClass('showRock')
    SetRock(value)
    console.log(value)
    setcomputer()
  }

  const scissorsset = value => {
    SSetShowClass('showScissors')
    SetScissors(value)
    console.log(value)
    setcomputer()
  }

  const paperset = value => {
    PSetShowClass('showPaper')
    SetPaper(value)
    console.log(value)
   
    setcomputer()
    
  }
  const setcomputer = () =>{
    const randompic = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if(randompic ==1){
      cRSetShowClass('cshowRock')
      
    }else if (randompic==2){
      cPSetShowClass('showPaper')
    }else {

      cSSetShowClass('cshowScissors')
    }
  }

  
 

  return (
    <TheGame
      RShowClass={RShowClass}
      PShowClass={PShowClass}
      SShowClass={SShowClass}
      cRShowClass={cRShowClass}
      cPShowClass={cPShowClass}
      cSShowClass={cSShowClass}
      rockbuttonclicked={rockset}
      paperbuttonclicked={scissorsset}
      scissorsbuttonclicked={paperset}
    />
  )
}

export default HomePage
