import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card , CardContent , CardMedia , CardActionArea } from '@mui/material'

var items = [
  {
      Items: [
          {
              Name: "KINGSHIP",
              Description : "Minting genesis key card collection",
              Image: "https://openseauserdata.com/static/promocards/kingship-promocard.jpg"
          },
          {
              Name: "Petabytes By Luke McGarry",
              Description : "2,022 pieces, each one hand-drawn and unique",
              Image: "https://openseauserdata.com/static/promocards/peta-promocard.jpg"
          },
          {
              Name: "Bilnd Geometric",
              Description : "A collection of abstract geometric art",
              Image: "https://openseauserdata.com/static/promocards/blindgeometric-promocard.jpg"
          }
      ]
  },
  {
      Items: [
              {
                  Name: "KINGSHIP",
                  Description : "Minting genesis key card collection",
                  Image: "https://openseauserdata.com/static/promocards/kingship-promocard.jpg"
              },
              {
                  Name: "Petabytes By Luke McGarry",
                  Description : "2,022 pieces, each one hand-drawn and unique",
                  Image: "https://openseauserdata.com/static/promocards/peta-promocard.jpg"
              },
              {
                  Name: "Bilnd Geometric",
                  Description : "A collection of abstract geometric art",
                  Image: "https://openseauserdata.com/static/promocards/blindgeometric-promocard.jpg"
              }
      ]
  },
  {
      Items: [
          {
            Name: "KINGSHIP",
            Description : "Minting genesis key card collection",
            Image: "https://openseauserdata.com/static/promocards/kingship-promocard.jpg"
          },
          {
              Name: "Petabytes By Luke McGarry",
              Description : "2,022 pieces, each one hand-drawn and unique",
              Image: "https://openseauserdata.com/static/promocards/peta-promocard.jpg"
          },
          {
              Name: "Bilnd Geometric",
              Description : "A collection of abstract geometric art",
              Image: "https://openseauserdata.com/static/promocards/blindgeometric-promocard.jpg"
          }
      ]
  }
]

const Banner = (props) => {

  return (
      <div className='display-flex'>
          {
              props.items.map((item,index) =>{
                  return (
                        <div className="notable-main-card" key={index + item.Name}>
                          <a className="notable-anchor-main" style={{ backgroundImage: `url(${item.Image})` }}>
                            <div className="notable-main-division">
                              <div className="notable-main-div display-flex">
                                <div className="notable-live-ext-division display-flex">
                                  <div className="notable-live-division display-flex">
                                    <p className="notable-live-text">Live</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="notable-card display-flex">
                                <div className="notable-card-title">{ item.Name }</div>
                                <p className="notable-card-description">{ item.Description }</p>
                              </div>
                            </a>
                        </div>
                    )
              })
          }
      </div>
  )
}

export default function NotableDrops() {

  return (
    <React.Fragment>
        <div className='notable-drops-main'>
            <section className='notable-section display-flex'>
                <h2 className='notable-title'>Notable Drops</h2>
            </section>
            <div className='notable-carousal-main display-flex'>
                <div className='notable-carousal'>
                <Carousel autoPlay={false} animation={'slide'} indicators={true} navButtonsAlwaysVisible={true} className="Example">
                    {
                        items.map((item, index) => {
                            return <Banner items={item['Items']} key={index} />
                        })
                    }
                </Carousel>
                </div>
            </div>
        </div>
    </React.Fragment>
  )

}
