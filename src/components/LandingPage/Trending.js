import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card , CardContent , CardMedia , CardActionArea } from '@mui/material'

var items = [
    {
        Items: [
            {
                Name: "Latent Spirits by Robert Hodgin",
                Image: "https://lh3.googleusercontent.com/6ncMPIGUdWWyz9Ew7VwjTtlue6tZ4VbIa5-DF7IptLG_rYMSlq46GzWItiKB-scFdTdIYZxqH3-PNi3OWGhxYxAB4w-qTUNNilNi=h400"
            },
            {
                Name: "Elevated Deconstructions by luxpris",
                Image: "https://lh3.googleusercontent.com/H69qleEOebsnl69cnyyTI0n-bGDs0jtEc1t4ELkkmoste11pWtVGb5hOOt2Itlgm_U-4D_wCBPqp9arjMLmXPIUzeBfbujm2Vt0Q=h400"
            },
            {
                Name: "Degen Apocalypse Project By Ken Kelleher Labs",
                Image: "https://openseauserdata.com/files/03cb2c98d5990fa9dbe79a5f39f31214.png"
            }
        ]
    },
    {
        Items: [
            {
                Name: "Latent Spirits by Robert Hodgin",
                Image: "https://lh3.googleusercontent.com/6ncMPIGUdWWyz9Ew7VwjTtlue6tZ4VbIa5-DF7IptLG_rYMSlq46GzWItiKB-scFdTdIYZxqH3-PNi3OWGhxYxAB4w-qTUNNilNi=h400"
            },
            {
                Name: "Elevated Deconstructions by luxpris",
                Image: "https://lh3.googleusercontent.com/H69qleEOebsnl69cnyyTI0n-bGDs0jtEc1t4ELkkmoste11pWtVGb5hOOt2Itlgm_U-4D_wCBPqp9arjMLmXPIUzeBfbujm2Vt0Q=h400"
            },
            {
                Name: "Degen Apocalypse Project By Ken Kelleher Labs",
                Image: "https://openseauserdata.com/files/03cb2c98d5990fa9dbe79a5f39f31214.png"
            }
        ]
    },
    {
        Items: [
            {
                Name: "Latent Spirits by Robert Hodgin",
                Image: "https://lh3.googleusercontent.com/6ncMPIGUdWWyz9Ew7VwjTtlue6tZ4VbIa5-DF7IptLG_rYMSlq46GzWItiKB-scFdTdIYZxqH3-PNi3OWGhxYxAB4w-qTUNNilNi=h400"
            },
            {
                Name: "Elevated Deconstructions by luxpris",
                Image: "https://lh3.googleusercontent.com/H69qleEOebsnl69cnyyTI0n-bGDs0jtEc1t4ELkkmoste11pWtVGb5hOOt2Itlgm_U-4D_wCBPqp9arjMLmXPIUzeBfbujm2Vt0Q=h400"
            },
            {
                Name: "Degen Apocalypse Project By Ken Kelleher Labs",
                Image: "https://openseauserdata.com/files/03cb2c98d5990fa9dbe79a5f39f31214.png"
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
                                <Card xs={4} key={index + 'trending'} sx={{ width: '33%' , margin: '8px' }}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="224" image={item.Image} alt={item.Image +  index }/>
                                        <CardContent sx={{ padding: '16px' , borderRadius: '12px' , zIndex: 99 , marginTop: '-26px', display : 'flex'}}>
                                            <div className='trending-card-icon-main'>
                                                <img className="trending-card-icon-image" src={item.Image}/>
                                            </div>
                                            <div className='trending-card-icon-content'>
                                                <div className='trending-card-icon-content-text'>{ item.Name }</div>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                })
            }
        </div>
    )
}

export default function Trending() {

  return (
    <React.Fragment>
        <section className='trending-drops-main display-flex'>
            <div className='trending-section display-flex'>
                <h2 className='trending-title'>Trending in all categories</h2>
            </div>
            <div className='trending-carousal-main display-flex'>
                <div className='trending-carousal'>
                <Carousel autoPlay={false} animation={'slide'} indicators={true} navButtonsAlwaysVisible={true} className="Example">
                    {
                        items.map((item, index) => {
                            return <Banner items={item['Items']} key={index} />
                        })
                    }
                </Carousel>
                </div>
            </div>
        </section>
    </React.Fragment>
  )

}