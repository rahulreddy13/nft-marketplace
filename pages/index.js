import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Authenticate } from '../src/actions/wow'
import { wrapper } from '../store';
import Footer from "../src/components/Footer";
import Banner from '../src/components/LandingPage/Banner'
import NotableDrops from '../src/components/LandingPage/NotableDrops'
import TopCollections from '../src/components/LandingPage/TopCollections';
import CreateAndSell from '../src/components/LandingPage/CreateAndSell';
import Resources from '../src/components/LandingPage/Resources';
import BrowseCategory from '../src/components/LandingPage/BrowseCategory';
import MeetNFT from '../src/components/LandingPage/MeetNFT';
import Trending from '../src/components/LandingPage/Trending';

export default function Home() {

  return (
    <React.Fragment>
      <div className='content-body-divison'>
        <Banner />
        <NotableDrops />
        <TopCollections />
        <Trending />
        <CreateAndSell />
        <Resources />
        <BrowseCategory />
        {/* <MeetNFT /> */}
      </div>
      <Footer />
    </React.Fragment>
  )

}

export const getStaticProps = wrapper.getStaticProps((store) =>{
  store.dispatch(Authenticate({ isAuthenticated : false }))
})
