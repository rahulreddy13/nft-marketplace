import React from 'react';

export default function TopCollections() {

  let collection_list = [ 
    {
        user_name : "CryptoPunks",
        percentage : "-64.20%",
        floor_price : "1887.37"
    },
    {
      user_name : "STEPN Shoeboxes",
      percentage : "+74.19%",
      floor_price : "1340.47"
    },
      {
        user_name : "Otherdeed for other",
        percentage : "-39.22%",
        floor_price : "1106.55"
    }
    ,{
      user_name : "Factura by mathais",
      percentage : "-18.54%",
      floor_price : "1057.2"
    }
    ,{
      user_name : "Art Blocks Curated",
      percentage : "+143.74%",
      floor_price : "618.7"
    }
  ]

  return (
    <React.Fragment>
        <div className='top-collection-main'>
            <section className='top-collection-section display-flex'>
                <h2 className='top-collection-title'>Top collections over 24 hours</h2>
                <section className='top-collection-list-section display-flex'>
                    <div className='top-collection-pm-0'>
                      <div className='display-flex'>
                        <div className='top-collection-list-column display-flex'>

                          {
                            collection_list.map((collection , index) =>{

                              return (
                                <a key={index + '_collection'} className='top-collection-item display-flex'>
                                  <div className='top-collection-item-division display-flex'>
                                      <span className='top-collection-item-span'>
                                        <div className='top-collection-item-index'>{ index + 1 }</div>
                                      </span>
                                  </div>
                                  <div className="top-collection-image-text-area display-flex">
                                      <div className="avatar-main display-flex">
                                          <img alt="Featured creator" className="top-collection-image-avatar" src="https://openseauserdata.com/files/souls_featured_creator_image.jpg" size="38"/>
                                      </div>
                                      <div className="top-collection-image-content display-flex">
                                          <span className="top-collection-image-title-main">
                                              <span className="top-collection-image-title">{ collection.user_name }</span>
                                          </span>
                                          <span className="top-collection-image-creator">
                                              <span>Floor price:-</span> 
                                          </span>
                                      </div>


                                      <div className="top-collection-image-info display-flex">
                                          <span className="top-collection-image-title-main">
                                              <span className="top-collection-image-title" style={collection.percentage.includes('-') ? {
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    color: 'rgb(235, 87, 87)'                                                
                                              } : {
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    color: 'rgb(52, 199, 123)'
                                              }}>{collection.percentage }</span>
                                          </span>
                                          <span className="top-collection-image-creator">
                                              <span>{ collection.floor_price }</span> 
                                          </span>
                                      </div>
                                  </div>
                                </a>)
                            })
                          }
                        </div>
                        <div className='top-collection-list-column display-flex'>
                        {
                            collection_list.map((collection , index) =>{

                              return (
                                <a key={index + 6 + '_collection'} className='top-collection-item display-flex'>
                                  <div className='top-collection-item-division display-flex'>
                                      <span className='top-collection-item-span'>
                                        <div className='top-collection-item-index'>{ index + 6 }</div>
                                      </span>
                                  </div>
                                  <div className="top-collection-image-text-area display-flex">
                                      <div className="avatar-main display-flex">
                                          <img alt="Featured creator" className="top-collection-image-avatar" src="https://openseauserdata.com/files/souls_featured_creator_image.jpg" size="38"/>
                                      </div>
                                      <div className="top-collection-image-content display-flex">
                                          <span className="top-collection-image-title-main">
                                              <span className="top-collection-image-title">{ collection.user_name }</span>
                                          </span>
                                          <span className="top-collection-image-creator">
                                              <span>Floor price:-</span> 
                                          </span>
                                      </div>


                                      <div className="top-collection-image-info display-flex">
                                          <span className="top-collection-image-title-main">
                                              <span className="top-collection-image-title" style={collection.percentage.includes('-') ? {
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    color: 'rgb(235, 87, 87)'                                                
                                              } : {
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    color: 'rgb(52, 199, 123)'
                                              }}>{collection.percentage }</span>
                                          </span>
                                          <span className="top-collection-image-creator">
                                              <span>{ collection.floor_price }</span> 
                                          </span>
                                      </div>
                                  </div>
                                </a>)
                            })
                          }
                        </div>
                        <div className='top-collection-list-column display-flex'>
                        {
                            collection_list.map((collection , index) =>{

                              return (
                                <a key={index + 11 + '_collection'} className='top-collection-item display-flex'>
                                  <div className='top-collection-item-division display-flex'>
                                      <span className='top-collection-item-span'>
                                        <div className='top-collection-item-index'>{ index + 11 }</div>
                                      </span>
                                  </div>
                                  <div className="top-collection-image-text-area display-flex">
                                      <div className="avatar-main display-flex">
                                          <img alt="Featured creator" className="top-collection-image-avatar" src="https://openseauserdata.com/files/souls_featured_creator_image.jpg" size="38"/>
                                      </div>
                                      <div className="top-collection-image-content display-flex">
                                          <span className="top-collection-image-title-main">
                                              <span className="top-collection-image-title">{ collection.user_name }</span>
                                          </span>
                                          <span className="top-collection-image-creator">
                                              <span>Floor price:-</span> 
                                          </span>
                                      </div>


                                      <div className="top-collection-image-info display-flex">
                                          <span className="top-collection-image-title-main">
                                              <span className="top-collection-image-title" style={collection.percentage.includes('-') ? {
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    color: 'rgb(235, 87, 87)'                                                
                                              } : {
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    color: 'rgb(52, 199, 123)'
                                              }}>{collection.percentage }</span>
                                          </span>
                                          <span className="top-collection-image-creator">
                                              <span>{ collection.floor_price }</span> 
                                          </span>
                                      </div>
                                  </div>
                                </a>)
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <a className='top-collection-raning-btn'> Go to Rankings</a>
                </section>
            </section>
        </div>
    </React.Fragment>
  )

}