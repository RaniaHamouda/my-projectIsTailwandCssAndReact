
import { Fragment } from 'react';
import Landing from '../components/Landing';
import Featues from '../components/Featues';
import StayProductive from '../components/StayProductive';
import Testimonials from '../components/Testimonials';
import GetStarted from '../components/GetStarted';




export default function Home() {
  return (
    <Fragment>
    <Landing />
    <Featues />
    <StayProductive/>
    <Testimonials/>
    <GetStarted/>
    </Fragment>
  )
}
