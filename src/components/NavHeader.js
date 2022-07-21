import React , { useState}  from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '@mui/icons-material/Search'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const NavHeader = () => {

  return (
    <React.Fragment>
       <div className='kCqGcl'>
          <nav className='Navbar--main'>
              <div className='elLxUM  cmxeRX'>
                <a className='elyzfO Navbar--brand'>
                  <div className='dfbMdI'>
                      <div style={{ display: "block" , overflow: "hidden" ,position: 'absolute' , top: 0 , left: 0 , bottom: 0 , right: 0 , boxSizing: "border-box" , margin: 0 }}>
                          <img alt='Open Sea Logo' src='https://opensea.io/static/images/logos/opensea.svg' style={{
                                position: "absolute" ,
                                top: "0" ,
                                left: "0" ,
                                bottom: "0" ,
                                right: "0" ,
                                boxSizing: "border-box" ,
                                padding: "0" ,
                                border: "none" ,
                                margin: "auto" ,
                                display: "block" ,
                                width: "0" ,
                                height: "0" ,
                                minWidth: "100%" ,
                                maxWidth: "100%" ,
                                minHeight: "100%" ,
                                maxHeight: "100%"
                          }}/>
                      </div>
                  </div>
                  <div className='Navbar--brand-name' style={{ width : '100px'}}>OpenSea</div>
                </a>
              </div>
              <div className="bSaLsG" style={{ width: '60%' }}>
                <div className="hzdGQw kKpYwv">
                  <div className="bSaLsG">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                      <div className="haVRLx kKpYwv kuGBEl iVtKaT kclzCo">
                        <div className="lbfpY kKpYwv">
                          <div className="ejWxVe bmxyw NavSearch--mobile-search-input" style={{ marginTop: '14px' }}>
                              <div className="cJExFD kKpYwv kuGBEl iVtKaT">
                                <Search className="lahtNG material-icons" />
                              </div>
                              <input type="search" style={{ cursor: "text" }} placeholder="Search items, collections, and accounts" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <ul className='mPydF'>
                  <div className='fresnel-container fresnel-greaterThanOrEqual-xl'>
                      <div className='haVRLx kKpYwv'>
                          <li className='gNdalk'>
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
                                                      <span fontSize="16px" className="jQJluE jnCfKq">All NFTs</span>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="ttmcH">
                                                      <div className="eXnWvj Image--isImageLoaded Image--isImageLoaderVisible" style={{ height: '24px' , width: '24px' }}>
                                                        <img alt="" className="Image--image" src="https://opensea.io/static/images/icons/solana-light.svg"/>
                                                      </div>
                                                    </div>
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Solana NFTs</span>
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

                              } arrow={false}
                                interactive={true}>
                                <a className='elyzfO NavItem--main NavItem--withAfter'>Explore</a>
                            </Tippy>
                          </li>
                          <li className='gNdalk'>
                          <Tippy className='jJDshU gGYZXW Dropdown Navbar--dropdown' content={
                                <React.Fragment>
                                          <ul className="haVRLx hhOWiO jgJAwq ldysOp">
                                              <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Ranking</span>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Activity</span>
                                                    </div>
                                                  </a>
                                                </li>
                                          </ul>
                                </React.Fragment>

                              } arrow={false}
                                interactive={true}>
                                
                                <a className='elyzfO NavItem--main NavItem--withAfter'>Stats</a>
                            </Tippy>
                          </li>
                          <li className='gNdalk'>
                          <Tippy className='jJDshU gGYZXW Dropdown Navbar--dropdown' content={
                                <React.Fragment>
                                          <ul className="haVRLx hhOWiO jgJAwq ldysOp">
                                              <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Help Center</span>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Premium collection</span>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">e-KYC & agreement</span>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Partner with us</span>
                                                    </div>
                                                  </a>
                                                </li>
                                          </ul>
                                </React.Fragment>

                              } arrow={false}
                                interactive={true}>
                            <a className='elyzfO NavItem--main NavItem--withAfter'>Help Center</a>
                            </Tippy>
                          </li>
                          <li className='gNdalk'>
                            <Tippy className='jJDshU gGYZXW Dropdown Navbar--dropdown' content={
                                <React.Fragment>
                                          <ul className="haVRLx hhOWiO jgJAwq ldysOp">
                                              <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Create a Collection</span>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li className="lcXNuJ">
                                                  <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                    <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                      <span fontSize="16px" className="jQJluE jnCfKq">Create an NFT</span>
                                                    </div>
                                                  </a>
                                                </li>
                                          </ul>
                                </React.Fragment>

                              } arrow={false}
                                interactive={true}>
                            <a className='elyzfO NavItem--main NavItem--withAfter'>Create</a>
                            </Tippy>
                          </li>
                      </div>
                  </div>  
                  <div className='fresnel-container fresnel-greaterThanOrEqual-lg '>
                      <div className='bxjjSn kKpYwv'>
                          <div className='kXOrPv'>
                              <li className='gNdalk'>
                                <a className='elyzfO NavItem--main NavItem--withAfter NavItem--withIcon'>

                                <Tippy className='jJDshU gGYZXW adjusted-tippy Dropdown Navbar--dropdown' 
                                       arrow={false}
                                       interactive={true}
                                       content = {
                                            <React.Fragment>
                                                      <ul className="haVRLx hhOWiO jgJAwq ldysOp">
                                                          <li className="lcXNuJ">
                                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                  <span fontSize="16px" className="jQJluE jnCfKq">Profile</span>
                                                                </div>
                                                              </a>
                                                            </li>
                                                            <li className="lcXNuJ">
                                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                  <span fontSize="16px" className="jQJluE jnCfKq">Favorites</span>
                                                                </div>
                                                              </a>
                                                            </li>
                                                            <li className="lcXNuJ">
                                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                  <span fontSize="16px" className="jQJluE jnCfKq">Watchlist</span>
                                                                </div>
                                                              </a>
                                                            </li>
                                                            <li className="lcXNuJ">
                                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                  <span fontSize="16px" className="jQJluE jnCfKq">My Collections</span>
                                                                </div>
                                                              </a>
                                                            </li>
                                                            <li className="lcXNuJ">
                                                              <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                  <span fontSize="16px" className="jQJluE jnCfKq">Settings</span>
                                                                </div>
                                                              </a>
                                                            </li>
                                                      </ul>
                                            </React.Fragment>
                                          }>
                                  <AccountCircleOutlinedIcon className='fTuPyU NavItem--icon material-icons-outlined NavItem--icon' />
                            </Tippy>

                                </a>
                              </li>
                          </div>
                          <div className='estroi'>
                              <li className='gNdalk'>
                                <button className='infdiL NavItem--main NavItem--withIcon'>
                                    <AccountBalanceWalletOutlinedIcon className='fTuPyU NavItem--icon material-icons-outlined NavItem--icon'/>
                                </button>
                              </li>
                          </div>
                      </div>
                  </div>
              </ul>
          </nav>
       </div>
    </React.Fragment>
  );
};
export default NavHeader;


{
  /*

  import { AppBar , Typography , Toolbar , ListItemText, IconButton , Button , Menu , MenuItem , Divider , Paper , useMediaQuery , useTheme } from '@mui/material';
  import WebIcon from '@mui/icons-material/Web';
  import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
  import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
  import Search from '@mui/icons-material/Search'
  import CloseIcon from '@mui/icons-material/Close';
  import PopupState, { bindMenu , bindHover  } from 'material-ui-popup-state';
  import _Drawer from './_Drawer';

    const [searchBar,setOpenSearch] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    function SearchVisibility(){
      setOpenSearch(true)
    }

    <AppBar sx={{ background : "#ffffff" , color :"#000000"}}>
          <Toolbar>

            { 
                isMatch ?
                  <React.Fragment>
                      {
                        !searchBar ?
                        <React.Fragment>
                          <div className='logo-main display-flex'>
                            <WebIcon />
                            <Typography sx={{ margin : '0px 10px' }}>NFT</Typography>
                          </div>
                          <_Drawer SearchVisibility={SearchVisibility}/>
                        </React.Fragment> :
                        <React.Fragment>
                            <div className='disply-flex navbar-mobile-search'>
                                <li class="sc-1agh4ne-0 gNdalk Navbar--close-search-bar">
                                    <IconButton>
                                        <CloseIcon />
                                    </IconButton>
                                </li>
                                  <div className="search-mobile-container-main display-flex">
                                    <div className="search-mobile-container-division display-flex">
                                      <div className='search-mobile-container'>
                                        <input type="search" aria-multiline="false" placeholder="Search OpenSea" className='search-mobile-input'/>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                        </React.Fragment>
                      }
                  </React.Fragment> :
                  <React.Fragment>
                    <div className='logo-main display-flex'>
                      <WebIcon />
                      <Typography sx={{ margin : '0px 10px' }}>NFT</Typography>
                    </div>
                     <div className='search-bar-unit'>
                        <div className='display-flex search-bar-image'>
                          <Search />
                        </div>
                        <input placeholder='Search items, collections and accounts' className='search-bar-input'/>
                      </div>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="text" className='NavBtn' {...bindHover(popupState)}>
                            Explore
                            </Button>
                              <Menu {...bindMenu(popupState)} 
                                  PaperProps={{
                                    elevation: 0,
                                    sx: {
                                      overflow: 'visible',
                                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                      mt: 1.5,
                                      '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                      },
                                      '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                      },
                                    },
                                  }}
                                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                <Paper sx={{ width: '250px' }} elevation={0}>
                                  <MenuItem onClick={popupState.close}>
                                    <ListItemText> Premium Collection </ListItemText>  
                                  </MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>All collections</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>All NFTs</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Movies</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Music</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Art</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Collectibles</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Domain name</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Photography</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Sports</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Trading cards</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Utility</MenuItem>
                                  <Divider />
                                  <MenuItem onClick={popupState.close}>Virtual worlds</MenuItem>
                                </Paper>
                              </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="text" className='NavBtn' {...bindHover(popupState)}>
                            Stats
                            </Button>
                            <Menu {...bindMenu(popupState)} PaperProps={{
                                    elevation: 0,
                                    sx: {
                                      overflow: 'visible',
                                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                      mt: 1.5,
                                      '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                      },
                                      '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                      },
                                    },
                                  }}
                                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <Paper sx={{ width: '250px' }} elevation={0}>
                              <MenuItem onClick={popupState.close}>Ranking</MenuItem>
                              <Divider />
                              <MenuItem onClick={popupState.close}>Activity</MenuItem>
                              </Paper>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="text" className='NavBtn' {...bindHover(popupState)}>
                              Help Center
                            </Button>
                            <Menu {...bindMenu(popupState)} 
                                      PaperProps={{
                                        elevation: 0,
                                        sx: {
                                          overflow: 'visible',
                                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                          mt: 1.5,
                                          '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                          },
                                          '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                          },
                                        },
                                      }}
                                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                              <Paper sx={{ width: '250px' }} elevation={0}>
                                <MenuItem onClick={popupState.close}>Help Center</MenuItem>
                                <Divider />
                                <MenuItem onClick={popupState.close}>Premium collection</MenuItem>
                                <Divider />
                                <MenuItem onClick={popupState.close}>e-KYC & agreement</MenuItem>
                                <Divider />
                                <MenuItem onClick={popupState.close}>Partner with us</MenuItem>
                              </Paper>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>

                      <Button variant="text" className='NavBtn'> Create </Button>
                      <IconButton size="large" aria-label="Profile" color="inherit">
                        <AccountCircleOutlinedIcon />
                      </IconButton>
                      <IconButton size="large" aria-label="Wallet" color="inherit">
                        <AccountBalanceWalletOutlinedIcon />
                      </IconButton>
                  </React.Fragment>

            }
          </Toolbar>
       </AppBar>
  */
}
