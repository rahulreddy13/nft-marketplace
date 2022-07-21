import React, { useState } from "react";
import { Drawer , ListItemText, IconButton , Button , Menu , MenuItem , Divider , Paper  } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MenuIcon from '@mui/icons-material/Menu'
import Search from '@mui/icons-material/Search'
import PopupState, { bindMenu , bindHover  } from 'material-ui-popup-state';

const _Drawer = ({ SearchVisibility }) =>{

    const [openDrawer,setOpenDrawer] = useState(false);
    // const [searchBar,setOpenSearch] = useState(false);

    
    function setAndCallFunction(){
      SearchVisibility()
    }

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
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
            </Drawer>
            <div style={{ marginLeft : 'auto' }}>
              <IconButton onClick={() => setAndCallFunction()}>
                <Search />
              </IconButton>
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </div>
        </React.Fragment>
    )
};

export default _Drawer;