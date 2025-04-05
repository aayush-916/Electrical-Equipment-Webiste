import React from 'react'
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Home from "./Home"
import Services from "./Services"
function Root() {
  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <Blog/>
      <Contact/>
    </>
  )
}

export default Root