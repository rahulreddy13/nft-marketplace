import React , { useState}  from 'react';
import { useRouter } from 'next/router'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useMediaQuery ,useTheme , Drawer , AppBar , Toolbar , Divider , List } from '@mui/material'
import Search from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcon from '@mui/icons-material/Settings'
import CollectionsIcon from '@mui/icons-material/Collections'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const styles = theme => ({
  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    height: "100vh"
  },
  appBar: {
    position: "fixed",
    width: "100%",
    zIndex: 1400
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  drawerPaper: {
    position: "fixed",
    width: drawerWidth,
    borderRadius: 0,
    borderTop: "none",
    borderBottom: "none",
    top: theme.spacing(8), // push content down to fix scrollbar position
    height: `calc(100% - ${theme.spacing(8)}px)` // subtract appbar height
  },
  drawerContent: {
    overflow: "auto",
    display: "flex",
    flexDirection: "column"
  },
  contentWrapper: {
    overflow: "auto",
    position: "fixed",
    top: theme.spacing.unit * 8,
    height: "calc(100% - 64px)", // Subtract width of header
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  content: {
    padding: theme.spacing(3)
  },
  logoutContainer: {
    marginTop: "auto",
    paddingBottom: "0",
    position: "fixed",
    width: drawerWidth,
    bottom: 0
  }
});


const NavHeader = () => {

  const router = useRouter()
  const [ openDrawer , setOpenDrawer ] = useState(false);
  const [ openMobileSearch , setMobileSearch ] = useState(false);
 
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  
  function ToggleMenu(){
    setOpenDrawer(!openDrawer)
  }

  function ToggleSearch(){
    setMobileSearch(!openMobileSearch)
  }

  const drawer = (
    <div>
      <div />
        <Divider />
        <List>mailFolderListItems</List>
        <Divider />
        <List>otherMailFolderListItems</List>
    </div>
  );

  return (
    <React.Fragment>
       <div className='kCqGcl'>
          <AppBar sx={{ position: "fixed",  width: "100%",   zIndex: 1400 }} elevation={0}>
            <Toolbar className='Navbar--main' disableGutters={true}>
              <div className='elLxUM cmxeRX'>
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
                          {
                              isMatch ? null :
                                <div className="ejWxVe bmxyw NavSearch--mobile-search-input" style={{ marginTop: '14px' }}>
                                    <div className="cJExFD kKpYwv kuGBEl iVtKaT">
                                      <Search className="lahtNG material-icons" />
                                    </div>
                                    <input type="search" style={{ cursor: "text" }} placeholder="Search items, collections, and accounts" />
                                </div>

                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <ul className='mPydF'>
                    <div className='fresnel-container fresnel-greaterThanOrEqual-xl'>
                        <div className='haVRLx kKpYwv'>
                          {

                            isMatch ? null :
                              <React.Fragment>
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
                                        interactive={true}
                                        placement='bottom'>
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
                                        interactive={true}
                                        placement='bottom'>
                                        
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
                                        interactive={true}
                                        placement='bottom'>
                                    <a className='elyzfO NavItem--main NavItem--withAfter'>Help Center</a>
                                    </Tippy>
                                  </li>
                                  <li className='gNdalk'>
                                    <Tippy className='jJDshU gGYZXW Dropdown Navbar--dropdown' content={
                                        <React.Fragment>
                                                  <ul className="haVRLx hhOWiO jgJAwq ldysOp">
                                                      <li className="lcXNuJ">
                                                          <a onClick={() => router.push('/collection/create')} className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                            <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                              <span fontSize="16px" className="jQJluE jnCfKq">Create a Collection</span>
                                                            </div>
                                                          </a>
                                                        </li>
                                                        <li className="lcXNuJ">
                                                          <a onClick={() => router.push('/asset/create')} className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                            <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                              <span fontSize="16px" className="jQJluE jnCfKq">Create an NFT</span>
                                                            </div>
                                                          </a>
                                                        </li>
                                                  </ul>
                                        </React.Fragment>

                                      } arrow={false}
                                        interactive={true}
                                        placement='bottom'>
                                    <a className='elyzfO NavItem--main NavItem--withAfter'>Create</a>
                                    </Tippy>
                                  </li>
                              </React.Fragment>
                          }
                        </div>
                    </div>  
                    <div className='fresnel-container fresnel-greaterThanOrEqual-lg '>
                        <div className='bxjjSn kKpYwv'>
                            {
                              isMatch ? 
                              <React.Fragment>

                                  <li className="haVRLx">
                                    <div className="fresnel-container fresnel-lessThan-sm ">
                                      <ul className="haVRLx kKpYwv">
                                        <li className="gNdalk RjoLw">
                                          <button className="infdiL NavItem--main NavItem--withIcon" type="button">
                                            <Search style={{ width : '32px' }} className="fTuPyU NavItem--icon material-icons NavItem--icon"></Search>
                                          </button>
                                        </li>
                                        <div className="estroi">
                                          <li className="gNdalk">
                                            {
                                              openDrawer ?
                                                <button className="infdiL NavItem--main NavItem--withIcon" type="button">
                                                  <CloseIcon onClick={ToggleMenu} style={{ width : '32px' }}  className="fTuPyU NavItem--icon material-icons NavItem--icon"></CloseIcon>
                                                </button>
                                              :
                                              <button className="infdiL NavItem--main NavItem--withIcon" type="button">
                                                <MenuIcon onClick={ToggleMenu} style={{ width : '32px' }}  className="fTuPyU NavItem--icon material-icons NavItem--icon"></MenuIcon>
                                              </button>
                                            }
                                          </li>
                                        </div>
                                      </ul>
                                    </div>
                                  </li>

                              </React.Fragment>
                              :
                              <React.Fragment>
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
                                                                        <div size="24" className="fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                          <CollectionsIcon className="fTdhIH material-icons">person</CollectionsIcon>
                                                                        </div>
                                                                        <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                          <span fontSize="16px" className="jQJluE jnCfKq">My Collections</span>
                                                                        </div>
                                                                      </a>
                                                                  </li>
                                                                  <li className="lcXNuJ">
                                                                      <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                        <div size="24" className="fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                          <PersonIcon className="fTdhIH material-icons" />
                                                                        </div>
                                                                        <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                          <span fontSize="16px" className="jQJluE jnCfKq">Profile</span>
                                                                        </div>
                                                                      </a>
                                                                    </li>
                                                                    <li className="lcXNuJ">
                                                                      <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                        <div size="24" className="fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                          <FavoriteIcon className="fTdhIH material-icons"></FavoriteIcon>
                                                                        </div>
                                                                        <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                          <span fontSize="16px" className="jQJluE jnCfKq">Favorites</span>
                                                                        </div>
                                                                      </a>
                                                                    </li>
                                                                    <li className="lcXNuJ">
                                                                      <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                        <div size="24" className="fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                          <VisibilityIcon className="fTdhIH material-icons">person</VisibilityIcon>
                                                                        </div>
                                                                        <div className="haVRLx kKpYwv kuGBEl iVtKaT cjftsJ">
                                                                          <span fontSize="16px" className="jQJluE jnCfKq">Watchlist</span>
                                                                        </div>
                                                                      </a>
                                                                    </li>
                                                                    <li className="lcXNuJ">
                                                                      <a className="elyzfO lkFRBi kKpYwv fNIWSU sc-1idymv7-0">
                                                                        <div size="24" className="fhVUfN kKpYwv kuGBEl iVtKaT euUQqP jwEsBT bLwasA">
                                                                          <SettingsIcon className="fTdhIH material-icons">person</SettingsIcon>
                                                                        </div>
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
                              </React.Fragment>
                            } 
                        </div>
                    </div>
                </ul>
          </Toolbar>
          </AppBar>
          {
            isMatch ? 
              <Drawer variant="persistent" anchor="right" sx={{ width: '420px' }} open={openDrawer} elevation={0}  
                      PaperProps={{  variant: "outlined" , sx: { width: "100%" , paddingTop : '72px' } }}>      
                  {/* { drawer } */}
              </Drawer> : null 
          }
       </div>
    </React.Fragment>
  );
};
export default NavHeader;