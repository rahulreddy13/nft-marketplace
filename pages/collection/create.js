import React , { useState } from "react"

import ImageIcon from "@mui/icons-material/Image";
import InfoIcon from "@mui/icons-material/Info";
import CheckIcon from '@mui/icons-material/CheckCircle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Create() {

  const [logoImage, setlogoImage] = useState(null);
  const [featuredImage, setfeaturedImage] = useState(null);
  const [bannerImage, setbannerImage] = useState(null);
  
  const handleFile = (e) => {

    let file = e.target.files[0];
    if(e.target.name === 'logoImage'){
      setlogoImage(file)
    }else if(e.target.name === 'featuredImage'){
      setfeaturedImage(file)
    }else{
      setbannerImage(file)
    }
};

  return (
    <React.Fragment>
      
      <div className="sc-lfnuca-0 kWhmfC CollectionManager--container CollectionManager--narrow-container">
        <header className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl">
            <h1 className="sc-1xf18x6-0 sc-1w94ul3-0 kXvtcH ictplK">Create a Collection</h1>
        </header>
        <form className="sc-1xf18x6-0 sc-1fkdq1o-0 sc-1fk81bu-0 haVRLx hSWFJK">
            <p className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe"><span className="StyledForm--required-label">*</span> Required fields</p>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="image" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq giarcl">Logo image</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">This image will also be used for navigation. 350 x 350 recommended.</span></div>
                  <div aria-label="Select a logo image" height="160px" width="160px" role="button" tabIndex="0" shape="round" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-3 hTaZOc kKpYwv kuGBEl iVtKaT euUQqP kpbMZa kQqVzr" style={{ position : 'relative' }}>
                    <input id="image" onChange={handleFile} name="logoImage" accept="image/*" type="file" tabIndex="-1" style={{ zIndex: 9 , cursor : 'pointer' , opacity: 0 ,width: '84px' ,height: '84px' , position: 'absolute' }}/>
                    {
                      logoImage ?
                      <React.Fragment>
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-0 haVRLx kKpYwv kuGBEl iVtKaT euUQqP dlYtpi">
                          <ImageIcon className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons"></ImageIcon>
                        </div>
                        <div className="sc-dy59cl-0 kdPOpy Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '100%' , width: '100%' }}>
                          <img alt={URL.createObjectURL(logoImage) + 'preview image'} className="Image--image" src={URL.createObjectURL(logoImage)} style={{ objectFit: 'cover' }} />
                        </div>
                      </React.Fragment> :
                      <React.Fragment>
                        <ImageIcon className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons"></ImageIcon>
                      </React.Fragment>
                    }
                    <div offset="4px" aria-hidden="true" className="sc-1yn7g51-0 fXgMMQ"></div>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="featuredImage" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Featured image</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">This image will be used for featuring your collection on the homepage, category pages, or other promotional areas of OpenSea. 600 x 400 recommended.</span></div>
                  <div aria-label="Select a featured image" height="200px" width="300px" role="button" tabIndex="0" shape="square" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-3 jFaNYB kKpYwv kuGBEl iVtKaT euUQqP kQqVzr">
                    <input id="featuredImage" onChange={handleFile} name="featuredImage" accept="image/*" type="file" tabIndex="-1" style={{ cursor : 'pointer' , zIndex: 9 , opacity: 0 ,width: '84px' ,height: '84px' , position: 'absolute'}}/>
                    {
                      featuredImage ?
                      <React.Fragment>
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-0 haVRLx kKpYwv kuGBEl iVtKaT euUQqP dlYtpi">
                          <ImageIcon className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons"></ImageIcon>
                        </div>
                        <div className="sc-dy59cl-0 eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '100%' , width: '100%' }}>
                          <img alt={URL.createObjectURL(featuredImage) + 'preview image'} className="Image--image" src={URL.createObjectURL(featuredImage)} style={{ objectFit: 'cover' }} />
                        </div>
                      </React.Fragment> :
                      <React.Fragment>
                        <ImageIcon className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons"></ImageIcon>
                      </React.Fragment>
                    }
                    <div offset="4px" aria-hidden="true" className="sc-1yn7g51-0 hhsgWl"></div>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="bannerImage" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Banner image</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 350 recommended.</span></div>
                  <div aria-label="Select a banner image" height="200px" role="button" tabIndex="0" shape="square" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-3 kbxGfk kKpYwv kuGBEl iVtKaT euUQqP kQqVzr">
                    <input id="bannerImage" onChange={handleFile} name="bannerImage" accept="image/*" type="file" tabIndex="-1" style={{ cursor : 'pointer' , zIndex: 9 , opacity: 0 ,width: '84px' ,height: '84px' , position: 'absolute'}}/>
                    {
                      bannerImage ?
                      <React.Fragment>
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-0 haVRLx kKpYwv kuGBEl iVtKaT euUQqP dlYtpi">
                          <ImageIcon className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons"></ImageIcon>
                        </div>
                        <div className="sc-dy59cl-0 eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '100%' , width: '100%' }}>
                          <img alt={URL.createObjectURL(bannerImage) + 'preview image'} className="Image--image" src={URL.createObjectURL(bannerImage)} style={{ objectFit: 'cover' }} />
                        </div>
                      </React.Fragment> :
                      <React.Fragment>
                        <ImageIcon className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons"></ImageIcon>
                      </React.Fragment>
                    }
                    <div offset="4px" aria-hidden="true" className="sc-1yn7g51-0 hhsgWl"></div>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="name" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 haVRLx jnCfKq giarcl">Name</label></div>
                  <div className="sc-17icy78-0 jwwcLH">
                    <div className="Input--main">
                        <div className="Input--prefix"></div>
                        <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className="browser-default Input--input" data-testid="Input" id="name" name="name" placeholder="Example: Treasures of the Sea" required="" spellCheck="false" type="text" />
                    </div>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="slug" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">URL</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">Customize your URL on OpenSea. Must only contain lowercase letters, numbers, and hyphens.</span></div>
                  <div className="sc-17icy78-0 jwwcLH">
                    <div className="Input--main">
                        <div className="Input--prefix">https://opensea.io/collection/</div>
                        <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className="browser-default Input--input" data-testid="Input" id="slug" name="slug" placeholder="treasures-of-the-sea" spellCheck="false" type="text" />
                    </div>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL CollectionForm--field">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="description" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Description</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe"><a className="sc-1pie21o-0 elyzfO" href="https://www.markdownguide.org/cheat-sheet/" rel="noreferrer" target="_blank">Markdown</a> syntax is supported. 0 of 1000 characters used.</span></div>
                  <textarea id="description" maxLength="1000" name="description" rows="4" className="sc-ehtjq3-0 boxrpc"></textarea>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="category" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Category</label>
                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">Adding a category will help make your item discoverable on OpenSea.</span></div>
                  <div className="CollectionForm--pills">
                    {/* <button className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ cAsYyw CollectionForm--category-button" type="button" aria-expanded="false">Add category</button> */}
                     <Tippy className='jJDshU gGYZXW Dropdown Navbar--dropdown' content={
                            <React.Fragment>
                                      <ul className="haVRLx hhOWiO jgJAwq ldysOp">
                                         <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/allnfts-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Movies</span>
                                                </div>
                                              </a>
                                          </li>
                                          <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/music-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Music</span>
                                                </div>
                                              </a>
                                          </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/collectibles-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Collectibles</span>
                                                </div>
                                              </a>
                                            </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/art-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Art</span>
                                                </div>
                                              </a>
                                            </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/domain-names-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Domain Names</span>
                                                </div>
                                              </a>
                                            </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/photography-category-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Photography</span>
                                                </div>
                                              </a>
                                            </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/sports-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Sports</span>
                                                </div>
                                              </a>
                                            </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/trading-cards-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Trading Cards</span>
                                                </div>
                                              </a>
                                            </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/utility-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Utility</span>
                                                </div>
                                              </a>
                                            </li>
                                            <li className="lcXNuJ">
                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                <div className="ttmcH">
                                                  <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                    <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/virtual-worlds-light.svg"/>
                                                  </div>
                                                </div>
                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                  <span fontSize="16px" className="jQJluE jnCfKq">Virtal Worlds</span>
                                                </div>
                                              </a>
                                            </li>
                                      </ul>
                            </React.Fragment>

                          } 
                          arrow={false}
                          interactive={true}
                          placement='bottom'>
                          <button className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ cAsYyw CollectionForm--category-button" type="button" aria-expanded="false">Add category</button>
                        </Tippy>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 haVRLx jnCfKq EDtcj">Links</label></div>
                  <div className="sc-1xf18x6-0 sc-u065ky-0 haVRLx Cpoux">
                    <div className="sc-3dr67n-0 ejWxVe">
                        <svg className="CollectionForm--link-logo" fill="#8A939B" viewBox="1 1 22 22">
                          <path clipRule="evenodd" d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM15.97 8H18.92C17.96 6.35 16.43 5.07 14.59 4.44C15.19 5.55 15.65 6.75 15.97 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4 12C4 12.69 4.1 13.36 4.26 14H7.64C7.56 13.34 7.5 12.68 7.5 12C7.5 11.32 7.56 10.66 7.64 10H4.26C4.1 10.64 4 11.31 4 12ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM5.08 8H8.03C8.35 6.75 8.81 5.55 9.41 4.44C7.57 5.07 6.04 6.34 5.08 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM9.5 12C9.5 12.68 9.57 13.34 9.66 14H14.34C14.43 13.34 14.5 12.68 14.5 12C14.5 11.32 14.43 10.65 14.34 10H9.66C9.57 10.65 9.5 11.32 9.5 12ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.5 12C16.5 12.68 16.44 13.34 16.36 14H19.74C19.9 13.36 20 12.69 20 12C20 11.31 19.9 10.64 19.74 10H16.36C16.44 10.66 16.5 11.32 16.5 12Z" fillRule="evenodd" id="icon/action/language_24px"></path>
                        </svg>
                        <input aria-invalid="false" id="externalUrl" placeholder="yoursite.io" style={{ cursor : 'text'}}/>
                    </div>
                    <div className="sc-3dr67n-0 ejWxVe">
                        <svg className="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 22 16">
                          <path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z"></path>
                        </svg>
                        <div className="Input--prefix">https://discord.gg/</div>
                        <input aria-invalid="false" id="discordUrl" placeholder="abcdef" style={{ cursor : 'text'}}/>
                    </div>
                    <div className="sc-3dr67n-0 ejWxVe">
                        <svg className="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 24 24">
                          <path d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z"></path>
                          <path d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z"></path>
                          <path d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z"></path>
                        </svg>
                        <div className="Input--prefix">https://www.instagram.com/</div>
                        <input aria-invalid="false" id="instagramUsername" placeholder="YourInstagramHandle" style={{ cursor : 'text'}}/>
                    </div>
                    <div className="sc-3dr67n-0 ejWxVe">
                        <svg className="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 18 15">
                          <path d="M17.83 14.847h-7.003c.088-.186.129-.34.225-.444.37-.388.781-.744 1.143-1.131.113-.122.218-.324.218-.485.016-2.56.008-5.113.008-7.674 0-.04-.008-.073-.032-.21-.089.218-.153.355-.21.493-1.191 3.029-2.39 6.066-3.582 9.095-.072.178-.096.372-.386.372-.282.008-.362-.153-.45-.355a4583.69 4583.69 0 01-4.163-9.112c-.072-.154-.144-.307-.281-.445v.3c0 2.124-.016 4.248.008 6.38 0 .243.12.526.273.728.532.694 1.103 1.357 1.65 2.036.09.113.137.258.234.444H.122c.088-.186.136-.348.233-.46.523-.647 1.046-1.293 1.585-1.931.234-.283.338-.582.338-.954-.016-2.544 0-5.089-.024-7.633 0-.267-.129-.574-.29-.792-.426-.582-.91-1.107-1.352-1.664C.507 1.268.452 1.098.33.872h2.182c.87 0 1.747.008 2.616-.008.282-.008.418.089.531.347 1.192 2.658 2.407 5.3 3.614 7.949.049.105.105.21.186.371.563-1.405 1.11-2.754 1.65-4.103.571-1.422 1.127-2.844 1.706-4.257.049-.121.193-.291.29-.291C14.667.864 16.22.872 17.878.872c-.112.194-.16.34-.257.444-.37.372-.773.711-1.12 1.099-.144.161-.265.412-.265.622-.016 3.215-.016 6.43 0 9.653 0 .21.121.46.266.622.338.388.724.719 1.079 1.09.08.106.136.251.25.445z"></path>
                        </svg>
                        <div className="Input--prefix">https://www.medium.com/@</div>
                        <input aria-invalid="false" id="mediumUsername" placeholder="YourMediumHandle" style={{ cursor : 'text'}}/>
                    </div>
                    <div className="sc-3dr67n-0 ejWxVe">
                        <svg className="CollectionForm--link-logo" fill="#8A939B" viewBox="0 0 24 16">
                          <path clipRule="evenodd" d="M18.28 15.456c.317.168.725.21 1.09.107.363-.104.631-.337.712-.62.854-3.013 2.928-10.64 3.706-13.38.06-.207-.04-.421-.256-.56A1 1 0 0022.748.9C18.625 2.045 5.921 5.62.729 7.06c-.329.092-.543.33-.532.59.012.262.246.488.583.564 2.329.522 5.385 1.25 5.385 1.25s1.428 3.234 2.173 4.88c.093.206.309.369.593.425.283.055.586-.003.798-.153l3.046-2.157s3.513 1.933 5.506 2.997zM7.45 9.054L9.1 13.14l.367-2.587 10.02-6.778c.106-.072.12-.193.032-.278-.088-.085-.249-.104-.37-.047L7.45 9.054z" fillRule="evenodd"></path>
                        </svg>
                        <div className="Input--prefix">https://t.me/</div>
                        <input aria-invalid="false" id="telegramUrl" placeholder="abcdef" style={{ cursor : 'text'}}/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl">
                    <label htmlFor="devSellerFeePercentage" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Creator Earnings</label>
                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">
                        <div>Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing.</div>
                        <a className="sc-1pie21o-0 elyzfO" href="https://openseahelp.zendesk.com/hc/en-us/articles/1500009575482" rel="noreferrer" target="_blank">Learn more about creator earnings</a>.
                        <div className="sc-1xf18x6-0 sc-1w94ul3-0 dbNgxn gFkYdd">Percentage fee</div>
                    </span>
                  </div>
                  <div className="sc-3dr67n-0 ejWxVe"><input aria-invalid="false" id="devSellerFeePercentage" name="devSellerFeePercentage" placeholder="e.g. 2.5" style={{ cursor : 'text'}}/></div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl">
                    <label htmlFor="defaultChain" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Blockchain</label>
                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">
                        Select the blockchain where you&apos;d like new items from this collection to be added by default.
                        <div display="inline-block" className="sc-1xf18x6-0 bgCZQh"><button type="button" className="sc-ty1bh0-0 infdiL">
                          <InfoIcon className="sc-1gugx8q-0 ghOguz material-icons-outlined">info</InfoIcon></button></div>
                    </span>
                  </div>
                  <div className="sc-3dr67n-0 kvNabs sc-1shssly-0 bBQLVJ" cursor="pointer" aria-expanded="false">
                    <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 gSeoas kKpYwv kuGBEl iVtKaT">
                        <div size="32" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 cbgydV kKpYwv kuGBEl iVtKaT euUQqP kdctGP">
                          <span className="sc-1xf18x6-0 sc-sbw25j-1 cbgydV kGXfai" style={{ display: 'inline-block' }}>
                          {/* <img alt="" className="Image--image" src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022"/> */}
                             Polygon 
                          </span>
                        </div>
                    </div>
                    {/* <input aria-invalid="false" id="defaultChain" name="defaultChain" aria-haspopup="true" style={{ cursor: 'pointer' }}/> */}
                    <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 fPQIwX kKpYwv kuGBEl iVtKaT">
                      <KeyboardArrowDownIcon className="sc-1gugx8q-0 dKJrxr material-icons"></KeyboardArrowDownIcon></div>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="paymentAssetRelayIds" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Payment tokens</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">These tokens can be used to buy and sell your items.</span></div>
                  <div className="CollectionForm--pills">
                    <div className="sc-1xf18x6-0 sc-139h1ex-0 sc-1kyfrj4-0 haVRLx eGJCNc enAlEP CollectionForm--pill" data-testid="Pill">
                        <span>
                          <div className="sc-1xf18x6-0 sc-1twd32i-0 haVRLx kKpYwv">
                              <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-12mizad-0 iQOhGx kKpYwv">
                                <div size="24" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 sc-s8gv83-0 fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA"><span className="sc-1xf18x6-0 sc-sbw25j-1 fhVUfN kGXfai" style={{ display: 'inline-block' }}></span></div>
                              </div>
                              <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-1idymv7-1 haVRLx kKpYwv kuGBEl iVtKaT cjftsJ"><span fontSize="14px" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-2 hyzwIu iqOLSY">ETH</span><span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-6 cwzfDK fBGJrx">Rinkeby</span></div>
                          </div>
                        </span>
                    </div>
                    <div className="sc-1xf18x6-0 sc-139h1ex-0 sc-1kyfrj4-0 haVRLx eGJCNc enAlEP CollectionForm--pill" data-testid="Pill">
                        <span>
                          <div className="sc-1xf18x6-0 sc-1twd32i-0 haVRLx kKpYwv">
                              <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-12mizad-0 iQOhGx kKpYwv">
                                <div size="24" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 sc-s8gv83-0 fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA"><span className="sc-1xf18x6-0 sc-sbw25j-1 fhVUfN kGXfai" style={{ display: 'inline-block' }}></span></div>
                              </div>
                              <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-1idymv7-1 haVRLx kKpYwv kuGBEl iVtKaT cjftsJ"><span fontSize="14px" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-2 hyzwIu iqOLSY">WETH</span><span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-6 cwzfDK fBGJrx">Rinkeby</span></div>
                          </div>
                        </span>
                    </div>
                  </div>
                  <div className="sc-3dr67n-0 ejWxVe sc-1shssly-0 bBQLVJ" aria-expanded="false">
                    <input aria-invalid="false" id="paymentAssetRelayIds" placeholder="Add token" aria-haspopup="true" style={{ cursor : 'text'}}/>
                    <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 fPQIwX kKpYwv kuGBEl iVtKaT">
                      <KeyboardArrowDownIcon className="sc-1gugx8q-0 dKJrxr material-icons"></KeyboardArrowDownIcon>
                    </div>
                  </div>
              </div>
            </div>
            {/* <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Display theme</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">Change how your items are shown.</span></div>
                  <div className="CollectionForm--card-display-styles">
                    <button className="sc-ty1bh0-0 infdiL CollectionForm--card-display-style" type="button">
                        <div className="CollectionForm--card-display-style-card has-dark-mode">
                          <img alt="" className="CollectionForm--card-display-style-image" src="https://testnets.opensea.io/static/images/card-display-padded.svg"/>
                          <header className="CollectionForm--card-display-style-title">Padded</header>
                          <div className="CollectionForm--card-display-style-description">Recommended for assets with transparent background</div>
                        </div>
                    </button>
                    <button className="sc-ty1bh0-0 infdiL CollectionForm--card-display-style CollectionForm--card-display-style-checked" type="button">
                        <div className="CollectionForm--card-display-style-card has-dark-mode">
                          <img alt="" className="CollectionForm--card-display-style-image" src="https://testnets.opensea.io/static/images/card-display-contain.svg"/>
                          <header className="CollectionForm--card-display-style-title">Contained</header>
                          <div className="CollectionForm--card-display-style-description">Recommended for assets that are not a 1:1 ratio</div>
                        </div>
                        <CheckIcon className="sc-1gugx8q-0 fTdhIH CollectionForm--card-display-style-checkmark material-icons CollectionForm--card-display-style-checkmark"></CheckIcon>
                    </button>
                    <button className="sc-ty1bh0-0 infdiL CollectionForm--card-display-style" type="button">
                        <div className="CollectionForm--card-display-style-card has-dark-mode">
                          <img alt="" className="CollectionForm--card-display-style-image" src="https://testnets.opensea.io/static/images/card-display-cover.svg" />
                          <header className="CollectionForm--card-display-style-title">Covered</header>
                          <div className="CollectionForm--card-display-style-description">Recommended for assets that can extend to the edge</div>
                        </div>
                    </button>
                  </div>
              </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
              <div className="sc-1xf18x6-0 sc-1twd32i-0 bNYgYV kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl">
                    <label htmlFor="isNsfw" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Explicit &amp; sensitive content</label>
                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">
                        <header className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">Set this collection as explicit and sensitive content
                        <InfoIcon className="sc-1gugx8q-0 sc-ydme6o-0 ilFyiM btdSOo material-icons-outlined"></InfoIcon></header>
                    </span>
                  </div>
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 haVRLx kKpYwv kuGBEl iVtKaT euUQqP">
                    <input className="sc-taymdu-0 kUXhVV" role="switch" type="checkbox" id="isNsfw"/></div>
              </div>
            </div> */}
            <div className="sc-1xf18x6-0 sc-1twd32i-0 haVRLx kKpYwv CollectionForm--submit"><button disabled="" type="submit" className="sc-1xf18x6-0 sc-glfma3-0 fipirY eqgvEc">Create</button></div>
        </form>
      </div>
    </React.Fragment>
  )
}
