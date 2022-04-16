
import DehazeIcon from '@mui/icons-material/Dehaze';
// import { AiOutlineClose } from "react-icons/ai";


import React, { useState } from "react";

import { AppBar, InputBase, makeStyles, Toolbar, Typography, alpha, Avatar, Button, Menu, MenuItem, } from '@material-ui/core'

import { Cancel, Search } from "@material-ui/icons";
import MainContent from './MainContent'
const style = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },

    userAvtar: {
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? "flex" : "none")
        }
    },
    Search: {

        display: "flex",
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        border: "solid 1px",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            // display: "none",
            display: (props) => (props.searchOpen ? "flex" : "none"),
            width: "70%"
        }
    },

    searchInput: {
        color: "white",
        marginLeft: theme.spacing(1)

    },
    smallSearchButton: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        },

        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    userName: {
        color: "white",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Cancel: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },

    popupmenu: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(2)

    },

    toggelbtn: {
        marginRight: "5px",
        transform: (props) => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")
    }



}))
const Navbar = (prop) => {
    //right avatar menu pop-up
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        console.log(e.currentTarget)
        setAnchorEl(e.currentTarget);
    }; const handleClose = () => {
        setAnchorEl(null);
    };
    //close right pop-up

    const [sidebarHide, setSidebarHide] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const serchOpen = (e) => {
        e.preventDefault()
        setSearchOpen(!searchOpen)
        // alert('true')
    }
    const serchclosed = (e) => {
        e.preventDefault()
        setSearchOpen(!searchOpen)
    }
    const classes = style({ searchOpen });
    console.log(sidebarHide);

    return (
        <>
            {/* <Grid contianer >
                <Grid item xs={12}> */}
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {sidebarHide &&
                        <DehazeIcon onClick={() => { setSidebarHide(!sidebarHide) }} />
                    }
                    {!sidebarHide &&
                        <DehazeIcon onClick={() => { setSidebarHide(true) }} />
                    }

                    <Typography> Welcome </Typography>

                    <div className={classes.Search}>
                        <Search />
                        <InputBase placeholder="search..." className={classes.searchInput} />
                        <Cancel className={classes.Cancel} onClick={serchclosed} />
                    </div>

                    <div className={classes.userAvtar}>
                        <Search className={classes.smallSearchButton}
                            onClick={serchOpen}
                        />
                        <Button id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> &nbsp;
                            <p className={classes.userName}>{"UserName"}</p>
                        </Button>
                        <Menu className={classes.popupmenu}
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem >My account</MenuItem>
                            <MenuItem >Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>

            </AppBar>
            {}
            <MainContent itemSidebar={sidebarHide} />
            {/* </Grid>
            </Grid> */}
            {/* <Grid contianer spacing={1} className={classes.sidebar} position="fixed">
                {!sidebarHide &&
                    <>
                        < Grid item md={2} className={classes.sidebarlist}>
                            {
                                SidebarData.map((ele, index) => {
                                    return (
                                        <div className={classes.sidebaritem }>
                                            <Link to={ele.path} className={classes.link}>
                                                <div >
                                                    <span>{ele.icon}</span>&nbsp;
                                                    <span className={classes.sidebarTitle}>{ele.title}</span>
                                                </div>
                                                <AiFillCaretDown className={classes.toggelbtn}  onClick={() =>{setToggle(!toggle)}}/>
                                            </Link>
                                        </div>
                                    )
                                })}
                        </Grid>
                    </>
                }

                <Grid item md={!sidebarHide ? 10 : 12} className={classes.containerBar}>

                    <Routes>
                        <Route path='/' exact element={<Home />} />

                    </Routes>

                </Grid>
            </Grid> */}
        </>
    )
}

export default Navbar
