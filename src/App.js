import React from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Heighlight from './Components/Heighlight'
import Campus from './Components/Campus'
import Technology from './Components/Technology'
import Achivement from './Components/Achivement'
import Banner from './Components/Banner'
import Courses from './Components/Courses'
import Image from './Components/Image'
import Numbers from './Components/Numbers'
import Admission from './Components/Admission'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Heighlight />
      <Campus />
      <Technology />
      <Achivement />
      <Banner/>
      <Courses />
      <Image />
      <Numbers />
      <Admission />
      <Footer />
    </div>
  )
}

export default App
