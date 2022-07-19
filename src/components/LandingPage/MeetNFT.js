import React from "react"

export default function MeetNFT() {

    return (
        <React.Fragment>
            <div className="meet-nft-main">
                <div className="meet-nft-main-div display-flex">
                    <div className="meet-nft-main-division">
                        <p className="meet-nft-main-title">Meet NFT</p>
                        <p className="meet-nft-main-description">The NFT marketplace with everything for everyone</p>
                        <div className="meet-nft-main-background-img">
                            <div className="meet-nft-main-background-video">
                                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" frameBorder="0" height="315" sandbox="allow-same-origin allow-scripts allow-presentation" src="https://www.youtube.com/embed/gfGuPd1CELo?playlist=gfGuPd1CELo&amp;autoplay=0&amp;controls=1&amp;loop=1&amp;modestbranding=1&amp;rel=0" title="Meet NFT" width="560"></iframe>
                            </div>
                        </div>
                        <div className="meet-nft-explore display-flex">
                            <a className="meet-nft-explore-btn" >Explore the marketplace</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}