import React from 'react'
import { Card , CardContent , CardMedia , CardActionArea  } from '@mui/material'

export default function Banner() {

  return (
    <React.Fragment>
        <div className='Banner-Main display-flex'>
            <div className='featured-background-container'>
                <div className='banner-feature-image'></div>
            </div>
            <div className='featured-container display-flex'>
                <div className='featured-title display-flex'>
                    <h1 className="featured--header">Discover, collect, and sell extraordinary NFTs</h1>
                    <span className="featured-subheader">OpenSea is the world&apos;s first and largest NFT marketplace</span>
                    <div className="featured-button-container display-flex">
                        <div style={{ marginRight: '20px' }}>
                            <a className="featured-button blue-background">Explore</a>
                        </div>
                        <a className="featured-button white-background">Create</a>
                    </div>
                </div>
                <div className='featured-image display-flex'>
                    <Card sx={{ maxWidth: 480 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="360"
                            image="https://openseauserdata.com/files/souls_featured_image.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                                <div className="featured--image-text-area display-flex">
                                    <div size="38" className="avatar-main display-flex">
                                        <img alt="Featured creator" className="featured--image-avatar" src="https://openseauserdata.com/files/souls_featured_creator_image.jpg" size="38"/>
                                    </div>
                                    <div className="featured-image-content display-flex">
                                        <span className="featured-image-title-main">
                                            <span className="featured-image-title">SOULS, by SiA &amp; David OReilly</span>
                                        </span>
                                        <span className="featured-image-creator">
                                            <span>by </span> 
                                            <span>SoulsGalaxy</span>
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    </React.Fragment>
  )

}