import React, { Component } from 'react';

import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Reddit from '@mui/icons-material/Reddit';
import YouTube from '@mui/icons-material/YouTube';

class Footer extends Component {
    render() {
        return (
            <div className='footer-main'>
                <div className='footer-container'>
                    <div className='footer-container-row display-flex'>
                            <div className='first-container-footer-half' style={{ paddingRight : '64px' }}>
                                <div className='first-container-footer-half-header'>
                                    Stay in the loop
                                </div>
                                <div className='first-container-footer-half-text'>
                                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
                                </div>
                                <form className='footer-email-form'>
                                    <div className='display-flex'>
                                        <div className='footer-email-input-main'>
                                            <input name='email' placeholder="Your email address" className='footer-email-input' />
                                        </div>
                                        <button className='footer-email-form-button'>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                            <div className='first-container-footer-half'>
                                <div className='first-container-footer-half-header'>
                                    Join the community
                                </div>
                                <div className='display-flex'>
                                    <a className='footer-social-link'>
                                        <Twitter />
                                    </a>
                                    <a className='footer-social-link'>
                                        <Instagram />
                                    </a>
                                    <a className='footer-social-link'>
                                        <Reddit />
                                    </a>
                                    <a className='footer-social-link'>
                                        <YouTube />
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className='footer-container-row display-flex'>
                        <div className='footer-container-row-second-one-quartar'>
                            <h1>NFT</h1>
                            <div className='first-container-footer-half-text'>
                                The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                            </div>
                        </div>
                        <div className='footer-container-row-second-three-quartar'>
                            <div className='footer-container-row-single-quartar'>
                                <h3 className='footer-container-row-single-quartar-header'>Marketplace</h3>
                                <ul className='footer-link-list'>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>All NFTs</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Solana NFTs</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Art</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Collectiables</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Domain Names</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Music </a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Photography</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Sports</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Trading Cards</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Utility</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Virtual Worlds</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-container-row-single-quartar'>
                                <h3 className='footer-container-row-single-quartar-header'>My Account</h3>
                                <ul className='footer-link-list'>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Profile</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Favorites</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Watchlist</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>My Collection</a>
                                    </li>
                                </ul>
                                <h3 className='footer-container-row-single-quartar-header'>Stats</h3>
                                <ul className='footer-link-list'>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Rankings</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Activity</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-container-row-single-quartar'>
                                <h3 className='footer-container-row-single-quartar-header'>Resources</h3>
                                <ul className='footer-link-list'>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Help Center</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Platform Status</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Partners</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Gas-Free Marketplace</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Taxes</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Blog</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Docs</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>News Letter</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-container-row-single-quartar'>
                                <h3 className='footer-container-row-single-quartar-header'>Company</h3>
                                <ul className='footer-link-list'>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>About</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Carrers</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Ventures</a>
                                    </li>
                                    <li className='footer-link-wrapper'>
                                        <a className='footer-link'>Grants</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='footer-container-last-row display-flex'>
                        <div className='footer-container-last-row-section'>
                            <p>© 2018 - 2022 NFT, Inc</p>
                        </div>
                        <div className='footer-container-last-row-section-last'>
                            <a className="footer-link">Privacy Policy</a>
                            <a className="footer-link">Terms of Service</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;