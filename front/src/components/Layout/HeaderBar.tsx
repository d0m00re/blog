import React, { ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import useHeaderBarStyles from './HeaderBar.styles';

//import {useHistory} from 'react-router';
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {createBrowserHistory} from 'history';

interface Props {

}

const HeaderBar = ({ }: Props): ReactElement => {
    const classes = useHeaderBarStyles();
    const history = useHistory();

    const goCreateArticle = () => history.push({pathname : '/createArticle'});
    const goHome = () => history.push({pathname : '/home'});

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Web Tech Blog
                    </Typography>
                    <Button variant='contained' color='primary' onClick={goHome}>
                        Home
                    </Button>
                    <Button variant='contained' color='primary' onClick={goCreateArticle}>
                        Create article
                    </Button>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderBar
