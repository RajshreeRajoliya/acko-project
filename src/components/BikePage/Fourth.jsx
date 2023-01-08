
import { Grid } from '@chakra-ui/react'
import React from 'react'
import SingleCard from './SingleCard'
const array=[{
    heading:"Incredibly low premiums",
    content:"Thanks to our digital setup our operational costs are low and we  sell car insurance policies directly to you without middlemen commissions. This results in lower premiums."
  
  },
  {
  heading:"Stress-free claims",
  content:"Gone are days when you had to stress over raising a car insurance claim. With features such as free pickup and drop*, three-day repair guarantee*, and claim tracking, your claims experience with us is bound to be stress-free! (*as per terms and conditions)"
  },
  {
  heading:"Total convenience ",
  content:"Want to buy car insurance at midnight? Available. Renew the policy on a Sunday? Available. Raising claims on a public holiday? Available. With ACKO, you get total convenience for all things insurance!"
  },
  {
  heading:"Zero paperwork",
  content:"With ACKO, there’s no need to spend time and effort filling out physical forms to insure your car. Nor do you have to submit a long list of documents. Everything’s online!"
  },
  {
  heading:"Instant settlement",
  content:"ACKO offers instant settlement for minor claims. Major claims may take more time but are settled swiftly as well. Both minor and major claims are settled as per the applicable policy’s terms and conditions."
  },
  {
  heading:"24x7 Support",
  content:"We know that accidents are unpredictable. Thus, you can avail of our 24x7 support, one way or the other, as and when you require insurance assistance. We are just a call/click away!"
  }]
function Fourth() {
  return (
    <Grid  gap= "20px" padding="100px" gridTemplateColumns={'repeat(2,1fr)'}> {array.map(el=> <SingleCard heading={el.heading} content={el.content} />)}
    </Grid>
  )
}

export default Fourth