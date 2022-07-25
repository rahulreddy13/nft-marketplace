import React from "react"
import Link from 'next/link'
import InfoIcon from '@mui/icons-material/InfoOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined'
export default function index() {

  return (
    <React.Fragment>
      <main id="main" className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 bJSVKl kKpYwv kuGBEl">
        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 cUBiaH kKpYwv kuGBEl" height="100%">
            <div className="sc-11rlifb-0 cEwuGZ">
                <section className="CollectionManager--main">
                    <div className="sc-lfnuca-0 kWhmfC CollectionManager--container CollectionManager--narrow-container">
                    <header className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 haVRLx kKpYwv kuGBEl">
                        <h1 className="sc-1xf18x6-0 sc-1w94ul3-0 kXvtcH ictplK">My Collections</h1>
                        <span className="sc-1xf18x6-0 sc-1w94ul3-0 kXvtcH kJaKrw">
                            <div className="sc-1xnuit5-0 dCMaIH">
                                <div className="collectionManagerIndexHeader--info">Create, curate, and manage collections of unique NFTs to share and sell.
                                    <button type="button" className="sc-ty1bh0-0 infdiL" aria-expanded="false">
                                        <InfoIcon className="sc-1gugx8q-0 lahtNG collectionManagerIndexHeader--info-icon material-icons-outlined collectionManagerIndexHeader--info-icon" color="gray" size="24" value="info"></InfoIcon>
                                    </button>
                                </div>
                                <div className="collectionManagerIndexHeader--buttons">
                                    <div className="sc-1xf18x6-0 knFYcU">
                                        <Link href="/collection/create">
                                            <a className="sc-1pie21o-0 elyzfO sc-1xf18x6-0 sc-glfma3-0 hiIVBZ eqgvEc">Create a collection</a>
                                        </Link>
                                    </div>
                                    <button aria-label="More options" type="button" className="sc-1xf18x6-0 sc-glfma3-0 igsbSK cPklvQ" aria-expanded="false">
                                        <div aria-hidden="true" pointerEvents="none" className="sc-1xf18x6-0 sc-1twd32i-0 bMAZiO kKpYwv">
                                            <MoreIcon className="sc-1gugx8q-0 fTvbZt material-icons"></MoreIcon>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </span>
                    </header>
                    <div className="sc-1nx3koo-1 faINpX">
                        <div className="sc-1xf18x6-0 sc-hthsq2-3 haVRLx cPMeeK">
                            <a className="sc-1pie21o-0 elyzfO">
                                <div className="sc-1xf18x6-0 sc-hthsq2-5 haVRLx gThPIx">
                                <div height="0" className="sc-1xf18x6-0 fqauqu">
                                    <div className="sc-dy59cl-0 eXnWvj Image--isImageLoaded Image--isImageLoaderVisible sc-hthsq2-8 bpUNCT" style={{ height:'100%' , width:'100%' }}>
                                        <img alt="Polygon Test Rahul - 3tA8VmEn2X" className="Image--image" src="https://openseauserdata.com/files/fecf6af80447133ce3b3b785c341a7dd.jpg" style={{ objectFit: "cover" }}/>
                                    </div>
                                </div>
                                <div className="sc-hthsq2-4 kqVkDV">
                                    <div className="sc-1xf18x6-0 sc-1twd32i-0 bzyPSV kKpYwv">
                                        <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-1267gkc-1 haVRLx kKpYwv kuGBEl iVtKaT euUQqP ippMdL" aria-expanded="false">
                                            <button type="button" className="sc-ty1bh0-0 infdiL">
                                                <MoreIcon className="sc-1gugx8q-0 fTdhIH material-icons"></MoreIcon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-hthsq2-6 jdAHWJ kKpYwv feKKuH">
                                    <div className="sc-dy59cl-0 eXnWvj Image--isImageLoaded Image--isImageLoaderVisible sc-hthsq2-7 eXJpms" style={{ height:'78px' ,width:"78px" }}>
                                        <img className="Image--image" src="https://openseauserdata.com/files/6687bf885e1a5d625aecaee17d1e5b14.jpg" style={{ objectFit: "contain" }}/>
                                    </div>
                                    <div className="sc-1xf18x6-0 sc-1w94ul3-0 sc-hthsq2-9 haVRLx jnCfKq iLDgaE">
                                        <div className="sc-7qr9y8-0 jXrFKA sc-hthsq2-10 dAIQOM" tabIndex="-1">Polygon Test Rahul - 3tA8VmEn2X</div>
                                    </div>
                                </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 haVRLx kKpYwv kuGBEl iVtKaT euUQqP"></div>
                    </div>
                </section>
            </div>
        </div>
     </main>
    </React.Fragment>
  )
}
