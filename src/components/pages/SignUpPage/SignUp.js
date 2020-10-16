import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

function SignUp() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default SignUp