import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#474747' }} position='static'>
        <Toolbar>
          <div className='nav'>
            <Link className='link' to='/'>Star Wars Wiki</Link>
          </div>
          <div className='nav'>
            <Link className='link' to='/people'>People</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
