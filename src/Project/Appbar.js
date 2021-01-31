import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from './style/images/Appbar/MEDICARE.png'
import './style/css/Appbar.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },  
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: 20,
      color: '#6D6969',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Skin Disease</MenuItem>
      <MenuItem onClick={handleMenuClose}>Eye Problem</MenuItem>
      <MenuItem onClick={handleMenuClose}>Heart Disease</MenuItem>
      <MenuItem onClick={handleMenuClose}>Nerve Disease</MenuItem>
      <MenuItem onClick={handleMenuClose}>Brain Disease</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sexual Disease</MenuItem>
      <MenuItem onClick={handleMenuClose}>Kindney Disease</MenuItem>
      <MenuItem onClick={handleMenuClose}>Diet and Nutrition</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
        </IconButton>
        <p className='smalliconname'><b>Specialisms</b></p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
        </IconButton>
        <p className='smalliconname'><b>About </b></p>
      </MenuItem>        
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >          
        </IconButton>
        <p className='smalliconname'><b> Services </b></p>        
        <ExpandMoreIcon />
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
        </IconButton>
        <p className='smalliconname'><b>Stuff</b></p>
      </MenuItem>  
      <MenuItem>
        <IconButton color="inherit">
        </IconButton>
        <p className='smalliconname'><b>Contact</b></p>
      </MenuItem>  
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{height: 0}} >
        <Toolbar>
        <img src={logo} className="App-logo" alt="logo" />         
          <Typography className={classes.title} variant="h5" noWrap style={{marginTop: 7}} >
            <b>Always With You</b>
          </Typography>          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton style={{outline: 'none'}}> 
              <p className="iconname"> <b> Specialisms </b> </p>             
            </IconButton>
            <IconButton style={{outline: 'none'}}>
            <p className="iconname"> <b> About </b> </p>               
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              style={{outline: 'none'}}
            >
              <p className="iconname"> <b> Services </b> </p> 
              <ExpandMoreIcon />
            </IconButton>
            <IconButton style={{outline: 'none'}} >
            <p className="iconname"> <b> Stuff  </b></p>               
            </IconButton>
            <IconButton style={{outline: 'none'}}>
            <p className="iconname"> <b> Contact </b> </p>               
            </IconButton>
            <Button variant="outlined"
              style={{
                marginTop: 20,
                height: 40,
                marginLeft: 40,
                marginRight: 20,
                outline: 'none',
              }}
            >
             <p className="iconname"> <b> 88764398334 </b> </p>   
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
