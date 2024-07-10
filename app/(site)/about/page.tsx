import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CasesSection from '../components/Coursers'

const page = () => {
  return (
    <>
      <NavBar/>
      <Header title={'Who We '} colored='Are'/>
      <CasesSection/>
      <Footer/>
    </>
  )
}

export default page