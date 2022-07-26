import React from 'react'
import { useRouter } from 'next/router'
import ShareIcon from '@mui/icons-material/Share'
import MoreIcon from '@mui/icons-material/MoreHoriz'
import SearchIcon from '@mui/icons-material/Search'
import FilterIcon from '@mui/icons-material/FilterList'
import KeyDownIcon from '@mui/icons-material/KeyboardArrowDown'
import WindowIcon from '@mui/icons-material/Window'
import GridIcon from '@mui/icons-material/Grid3x3'
import ExpandLess from '@mui/icons-material/ExpandLess'
import RefreshIcon from '@mui/icons-material/Refresh'
import FlagIcon from '@mui/icons-material/Flag'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const Collection = () => {

  const router = useRouter()
  const { collection } = router.query
  let title = collection ? collection.split('-').join(" ") : ""

  return (
    <main id="main" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 bJSVKl kKpYwv kuGBEl">
   <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 cUBiaH kKpYwv kuGBEl" height="100%">
      <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
         <div className="sc-1rljrty-1 rryiO">
            <div className="sc-1rljrty-2 guttCP">
               <div style={{ display:'block' , overflow:'hidden' , position:'absolute' , top:0 , left:0 , bottom:0 , right:0 , boxSizing:'border-box' , margin:0 }}>
                  <img alt="do not add any NFTs to this collection" src="https://openseauserdata.com/files/ca0e8dfa0bc868286b943884c9d08088.jpg" decoding="async" data-nimg="fill" className="sc-1rljrty-0 dcVgXv" style={{ position:'absolute' , top:0 , left:0 , bottom:0 , right:0 , boxSizing:'border-box' , padding:0 , border:'none' , margin:'auto' , display:'block' , width:0 , height:0 , minWidth:'100%' , maxWidth:'100%' , minHeight:'100%' , maxHeight:'100%' , objectFit:'cover' }} />
               </div>
            </div>
         </div>
         <div className="sc-1xf18x6-0 sc-z0wxa3-0 haVRLx gIYHTq">
            <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
               <div className="sc-1xf18x6-0 hCeHXP">
                  <div display="inline-flex" className="sc-1xf18x6-0 sc-ya60av-2 bItLLV bgeMUG">
                     <button type="button" className="sc-ty1bh0-0 sc-ya60av-1 infdiL iyPlfm">
                        <div style={{ display: 'block' , overflow: 'hidden' , position: 'absolute' , inset: '0px' , boxSizing: 'border-box' , margin: '0px' , }}>
                           <img alt="do not add any NFTs to this collection" src="https://openseauserdata.com/files/a835fd1f1e4ae3245ad7fbb705ddba3c.jpg" decoding="async" data-nimg="fill" className="sc-ya60av-0 omMKY" style={{ position: 'absolute' , inset: '0px' , boxSizing: 'border-box' , padding: '0px' , border: 'none' , margin: 'auto' , display: 'block' , width: '0px' , height: '0px' , minWidth: '100%' , maxWidth: '100%' , minHeight: '100%' , maxHeight: '100%' , objectFit: 'cover' }}/>
                        </div>
                     </button>
                  </div>
               </div>
               <div className="sc-1xf18x6-0 lhPGpb">
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
               </div>
            </div>
         </div>
         <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1qjo9xp-0 haVRLx kKpYwv jvjUxj">
            <div className="sc-1xf18x6-0 sc-z0wxa3-0 haVRLx gIYHTq">
               <div width="100%" className="sc-1xf18x6-0 sc-1twd32i-0 dfZqyL kKpYwv">
                  <div className="sc-1xf18x6-0 hCzFcM">
                     <div data-testid="phoenix-header" className="sc-1xf18x6-0 sc-1twd32i-0 sc-dcsatp-1 iQOhGx kKpYwv erPdGZ">
                        <div className="fresnel-container fresnel-lessThan-sm "></div>
                        <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                           <h1 width="100%" className="sc-1xf18x6-0 sc-1w94ul3-0 hJtcab fhMKvt">{ title }</h1>
                        </div>
                     </div>
                  </div>
                  <div className="sc-1xf18x6-0 lhPGpb">
                     <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
                           <div className="sc-1xf18x6-0 gXivZc"></div>
                           <div className="sc-1xf18x6-0 sc-1twd32i-0 gHrjiT kKpYwv">
                              <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
                                 <div className="fresnel-container fresnel-greaterThan-md ">
                                    <div className="sc-1xf18x6-0 cgSsDb">
                                        <Tippy content="Add to watchlist" placement="top">
                                            <button style={{ cursor : 'pointer' }} aria-label="Add to watchlist" data-testid="phoenix-watchlist-button" height="60px" className="sc-1xf18x6-0 sc-glfma3-0 beLEfx ldKPky sc-vzv608-1 fPmfMl" type="button">
                                                <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-vzv608-0 haVRLx iqOLSY fzFybJ">
                                                    <svg color="#04111D" style={{ height: '20px' , width:'20px' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.6,3.9l2.2,4.4c0.1,0.2,0.3,0.4,0.6,0.4l4.9,0.7c0.6,0.1,0.8,0.8,0.4,1.2l-3.6,3.4c-0.2,0.2-0.3,0.4-0.2,0.6 l0.8,4.9c0.1,0.6-0.5,1.1-1.1,0.8l-4.4-2.3c-0.2-0.1-0.5-0.1-0.7,0l-4.4,2.3c-0.5,0.3-1.2-0.2-1.1-0.8L7,14.8c0-0.2,0-0.5-0.2-0.6 l-3.6-3.4C2.8,10.3,3,9.5,3.6,9.4l4.9-0.7c0.2,0,0.4-0.2,0.6-0.4l2.2-4.4C11.6,3.4,12.4,3.4,12.6,3.9z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2.5"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </Tippy>
                                    </div>
                                 </div>
                                    
                                 <div className="sc-1xf18x6-0 cgSsDb" aria-expanded="false">
                                    <Tippy content="Share" placement="top">
                                        <Tippy className='jJDshU gGYZXW Dropdown Navbar--dropdown' 
                                            content={
                                                <React.Fragment>
                                                        <ul className="sc-1xf18x6-0 sc-6eey6c-0 sc-6eey6c-1 sc-fdgxb1-0 haVRLx hhOWiO jgJAwq ldysOp">
                                                            <li className="sc-197zmwo-0 lcXNuJ">
                                                                <button className="sc-ty1bh0-0 infdiL sc-1xf18x6-0 sc-1twd32i-0 sc-1idymv7-0 dIseSe kKpYwv fNIWSU" type="button">
                                                                    <div size="24" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 sc-s8gv83-0 fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                        <img src="https://opensea.io/static/images/logos/opensea.svg" size="24" className="sc-1xf18x6-0 sc-sbw25j-1 fhVUfN kGXfai" />
                                                                    </div>
                                                                    <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-1idymv7-1 haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                        <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-2 hyzwIu iqOLSY">Copy Link</span>
                                                                    </div>
                                                                </button>
                                                            </li>
                                                            <li className="sc-197zmwo-0 lcXNuJ">
                                                                <a className="sc-1pie21o-0 elyzfO sc-1xf18x6-0 sc-1twd32i-0 sc-1idymv7-0 dIseSe kKpYwv fNIWSU" href="https://www.facebook.com/sharer/sharer.php?u=https://opensea.io/collection/do-not-add-any-nfts-to-this-collection" rel="noreferrer" target="_blank">
                                                                    <div size="24" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 sc-s8gv83-0 fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                        <img src="https://opensea.io/static/images/logos/facebook.png" size="24" className="sc-1xf18x6-0 sc-sbw25j-1 fhVUfN kGXfai"/>
                                                                    </div>
                                                                    <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-1idymv7-1 haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                        <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-2 hyzwIu iqOLSY">Share on Facebook</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="sc-197zmwo-0 lcXNuJ">
                                                                <a className="sc-1pie21o-0 elyzfO sc-1xf18x6-0 sc-1twd32i-0 sc-1idymv7-0 dIseSe kKpYwv fNIWSU" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20collection%20on%20OpenSea&amp;url=https%3A%2F%2Fopensea.io%2Fcollection%2Fdo-not-add-any-nfts-to-this-collection&amp;via=opensea" rel="noreferrer" target="_blank">
                                                                    <div size="24" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 sc-s8gv83-0 fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                        <img src="https://opensea.io/static/images/logos/twitter.svg" size="24" className="sc-1xf18x6-0 sc-sbw25j-1 fhVUfN kGXfai"/>
                                                                    </div>
                                                                    <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-1idymv7-1 haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                        <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-2 hyzwIu iqOLSY">Share on Twitter</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                </React.Fragment>} 
                                            arrow={false}
                                            interactive={true}
                                            trigger={'click'}
                                            placement='bottom'>
                                                <button style={{ cursor : 'pointer' }} aria-label="Share" className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ ldKPky sc-vzv608-1 fPmfMl" type="button">
                                                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-vzv608-0 haVRLx iqOLSY fzFybJ">
                                                        <ShareIcon className="sc-1gugx8q-0 sc-11mzylr-2 fTKTZr dWEhbD material-icons" color="black"></ShareIcon>
                                                    </span>
                                                </button>
                                        </Tippy>
                                    </Tippy>
                                 </div>
                              </div>
                              <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv" aria-expanded="false">
                                    <Tippy content="More" placement="top">                 
                                        <Tippy className='jJDshU gGYZXW Dropdown Navbar--dropdown' 
                                                    content={
                                                        <React.Fragment>
                                                                <ul className="sc-1xf18x6-0 sc-6eey6c-0 sc-6eey6c-1 sc-fdgxb1-0 haVRLx hhOWiO jgJAwq ldysOp">
                                                                    <li className="sc-197zmwo-0 lcXNuJ">
                                                                        <button className="sc-ty1bh0-0 infdiL sc-1xf18x6-0 sc-1twd32i-0 sc-1idymv7-0 dIseSe kKpYwv fNIWSU" type="button">
                                                                            <div size="24" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 sc-s8gv83-0 fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                                <FlagIcon className="sc-1xf18x6-0 sc-sbw25j-1 fhVUfN kGXfai" />
                                                                            </div>
                                                                            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-1idymv7-1 haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                                <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1idymv7-2 hyzwIu iqOLSY">Report</span>
                                                                            </div>
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                        </React.Fragment>} 
                                                    arrow={false}
                                                    interactive={true}
                                                    trigger={'click'}
                                                    placement='bottom'>
                                                        
                                                <button style={{ cursor : 'pointer' }} aria-label="More dropdown" className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ ldKPky sc-vzv608-1 fPmfMl" type="button">
                                                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-vzv608-0 haVRLx iqOLSY fzFybJ">
                                                        <MoreIcon className="sc-1gugx8q-0 sc-11mzylr-1 fTdhIH jOurNM material-icons" color="black"></MoreIcon>
                                                    </span>
                                                </button>
                                            </Tippy>
                                    </Tippy>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="sc-1xf18x6-0 haVRLx">
            <div className="sc-1xf18x6-0 sc-z0wxa3-0 cOkkde kONhbl">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
                     <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv"></div>
                     </div>
                  </div>
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
               </div>
            </div>
         </div> */}
         <div className="sc-1xf18x6-0 sc-z0wxa3-0 hnKAL hWJuuu">
            <div className="sc-1xf18x6-0 haVRLx">
               <div className="sc-1xf18x6-0 haVRLx">
                  <div className="sc-1xf18x6-0 haVRLx">
                     <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1y1ib3i-4 geTfxr kKpYwv fTrQh">
                           <div className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1y1ib3i-7 hnNWdI idEpms jhzQUo">this is an all exclusive music collection</div>
                        </div>
                     </div>
                     <div className="fresnel-container fresnel-lessThan-sm "></div>
                     <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1y1ib3i-3 haVRLx kKpYwv iXVBxC">
                           {/* <div className="fresnel-container fresnel-lessThan-md "></div> */}
                           <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <button data-testid="collection-stats-items" type="button" className="sc-ty1bh0-0 sc-1y1ib3i-0 infdiL eIwwjN">
                                 <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1y1ib3i-1 jvONNN kKpYwv kYuJDx">
                                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx bjsuxj styledPhoenixText">
                                       <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">0</div>
                                    </span>
                                    <span color="text.subtle" className="sc-1xf18x6-0 sc-1w94ul3-0 hWGtNd esBwvv">items</span>
                                 </div>
                              </button>
                           </div>
                           {/* <div className="fresnel-container fresnel-lessThan-md "></div> */}
                           <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <a data-testid="collection-stats-owners"clearcccccc className="sc-1pie21o-0 elyzfO">
                                 <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1y1ib3i-1 jvONNN kKpYwv kYuJDx">
                                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx bjsuxj styledPhoenixText">
                                       <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">0</div>
                                    </span>
                                    <span color="text.subtle" className="sc-1xf18x6-0 sc-1w94ul3-0 hWGtNd esBwvv">owners</span>
                                 </div>
                              </a>
                           </div>
                           {/* <div className="fresnel-container fresnel-lessThan-md "></div> */}
                           <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <a data-testid="collection-stats-vol"clearcccccc className="sc-1pie21o-0 elyzfO">
                                 <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1y1ib3i-1 jvONNN kKpYwv kYuJDx">
                                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx bjsuxj styledPhoenixText">
                                       <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
                                          <div className="sc-1xf18x6-0 sc-1twd32i-0 jWPRhm kKpYwv">
                                             <button aria-label="ETH logo" type="button" className="sc-ty1bh0-0 infdiL">
                                                <div size="16" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 kjJFNV kKpYwv kuGBEl iVtKaT euUQqP jwEsBT"><img src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg" size="16" className="sc-1xf18x6-0 sc-sbw25j-1 kjJFNV kGXfai" /></div>
                                             </button>
                                          </div>
                                          0.00
                                       </div>
                                    </span>
                                    <span color="text.subtle" className="sc-1xf18x6-0 sc-1w94ul3-0 eelXvb esBwvv">total volume</span>
                                 </div>
                              </a>
                           </div>
                           {/* <div className="fresnel-container fresnel-lessThan-md "></div> */}
                           <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <a data-testid="collection-stats-fp" className="sc-1pie21o-0 elyzfO">
                                 <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1y1ib3i-1 jvONNN kKpYwv kYuJDx">
                                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx bjsuxj styledPhoenixText">
                                       <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">---</div>
                                    </span>
                                    <span color="text.subtle" className="sc-1xf18x6-0 sc-1w94ul3-0 hWGtNd esBwvv">floor price</span>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* <div className="fresnel-container fresnel-lessThan-md "></div> */}
                  </div>
               </div>
               <div className="sc-1xf18x6-0 irybCA">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 iQOhGx kKpYwv kuGBEl">
                     <div data-testid="ProfilePage--navbar" className="sc-1xf18x6-0 sc-1twd32i-0 sc-151637b-1 haVRLx kKpYwv kIdmoF">
                        <div className="fresnel-container fresnel-lessThan-sm "></div>
                        <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                           <nav className="sc-1xf18x6-0 tmuTM">
                              <ul className="sc-1xf18x6-0 sc-1twd32i-0 sc-151637b-0 iUhqVy kKpYwv ktDnWg">
                                 <li className="sc-1xf18x6-0 sc-1twd32i-0 sc-151637b-3 iQOhGx kKpYwv fdUYWr">
                                    <a className="sc-1pie21o-0 elyzfO sc-151637b-2 dbtnmu">
                                        <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-151637b-5 haVRLx jnCfKq hJTBMi">Items</span>
                                    </a>
                                  </li>
                                 <li className="sc-1xf18x6-0 sc-1twd32i-0 sc-151637b-3 iQOhGx kKpYwv gwbYfH">
                                    <a className="sc-1pie21o-0 elyzfO sc-151637b-2 dbtnmu"clearcccccc>
                                        <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-151637b-5 haVRLx jnCfKq kxbrGR">Activity</span>
                                    </a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sc-1po1rbf-6 bUKivE">
                  <span id="main-search-results"></span>
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1ijd57n-2 cgPDbR kKpYwv gwiGjx">
                     <div height="100%" width="calc(100vw - 17px)" className="sc-1xf18x6-0 sc-1ijd57n-3 iPxDPv gnBAoP">
                        <div className="fresnel-container fresnel-greaterThanOrEqual-lg sc-1ijd57n-1 bztMFC">
                           <div display="flex" height="100%" className="sc-1xf18x6-0 sc-z0wxa3-0 iYlnWr dIkxeU">
                              <div width="100%" className="sc-1xf18x6-0 sc-1twd32i-0 dtGTES kKpYwv">
                                 <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
                                    <div className="fresnel-container fresnel-greaterThanOrEqual-lg "><button aria-label="Close" data-testid="filter-toggle" className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ ldKPky sc-vzv608-1 fPmfMl" type="button"><span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-vzv608-0 haVRLx iqOLSY fzFybJ">
                                        <FilterIcon className="sc-1gugx8q-0 iguRBs material-icons-outlined"></FilterIcon></span></button></div>
                                 </div>
                                 <div width="100%" className="sc-1xf18x6-0 feUYB">
                                    <div width="100%" className="sc-1xf18x6-0 sc-1w94ul3-0 bSaLsG jAMCqW">
                                       <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx idEpms">
                                          <div className="sc-1po1rbf-4 hzuKyQ">
                                             <div className="sc-1xf18x6-0 bJSVKl">
                                                <div className="sc-3dr67n-0 ejWxVe" aria-expanded="true">
                                                   <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 ttmcH kKpYwv kuGBEl iVtKaT">
                                                        <SearchIcon className="sc-1gugx8q-0 lahtNG material-icons">search</SearchIcon>
                                                    </div>
                                                   <input aria-invalid="false" aria-controls="CollectionTraitSearch--results" id="trait-selector-input" placeholder="Search by name or attribute" role="searchbox" style={{ cursor: 'text' }} />
                                                </div>
                                                {/* <div data-tippy-root="" id="tippy-12" style={{ zIndex: 9999 , visibility: 'visible' , position: 'absolute' , inset: '0px auto auto 0px' , margin: '0px' , transform: 'translate(92px, 57px)' }}>
                                                   <div className="tippy-box sc-g852rw-0 jJDshU sc-1b2uz84-0 hSgtct Dropdown" data-state="visible" tabIndex="-1" data-animation="fade" role="tooltip" data-placement="bottom-start" data-escaped="" data-reference-hidden="" style={{ maxWidth: '100%' , transitionDuration: '300ms' }}>
                                                      <div className="tippy-content" data-state="visible" style={{ transitionDuration: '300ms' }}>
                                                         <div></div>
                                                      </div>
                                                   </div>
                                                </div> */}
                                             </div>
                                          </div>
                                       </span>
                                    </div>
                                 </div>
                                 <div width="240px" className="sc-1xf18x6-0 jrFKsY">
                                    <span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1po1rbf-0 haVRLx iqOLSY jdlAFo">
                                       <div className="fresnel-container fresnel-lessThan-lg sc-1po1rbf-1 hsgVfN"></div>
                                       <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                          <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                             <div className="sc-3dr67n-0 kvNabs sc-1shssly-0 bBQLVJ sc-1po1rbf-2 dCJWCu" cursor="pointer" aria-expanded="false">
                                                <input aria-invalid="false" placeholder="Sort by" readOnly="" aria-haspopup="true" style={{ cursor: 'pointer' }}/>
                                                <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 fPQIwX kKpYwv kuGBEl iVtKaT">
                                                    <KeyDownIcon className="sc-1gugx8q-0 dKJrxr material-icons"></KeyDownIcon></div>
                                             </div>
                                          </div>
                                          <div className="fresnel-container fresnel-lessThan-lg "></div>
                                       </div>
                                    </span>
                                 </div>
                                 <div className="sc-1xf18x6-0 fPQIwX">
                                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                                       <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1skvztv-1 haVRLx kKpYwv kgqWIT">
                                          <button className="sc-1xf18x6-0 sc-glfma3-0 jvONNN gNhhDU sc-1skvztv-0 fPnOUC sc-1kkabdn-0 dJBLDE sc-14mwoko-0 fdemPd" aria-pressed="true" disabled="" type="button">
                                             <div aria-hidden="true" pointerEvents="none" className="sc-1xf18x6-0 sc-1twd32i-0 bMAZiO kKpYwv">
                                                <WindowIcon className="sc-1gugx8q-0 eDaelx material-icons"></WindowIcon></div>
                                          </button>
                                          <button className="sc-1xf18x6-0 sc-glfma3-0 jvONNN gNhhDU sc-1skvztv-0 fPnOUC sc-1kkabdn-0 itwRql sc-14mwoko-0 gFTkxx" aria-pressed="false" type="button">
                                             <div aria-hidden="true" pointerEvents="none" className="sc-1xf18x6-0 sc-1twd32i-0 bMAZiO kKpYwv">
                                                <GridIcon className="sc-1gugx8q-0 eDaelx material-icons">grid_on</GridIcon></div>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div className="fresnel-container fresnel-lessThan-lg "></div> */}
                  <div className="sc-1xf18x6-0 cPWSa-d AssetSearchView--main">
                     {/* <div className="fresnel-container fresnel-lessThan-sm "></div> */}
                     <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                        {/* <div className="fresnel-container fresnel-lessThan-lg "></div> */}
                        <div className="sc-1xf18x6-0 sc-1hvbqwq-3 haVRLx kiMwjr fresnel-greaterThanOrEqual-lg">
                           <div className="sc-1xf18x6-0 jEfgUN">
                              <div className="sc-5fupus-1 iyyKfU">
                                 <div className="sc-1uztusg-0 dGPcNO Panel--isOpen" data-testid="Panel">
                                    <div className="sc-1d6z6bk-0 hakpaz Panel--panel">
                                       <button className="sc-ty1bh0-0 infdiL BasePanel--header Panel--header PhoenixFilter--header" aria-controls="Body featured-filter" aria-expanded="true" id="Header featured-filter" type="button"><span>Status</span>
                                       
                                       <ExpandLess className="sc-1gugx8q-0 fTdhIH Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled"></ExpandLess></button>
                                       <div className="BasePanel--body Panel--body" aria-labelledby="Header featured-filter" id="Body featured-filter" role="region">
                                          <div className="Panel--content-container" style={{ height: 'initial' }}>
                                             <div className="Panel--isContentPadded PhoenixFilter--body">
                                                <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-5fupus-0 haVRLx kKpYwv kuGBEl evOLHn">
                                                   <div className="sc-1b04elr-0 lpkQGD PhoenixFilter--scrollbox">
                                                      <div className="Scrollbox--content">
                                                         <ul display="flex" overflow="auto" className="sc-1xf18x6-0 sc-1d5p3io-0 fONxiP gOhFdQ">
                                                            <li width="100%" className="sc-1xf18x6-0 sc-1twd32i-0 bSaLsG kKpYwv">
                                                               <label aria-label="Buy_Now" color="#04111D" id="Buy_Now" name="phoenix-featured-filters" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1hhcumj-0 klqiSC idEpms gJGYld">
                                                                  <div className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx idEpms">Buy Now</div>
                                                                  <div className="sc-1xf18x6-0 sc-1twd32i-0 lhPGpb kKpYwv"><span className="sc-zw7s59-3 dICFpI" type="checkbox">
                                                                    <input type="checkbox" className="sc-zw7s59-1 hjgjTV"/></span></div>
                                                               </label>
                                                            </li>
                                                            <li width="100%" className="sc-1xf18x6-0 sc-1twd32i-0 bSaLsG kKpYwv">
                                                               <label aria-label="On_Auction" color="#04111D" id="On_Auction" name="phoenix-featured-filters" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1hhcumj-0 klqiSC idEpms gJGYld">
                                                                  <div className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx idEpms">On Auction</div>
                                                                  <div className="sc-1xf18x6-0 sc-1twd32i-0 lhPGpb kKpYwv"><span className="sc-zw7s59-3 dICFpI" type="checkbox">
                                                                    <input type="checkbox" className="sc-zw7s59-1 hjgjTV"/></span></div>
                                                               </label>
                                                            </li>
                                                            <li width="100%" className="sc-1xf18x6-0 sc-1twd32i-0 bSaLsG kKpYwv">
                                                               <label aria-label="Buy_with_Card" color="#04111D" id="Buy_with_Card" name="phoenix-featured-filters" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-1hhcumj-0 klqiSC idEpms gJGYld">
                                                                  <div className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx idEpms">Buy with Card</div>
                                                                  <div className="sc-1xf18x6-0 sc-1twd32i-0 lhPGpb kKpYwv"><span className="sc-zw7s59-3 dICFpI" type="checkbox">
                                                                    <input type="checkbox" className="sc-zw7s59-1 hjgjTV"/></span></div>
                                                               </label>
                                                            </li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                   <div height="16px" className="sc-1xf18x6-0 sc-1qd19p5-0 bIfAjg fPpvFY"></div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="sc-5fupus-1 iyyKfU">
                                 <div className="sc-1uztusg-0 dGPcNO Panel--isClosed" data-testid="Panel">
                                    <div className="sc-1d6z6bk-0 hakpaz Panel--panel">
                                       <button className="sc-ty1bh0-0 infdiL BasePanel--header Panel--header PhoenixFilter--header" aria-controls="Body filter-price" aria-expanded="false" id="Header filter-price" type="button"><span>Price</span>
                                       <KeyDownIcon className="sc-1gugx8q-0 fTdhIH Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled" ></KeyDownIcon></button>
                                       <div className="BasePanel--body Panel--body Panel--body-is-closed" aria-labelledby="Header filter-price" id="Body filter-price" role="region">
                                          <div className="Panel--content-container" style={{ height: 0 }}>
                                             <div className="Panel--isContentPadded PhoenixFilter--body"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="sc-5fupus-1 iyyKfU">
                                 <div className="sc-1uztusg-0 dGPcNO Panel--isClosed" data-testid="Panel">
                                    <div className="sc-1d6z6bk-0 hakpaz Panel--panel">
                                       <button className="sc-ty1bh0-0 infdiL BasePanel--header Panel--header PhoenixFilter--header" aria-controls="Body filter-amount" aria-expanded="false" id="Header filter-amount" type="button"><span>Quantity</span>
                                       <KeyDownIcon className="sc-1gugx8q-0 fTdhIH Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled" ></KeyDownIcon></button>
                                       <div className="BasePanel--body Panel--body Panel--body-is-closed" aria-labelledby="Header filter-amount" id="Body filter-amount" role="region">
                                          <div className="Panel--content-container" style={{ height: 0 }}>
                                             <div className="Panel--isContentPadded PhoenixFilter--body"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="sc-5fupus-1 iyyKfU">
                                 <div className="sc-1uztusg-0 dGPcNO Panel--isClosed" data-testid="Panel">
                                    <div className="sc-1d6z6bk-0 hakpaz Panel--panel">
                                       <button className="sc-ty1bh0-0 infdiL BasePanel--header Panel--header PhoenixFilter--header" aria-controls="Body filter-payment" aria-expanded="false" id="Header filter-payment" type="button"><span>Currency</span>
                                       <KeyDownIcon className="sc-1gugx8q-0 fTdhIH Panel--toggle Panel--isEnabled material-icons Panel--toggle Panel--isEnabled" ></KeyDownIcon></button>
                                       <div className="BasePanel--body Panel--body Panel--body-is-closed" aria-labelledby="Header filter-payment" id="Body filter-payment" role="region">
                                          <div className="Panel--content-container" style={{ height: 0 }}>
                                             <div className="Panel--isContentPadded PhoenixFilter--body PhoenixFilter--bottom-padding"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="AssetSearchView--results collection--results AssetSearchView--results--phoenix">
                        <div className="AssetSearchView--results-header AssetSearchView--results-header--phoenix"></div>
                        <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                           <div className="sc-1xf18x6-0 sc-1twd32i-0 bjzHsa kKpYwv">
                              <button className="sc-1xf18x6-0 sc-glfma3-0 vBLIL ldKPky sc-vzv608-1 fPmfMl" type="button"><span className="sc-1xf18x6-0 sc-1w94ul3-0 sc-vzv608-0 haVRLx iqOLSY fzFybJ">
                                <RefreshIcon className="sc-1gugx8q-0 fTdhIH material-icons"></RefreshIcon></span></button>
                              <p color="inherit" className="sc-1xf18x6-0 sc-1w94ul3-0 dddyun fuxBgD">
                                 0 items
                              </p>
                           </div>
                        </div>
                        <div className="sc-ixw4tc-0 kyBdWA">No items to display</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </div>
   </div>
</main>
  )
}

export default Collection