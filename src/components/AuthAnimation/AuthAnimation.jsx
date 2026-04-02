import React from 'react'
import authAnimation from '../../assets/animationData/authentication.json'
import Lottie from 'lottie-react'

const AuthAnimation = () => {
  return (
    <Lottie 
        animationData={authAnimation} 
        loop={true} 
        autoplay={true} 
      />
  )
}

export default AuthAnimation
