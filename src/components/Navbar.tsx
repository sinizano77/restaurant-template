import * as React from 'react';
import { useState } from 'react';
import {
	AppBar,
	Box,
	Drawer,
	Toolbar,
	Typography,
	useMediaQuery,
    Button,
    List,
    ListItem,
    ListItemButton,
    Divider,
} from '@mui/material';
import {makeStyles } from '@material-ui/core';
import theme from '../theme';
import { NavLink } from "react-router-dom";
import SlurpLogo from '../assets/slurp-logo.svg';
import { MenuSharp, Close } from '@mui/icons-material'

//In-line CSS styling for each tag
const useStyles = makeStyles(() => ({
    appbar: { position: "fixed", },
    toolbar: { background: theme.palette.primary.main, },
    image: {
        height: '65%',
        maxHeight: '60px',
        padding: '7%',
    },
    imageDiv: { 
        display: 'flex',
        justifyContent: 'flex-start',
        width: '25%',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            justifyContent: 'center',
        }
    },
    pageLinkText: {
        //Link text
        transition: 'color 0.3s',
        "&:hover": {color: theme.palette.secondary.main},
    },
    //maybe reduce redundancy between active and nonactive later?
    pageLinkActive: {
        //link for current active page properties
        display: 'inline-flex',
        margin : '1.15em',
        textDecoration: 'none',
        color: theme.palette.secondary.main,
    },
    pageLinkNotActive: {
        //Non-active link properties
        display: 'inline-flex',
        margin : '1.15em',
        textDecoration: 'none',
        color: 'white',
    },
    pageLinkDiv: {
        width: '50%',
        height: '100%',
        textAlign: 'center',
    },
    buttonDiv: {
        width: '25%',
        height: '100%',
        marginRight: '20px',
        marginLeft: '20px',
        textAlign: 'right',
    },
    box: { backgroundColor: theme.palette.primary.main, },
    drawerButtons: {
        textDecoration: 'none',
        color: 'white',
        width: '100%',
    },
    filler: { height: 90, },
    /**for some this styling reason resets to mui default style after refreshing
    button:{
        textTransform: "none",
        fontSize: "1.4rem",
        borderRadius: "1.5px",
        border: "2px solid currentColor",
        padding: '3%',
        lineHeight: 1,
    },**/
  }));

const pageLinkItems = [
    { text: 'Home', href: '/'},
    { text: 'Menu', href: '/Menu'},
    { text: 'About', href: '/About'},
    { text: 'Locations', href: '/Locations'},
    { text: 'Contact Us', href: '/Contact'},
]

//Navbar class
function Navbar() {
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const styling = useStyles();

    //Contains page links
    function pageLinks() {
        return pageLinkItems.map((pageLinkItems) => (
            <NavLink 
                to={pageLinkItems.href}
                className = {({ isActive }) => isActive ? styling.pageLinkActive : styling.pageLinkNotActive}>
                <Typography className = {styling.pageLinkText}>
                    {pageLinkItems.text}
                </Typography>
            </NavLink>
        ));
    }

    //Nav format for most most tablet and smaller devices
    function mobileNav() {
        return (
            //React.Fragment makes returns multiple elements as 1 element w/o modifying elements
            <React.Fragment>
                {!isMenuOpen ? (
                    <MenuSharp
                        htmlColor = 'white'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        fontSize={'large'}
                    />
                ) : (
                    <Close 
                        htmlColor = 'white'
                        onClick={() => setIsMenuOpen(false)}
                        fontSize={'large'}
                    />
                )}
                <Drawer
                    anchor = 'top'
                    open = {isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                    sx={{zIndex: 0}} //makeStyles doesn't work here for some reason
                >
                    <Box className={styling.box}>
                        <div className={styling.filler} />
                        <List>
                            {pageLinkItems.map((pageLinkItems) =>
                                <ListItem>
                                    <NavLink 
                                        to={pageLinkItems.href} className={styling.drawerButtons}
                                        style={({ isActive }) => ({color: isActive ? theme.palette.secondary.main : 'white',})}
                                        >
                                        <ListItemButton>
                                            <Typography>
                                                {pageLinkItems.text}
                                            </Typography>
                                        </ListItemButton>
                                    </NavLink>
                                </ListItem>
                            )}
                            <ListItem className={styling.drawerButtons}>
                                <ListItemButton>
                                    <Typography>
                                        Order Now
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </React.Fragment>
        );
    }

    //Nav format for most Desktop and larger devices
    function desktopNav() {
        return (
            <React.Fragment>
                <div className = {styling.pageLinkDiv}>
                    {pageLinks()}
                </div>
                <div className = {styling.buttonDiv}>
                    <Button 
                        variant = "outlined"
                        color = "inherit" 
                        size = "large"
                        //className={styling.button}
                        sx = {{
                            textTransform: "none",
                            fontSize: "1.4rem",
                            borderRadius: "1.5px",
                            border: "2px solid currentColor",
                            padding: '3%',
                            lineHeight: 1,
                        }}
                        >
                            Order Now
                    </Button>
                </div> 
            </React.Fragment>
        );
    }

    //Component pieces
    return (
        <React.Fragment>
            <AppBar className = {styling.appbar}>
                <Toolbar className = {styling.toolbar}>
                    <div className = {styling.imageDiv}>
                        <NavLink to="/" >
                            <img
                                src={SlurpLogo}
                                alt="Slurp Logo"
                                className = {styling.image}
                            />
                        </NavLink>
                    </div>
                    {!isTablet ? desktopNav() : mobileNav()}
                </Toolbar>
                <Divider sx={{
                    borderColor: 'white',
                    border: "1.5px solid currentColor",
                    }}/>
            </AppBar>
            <div className={styling.filler} />
        </React.Fragment>
    );
};

export default Navbar;
