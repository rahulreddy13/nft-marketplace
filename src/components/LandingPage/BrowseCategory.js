import React from 'react';
import { Card , CardContent , CardMedia , CardActionArea  } from '@mui/material'
export default function BrowseCategory() {

    return (
        <React.Fragment>
            <section className='category-section display-flex'>
                <div className='display-flex category-main-division'>
                    <h2 className='category-main-title'>Browse by category</h2>
                    <div className='category-main-container display-flex'>
                        <div className='category-main-container-division'>
                            <div className='category-main-slider'>
                                <div className='category-main-slider-list'>
                                    <div className='category-main-slider-list-track'>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/art.png"
                                                    alt="Art"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Art</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/collectibles.png"
                                                    alt="Collectibles"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Collectibles</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/domain-names.png"
                                                    alt="Domain Names"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Domain Names</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/music.png"
                                                    alt="Music"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Music</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/photography-category.png"
                                                    alt="Photography"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Photography</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/sports.png"
                                                    alt="Sports"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Sports</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/trading-cards.png"
                                                    alt="Trading Cards"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Trading Cards</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/utility.png"
                                                    alt="Utility"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Utility</h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 340 , height: 240 , margin: '10px' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="183"
                                                    image="https://opensea.io/static/images/categories/virtual-worlds.png"
                                                    alt="Virtual Worlds"/>
                                                <CardContent sx={{ padding : 0 }}>
                                                    <h2 className='category-card-title'>Virtual Worlds</h2>
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