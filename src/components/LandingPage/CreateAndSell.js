import React from 'react';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import ImageIcon from '@mui/icons-material/Image';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CategoryIcon from '@mui/icons-material/Category';

export default function CreateAndSell() {

    return (
        <React.Fragment>
            <div className='create-sell-main display-flex'>
                <div className='create-sell-main-division display-flex'>
                    <h2 className='create-sell-main-title'>Create and sell your NFTs</h2>
                    <div className='create-sell-container display-flex'>
                        <div className='create-sell-container-box display-flex'>
                            <AccountBalanceWallet sx={{ width: '40px' , height :'40px'}}/>
                            <p className='create-sell-container-title'>Set up your wallet</p>
                            <p className='create-sell-container-description'>
                            Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the <a className='create-sell-container-description-anchor'> wallets we support</a>
                            </p>
                        </div>
                        <div className='create-sell-container-box display-flex'>
                            <CategoryIcon sx={{ width: '40px' , height :'40px'}}/>
                            <p className='create-sell-container-title'>Create your collection</p>
                            <p className='create-sell-container-description'>
                            Click <a className='create-sell-container-description-anchor'> My Collections </a> and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
                            </p>
                        </div>
                        <div className='create-sell-container-box display-flex'>
                            <ImageIcon sx={{ width: '40px' , height :'40px'}}/>
                            <p className='create-sell-container-title'>Add your NFTs</p>
                            <p className='create-sell-container-description'>
                            Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.
                            </p>
                        </div>
                        <div className='create-sell-container-box display-flex'>
                            <LoyaltyIcon sx={{ width: '40px' , height :'40px'}}/>
                            <p className='create-sell-container-title'>List them for sale</p>
                            <p className='create-sell-container-description'>
                            Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}