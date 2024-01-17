import React from 'react'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Slide from './components/Slide'
import SmallSlider from './components/SmallSlider'
import CardsSlider from './components/CardsSlider'

const App = () => {
  return (
    <>
    <ResponsiveAppBar />
    <div>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c21a10fa-ccad-4551-84c7-55d21fdbc345.png?format=avif" alt="" width={'100%'} />
    </div>
    <div className='flex flex-wrap justify-between'>
    <div className='w-[80%]'>
    <Slide />
      </div >
    <div className='w-[20%]'><img src="https://f.nooncdn.com/mpcms/EN0001/assets/9fa77bc4-04be-47ec-a433-42126343092c.png?format=avif" alt="" className='h-48 w-[100%]' /></div>
    <SmallSlider/>
    </div>

    <div>
      <h1 className='m-5 text-2xl '>Recommended for you</h1>
    </div>
    
    <CardsSlider />




    </>
  )
}

export default App