import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CasesSection from '../components/Coursers'

const page = () => {
  return (
    <>
      <NavBar/>
      <Header title={'Who We '} colored='Are' desc='EduTrack is a state-of-the-art university management system designed to revolutionize the administrative and academic operations of Veritas Heights University.'/>
      <CasesSection/>
      <Footer/>
    </>
  )
}

export default page