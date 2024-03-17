import React from 'react'
import { Footer, Navbar } from '../..'
import { useSelector } from 'react-redux';
import Home from '../../home'
import League from '../../league'
import Tournament from '../../tournament'
import Team from '../../team'
const Main = () => {
  const layout = useSelector((state)=> state.ui.view)
  console.log('====================================');
  console.log(layout);
  console.log('====================================');
  return (
    <div>
        <Navbar />  
        {layout === 'homeClient' && <Home />}
        {layout === 'league' && <League />}
        {layout === 'tournament' && <Tournament />}
        {layout === 'team' && <Team />}
        <Footer />
    </div>
  )
}

export default Main
