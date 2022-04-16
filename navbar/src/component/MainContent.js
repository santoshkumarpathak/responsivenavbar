import { alpha, Grid, makeStyles } from '@material-ui/core'
import ItemContent from './ItemContent'
import sidebar from './sidebar.json'


// import { SidebarData } from './SidebarData'

import Home from './landing pages/Home.js'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

const style = makeStyles((theme) => ({
    containerBar: {
        height: "100vh",
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
    },
    sidebar: {
        display: "flex",

        paddingTop: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(7)
        }
    },

    sidebarlist: {
        height: "100vh",
        backgroundColor: "#403f3d",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        flexWrap: "nowrap"
    },

    sidebaritem: {
        display: "block",
        cursor: "pointer",

        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            paddingBottom: theme.spacing(0),
        },
        paddingBottom: theme.spacing(2),

        "&:hover": {
            // width: "1em",
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            borderRadius: "8px",
        }
    },
    link: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fafafd"
    },
    sidebarTitle: {
        textDecoration: "none",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },

}))
const MainContent = (props) => {
    const classes = style()
    console.log(props, sidebar)

    return (
        <>
            <Grid contianer spacing={1} className={classes.sidebar} >


                {!props.itemSidebar &&
                    <>
                        < Grid item md={2} className={classes.sidebarlist} position="fixed">
                            {sidebar.map((item, index) => <ItemContent key={index} item={item} />)}
                        </Grid>
                    </>
                }

                <Grid item md={
                    !props.itemSidebar ? 10 : 12
                } className={classes.containerBar}>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                    </Routes>
                </Grid>

            </Grid >
        </>
    )
}

export default MainContent