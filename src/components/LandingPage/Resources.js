import React from 'react';
import { Card , CardContent , CardMedia , CardActionArea  } from '@mui/material'
export default function Resources() {

    return (
        <React.Fragment>
            <section className='resource-section display-flex'>
                <div className='display-flex resource-main-division'>
                    <h2 className='resource-main-title'>Resources for getting started</h2>
                    <div className='resource-main-container display-flex'>
                        <div className='resource-main-container-division'>
                            <div className='resource-main-slider'>
                                <div className='resource-main-slider-list'>
                                    <div className='resource-main-slider-list-track display-flex'>
                                        <Card sx={{ maxWidth: 414 , margin: '0px 10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="264"
                                                    image="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/image-13-300x200.png"
                                                    alt="green iguana"/>
                                                <CardContent>
                                                    <h3>How to Easily Setup a MetaMask Wallet</h3>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 414 , margin: '0px 10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="264"
                                                    image="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/76edde93ea6402d5818fbc03767aeda0-300x200.jpg"
                                                    alt="green iguana"/>
                                                <CardContent>
                                                    <h3>How to Fund MetaMask with ETH</h3>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 414 , margin: '0px 10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="264"
                                                    image="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/01/image-10-300x200.png"
                                                    alt="green iguana"/>
                                                <CardContent>
                                                    <h3>How to Find an NFT You Love</h3>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 414 , margin: '0px 10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="264"
                                                    width="394"
                                                    image="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/76edde93ea6402d5818fbc03767aeda0-300x200.jpg"
                                                    alt="green iguana"/>
                                                <CardContent>
                                                    <h3>How to buy Crypto</h3>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}