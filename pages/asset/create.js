import React , { useState } from "react"

import ImageIcon from "@mui/icons-material/Image";
import InfoIcon from "@mui/icons-material/Info";
import CheckIcon from '@mui/icons-material/CheckCircle'
import ListIcon from '@mui/icons-material/List'
import StarIcon from '@mui/icons-material/Star'
import Stats from '@mui/icons-material/BarChart'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown'
import WarningIcon from '@mui/icons-material/Warning'
import AddIcon from '@mui/icons-material/Add'

export default function Create() {

   const [File, SetFile] = useState(null);
   const [FileType , SetFileType] = useState(null);
   const [ShowAudioDiv , SetShowAudioDiv]= useState(false)

   const handleFile = (e) => {

      let File = e.target.files[0]
      if(File.type.includes('image')){

         SetFileType('image');
         SetShowAudioDiv(false)

      }else if(File.type.includes('audio')){

         SetFileType('audio');
         SetShowAudioDiv(true)

      }else if(File.type.includes('video')){

         SetFileType('video')
         SetShowAudioDiv(false)
      }
      SetFile(File);

   }

  return (
    <React.Fragment>
      <div className="sc-lfnuca-0 kWhmfC CollectionManager--container CollectionManager--narrow-container">
         <header className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl">
            <h1 className="sc-1xf18x6-0 sc-1w94ul3-0 kXvtcH ictplK">Create New Item</h1>
         </header>
         <form className="sc-1xf18x6-0 sc-1fkdq1o-0 sc-1rb2baf-0 haVRLx eLeqps">
            <p className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe"><span className="AssetForm--required-label">*</span> Required fields</p>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="media" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq giarcl">Image, Video, Audio, or 3D Model</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
                     GLB, GLTF. Max size: 100 MB</span>
                  </div>
                  {
                     !ShowAudioDiv ?
                     <div height="257px" width="350px" role="button" tabIndex="0" aria-label="Select an image, video, audio or 3D model file" shape="square" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-3 lbhdXq kKpYwv kuGBEl iVtKaT euUQqP kQqVzr" style={{ position : 'relative' }}>
                        {
                           !File || FileType !== 'video' ?
                           <input onChange={handleFile} id="media" name="media" type="file" tabIndex="-1" style={{ cursor : 'pointer' , zIndex: 9 , opacity: 0 ,width: '128px' ,height: '128px' , position: 'absolute' }} /> :
                           null
                        }
                        {
                        File ? 
                        <React.Fragment>
                           {  
                              FileType === 'image' ?
                                 <React.Fragment>
                                    <div className="sc-dy59cl-0 eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '100%' , width: '100%' }}>
                                       <img alt={URL.createObjectURL(File) + 'preview image'} className="Image--image" src={URL.createObjectURL(File)} style={{ objectFit: 'cover' }} />
                                    </div>
                                 </React.Fragment> :
                                 FileType === 'video' ?
                                 <React.Fragment>
                                    <video controls autoPlay style={{ width : '100%' , height : "calc(100% - 50px)" }}>
                                       <source src={URL.createObjectURL(File)}></source>
                                    </video>
                                    <div className="sc-1xf18x6-0 cXJFPW">
                                       <div role="button" tabIndex="0" aria-label="Select an image, video, audio or 3D model file" shape="square" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-3 haVRLx kKpYwv kuGBEl iVtKaT euUQqP jGlSeY">
                                          <input id="media" onChange={handleFile} name="media" type="file" tabIndex="-1" style={{ cursor : 'pointer' , zIndex: 9 , opacity: 0 ,width: '128px' ,height: '128px' , position: 'absolute' }} />
                                          <p className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx gysUQr">Change</p>
                                          <div aria-hidden="true" className="sc-1yn7g51-0 iwduDE"></div>
                                       </div>
                                    </div>
                                 </React.Fragment> :
                                 null
                           }
                        </React.Fragment>
                        : 
                        <React.Fragment>
                           <ImageIcon className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons" style={{ fontSize : '128px' }}></ImageIcon>
                        </React.Fragment>
                        }
                        <div offset="4px" aria-hidden="true" className="sc-1yn7g51-0 hhsgWl"></div>
                     </div>
                     :
                     <React.Fragment>
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-uyfxue-0 cssZvF kKpYwv kuGBEl gzSIjj">
                           <audio controls autoPlay style={{ width : '100%'}}>
                              <source src={URL.createObjectURL(File)}></source>
                           </audio>
                           <div className="sc-1xf18x6-0 cXJFPW">
                              <div role="button" tabIndex="0" aria-label="Select an image, video, audio or 3D model file" shape="square" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-3 haVRLx kKpYwv kuGBEl iVtKaT euUQqP jGlSeY">
                              <input id="media" onChange={handleFile} name="media" type="file" tabIndex="-1" style={{ cursor : 'pointer' ,zIndex: 9 , opacity: 0 ,width: '128px' ,height: '128px' , position: 'absolute' }} />
                                 <p className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx gysUQr">Change</p>
                                 <div aria-hidden="true" className="sc-1yn7g51-0 iwduDE"></div>
                              </div>
                           </div>
                        </div>
                     </React.Fragment>
                  }
               </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="name" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 haVRLx jnCfKq giarcl">Name</label></div>
                  <div className="sc-17icy78-0 jwwcLH">
                     <div className="Input--main">
                        <div className="Input--prefix"></div>
                        <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className="browser-default Input--input" data-testid="Input" id="name" name="name" placeholder="Item name" required="" spellCheck="false" type="text" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl">
                     <label htmlFor="external_link" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">External link</label>
                     <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe"> OpenSea will include a link to this URL on this item&apos;s detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</span>
                  </div>
                  <div className="sc-17icy78-0 jwwcLH">
                     <div className="Input--main">
                        <div className="Input--prefix"></div>
                        <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className="browser-default Input--input" data-testid="Input" id="external_link" name="external_link" placeholder="https://yoursite.io/item/123" spellCheck="false" type="text" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="description" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Description</label><span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">The description will be included on the item&apos;s detail page underneath its image. <a className="sc-1pie21o-0 elyzfO" href="https://www.markdownguide.org/cheat-sheet/" rel="noreferrer" target="_blank">Markdown</a> syntax is supported.</span></div>
                  <textarea id="description" name="description" placeholder="Provide a detailed description of your item." rows="4" className="sc-ehtjq3-0 boxrpc"></textarea>
               </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl">
                     <label htmlFor="collection" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Collection</label>
                     <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">
                        This is the collection where your item will appear. 
                        <div className="AssetForm--info-cta"><button type="button" className="sc-ty1bh0-0 infdiL" aria-expanded="false">
                        <InfoIcon className="sc-1gugx8q-0 fTKTZr material-icons-outlined"></InfoIcon>
                     </button></div>
                     </span>
                  </div>
                  <div className="sc-3dr67n-0 ejWxVe sc-1shssly-0 bBQLVJ" aria-expanded="false">
                     <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 gSeoas kKpYwv kuGBEl iVtKaT">
                        <div size="24" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 fhVUfN kKpYwv kuGBEl iVtKaT euUQqP kdctGP">
                        <img src="https://openseauserdata.com/files/6687bf885e1a5d625aecaee17d1e5b14.jpg" size="24" className="sc-1xf18x6-0 sc-sbw25j-1 fhVUfN kGXfai" /></div>
                     </div>
                     <input aria-invalid="false" id="collection" name="collection" placeholder="Select collection" aria-haspopup="true" style={{ cursor: 'text' }} />
                     <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 fPQIwX kKpYwv kuGBEl iVtKaT">
                     <DownArrowIcon className="sc-1gugx8q-0 dKJrxr material-icons"></DownArrowIcon></div>
                  </div>
               </div>
            </div>
            <section className="sc-1xf18x6-0 eordpC">
               <div className="sc-j28e67-0 cOLPmp">
                  <div className="AssetFormTraitSection--item">
                     <div className="AssetFormTraitSection--content">
                        <ListIcon className="sc-1gugx8q-0 fTdhIH material-icons"></ListIcon>
                        <div className="AssetFormTraitSection--content-main">
                           <span className="AssetFormTraitSection-input-label">Properties</span>
                           <p className="AssetFormTraitSection--input-header">Textual traits that show up as rectangles</p>
                        </div>
                     </div>
                     <div className="AssetFormTraitSection--side">
                        <button aria-label="Add properties" type="button" className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ hZdMrQ">
                           <div aria-hidden="true" pointerEvents="none" className="sc-1xf18x6-0 sc-1twd32i-0 bMAZiO kKpYwv">
                              <AddIcon className="sc-1gugx8q-0 fTvbZt material-icons"></AddIcon>
                              </div>
                        </button>
                     </div>
                  </div>
               </div>
               <div className="sc-j28e67-0 cOLPmp">
                  <div className="AssetFormTraitSection--item">
                     <div className="AssetFormTraitSection--content">
                        <StarIcon className="sc-1gugx8q-0 fTdhIH material-icons"></StarIcon>
                        <div className="AssetFormTraitSection--content-main">
                           <span className="AssetFormTraitSection-input-label">Levels</span>
                           <p className="AssetFormTraitSection--input-header">Numerical traits that show as a progress bar</p>
                        </div>
                     </div>
                     <div className="AssetFormTraitSection--side">
                        <button aria-label="Add levels" type="button" className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ hZdMrQ">
                           <div aria-hidden="true" pointerEvents="none" className="sc-1xf18x6-0 sc-1twd32i-0 bMAZiO kKpYwv">
                              <AddIcon className="sc-1gugx8q-0 fTvbZt material-icons"></AddIcon>
                              </div>
                        </button>
                     </div>
                  </div>
               </div>
               <div className="sc-j28e67-0 cOLPmp">
                  <div className="AssetFormTraitSection--item">
                     <div className="AssetFormTraitSection--content">
                        <Stats className="sc-1gugx8q-0 fTdhIH material-icons"></Stats>
                        <div className="AssetFormTraitSection--content-main">
                           <span className="AssetFormTraitSection-input-label">Stats</span>
                           <p className="AssetFormTraitSection--input-header">Numerical traits that just show as numbers</p>
                        </div>
                     </div>
                     <div className="AssetFormTraitSection--side">
                        <button aria-label="Add stats" type="button" className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ hZdMrQ">
                           <div aria-hidden="true" pointerEvents="none" className="sc-1xf18x6-0 sc-1twd32i-0 bMAZiO kKpYwv">
                              <AddIcon className="sc-1gugx8q-0 fTvbZt material-icons"></AddIcon>
                           </div>
                        </button>
                     </div>
                  </div>
               </div>
               <div className="AssetForm--has-unlockable-content">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-jjxyhg-0 haVRLx kKpYwv gakOkv">
                     <div>
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 haVRLx kKpYwv">
                           <LockOpenIcon className="sc-1gugx8q-0 eDsRvo material-icons"></LockOpenIcon>
                           <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 eqZsFH kKpYwv kuGBEl">
                              <label className="sc-1xf18x6-0 haVRLx AssetForm-input-label" htmlFor="unlockable-content-toggle">Unlockable Content</label>
                              <header className="AssetForm--input-header">Include unlockable content that can only be revealed by the owner of the item.</header>
                           </div>
                        </div>
                     </div>
                     <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 haVRLx kKpYwv kuGBEl iVtKaT">
                     <input className="sc-taymdu-0 kUXhVV" role="switch" type="checkbox" id="unlockable-content-toggle"/></div>
                  </div>
               </div>
               <div className="AssetForm--is-explicit-content">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-jjxyhg-0 haVRLx kKpYwv gakOkv">
                     <div>
                        <div className="sc-1xf18x6-0 sc-1twd32i-0 haVRLx kKpYwv">
                           <WarningIcon className="sc-1gugx8q-0 fTdhIH material-icons"></WarningIcon>
                           <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 eqZsFH kKpYwv kuGBEl">
                              <label className="sc-1xf18x6-0 haVRLx AssetForm-input-label" htmlFor="explicit-content-toggle">Explicit &amp; Sensitive Content</label>
                              <header className="sc-1xf18x6-0 haVRLx AssetForm--input-header">Set this item as explicit and sensitive content
                              <InfoIcon className="sc-1gugx8q-0 sc-ydme6o-0 ilFyiM btdSOo material-icons-outlined" aria-expanded="false"></InfoIcon></header>
                           </div>
                        </div>
                     </div>
                     <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 haVRLx kKpYwv kuGBEl iVtKaT">
                     <input className="sc-taymdu-0 kUXhVV" role="switch" type="checkbox" id="explicit-content-toggle" /></div>
                  </div>
               </div>
            </section>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl">
                     <label htmlFor="supply" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">Supply</label>
                     <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">
                        <header className="sc-1xf18x6-0 haVRLx AssetForm--input-header">
                           The number of items that can be minted. No gas cost to you! 
                           <div className="AssetForm--info-cta">
                              <button type="button" className="sc-ty1bh0-0 infdiL">
                                 <InfoIcon className="sc-1gugx8q-0 fTKTZr material-icons-outlined"></InfoIcon>
                              </button></div>
                        </header>
                     </span>
                  </div>
                  <div className="sc-17icy78-0 jwwcLH Input--valid">
                     <div className="Input--main">
                        <div className="Input--prefix"></div>
                        <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className="browser-default Input--input" data-testid="Input" id="supply" inputMode="numeric" required="" spellCheck="false" type="text" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl"><label htmlFor="chain" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 haVRLx jnCfKq EDtcj">Blockchain</label></div>
                  <div className="sc-3dr67n-0 kvNabs sc-1shssly-0 bBQLVJ" cursor="pointer" aria-expanded="false">
                     <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 gSeoas kKpYwv kuGBEl iVtKaT">
                        <div size="32" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 cbgydV kKpYwv kuGBEl iVtKaT euUQqP kdctGP">
                           {/* <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022" alt="Rinkeby chain image" size="32" className="sc-1xf18x6-0 sc-sbw25j-1 cbgydV kGXfai" /> */}
                        </div>
                     </div>
                     {/* <input aria-invalid="false" id="chain" name="chain" readOnly="" aria-haspopup="true" style={{ cursor: 'pointer' }} /> */}
                     <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 fPQIwX kKpYwv kuGBEl iVtKaT">
                        {/* <DownArrowIcon className="sc-1gugx8q-0 dKJrxr material-icons"></DownArrowIcon> */}
                     </div>
                  </div>
               </div>
            </div>
            <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl sc-1fkdq1o-1 UPKyL">
               <div className="sc-1xf18x6-0 sc-1twd32i-0 jvONNN kKpYwv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 gfbErs kKpYwv kuGBEl">
                     <label htmlFor="freezeMetadata" className="sc-1xf18x6-0 sc-1w94ul3-0 sc-5y2dd1-0 ghXVmk jnCfKq EDtcj">
                        Freeze metadata 
                        <div className="AssetForm--info-cta"><InfoIcon className="sc-1gugx8q-0 fTdhIH material-icons-outlined" aria-expanded="false"></InfoIcon></div>
                     </label>
                     <span className="sc-1xf18x6-0 sc-1w94ul3-0 haVRLx sZAwe">Freezing your metadata will allow you to permanently lock and store all of this item&apos;s content in decentralized file storage.</span>
                  </div>
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-jjxyhg-0 haVRLx kKpYwv gakOkv"></div>
                  <section className="sc-1xf18x6-0 sc-139h1ex-0 sc-1azc94e-0 cpiPas eGJCNc lnJxVz">To freeze your metadata, you must create your item first.</section>
               </div>
            </div>
            <hr />
            <div className="AssetForm--submit">
               <div className="AssetForm--action"><span><button disabled="" type="button" className="sc-1xf18x6-0 sc-glfma3-0 hiIVBZ eqgvEc">Create</button></span></div>
               <div className="AssetForm--submit-spacer"></div>
            </div>
         </form>
      </div>
    </React.Fragment>
  )
}
