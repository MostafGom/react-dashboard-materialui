import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Link } from 'react-router-dom';
import { base } from './constant';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer - 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        paddingLeft: '60px',
        backgroundColor: 'violet'
    },
    appBarShift: {
        paddingLeft: '10px',
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: 'purple'
    },
    menuButton: {
        marginRight: 6,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: '60px'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    icon: {
        color: 'violet',
    },
    iconBottom: {
        color: 'purple',
    }
}));

export default function MiniDrawer({ children }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Cool Navigation
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >

                <div className={classes.toolbar}>
                    {open ?
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                        :
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                </div>
                <Divider />
                <List>
                    <ListItem button >
                        <Link to={`${base}teams`} className={classes.link}>
                            <ListItemIcon className={classes.iconBottom}>
                                <GroupWorkIcon />
                            </ListItemIcon>
                            <ListItemText primary='Teams' />
                        </Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button >
                        <Link to={`${base}`} className={classes.link}>
                            <ListItemIcon className={classes.iconBottom}>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <Link to={`${base}users`} className={classes.link}>
                            <ListItemIcon className={classes.iconBottom}>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary='Users' />
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <Link to={`${base}taks`} className={classes.link}>
                            <ListItemIcon className={classes.iconBottom}>
                                <PlaylistAddCheckIcon />
                            </ListItemIcon>
                            <ListItemText primary='Tasks' />
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <Link to={`${base}posts`} className={classes.link}>
                            <ListItemIcon className={classes.iconBottom}>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary='Posts' />
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
}
