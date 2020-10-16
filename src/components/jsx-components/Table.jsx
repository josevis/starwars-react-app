import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 650,
  },
  container: {
    maxHeight: 440,
  },
});

export default function Table1(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.table}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell><b>People</b></TableCell>
                <TableCell align="right"><b>Height</b></TableCell>
                <TableCell align="right"><b>Mass</b></TableCell>
                <TableCell align="right"><b>Gender</b></TableCell>
                <TableCell align="right"><b>&nbsp;</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row, index) => (
                <TableRow key={index} value={row}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.height}</TableCell>
                  <TableCell align="right">{row.mass}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">
                    {/* <Link className='link-table' to={{ pathname: `/people/${(props.index <= 10) ? (index + 1 + props.index) : (index + 2 + props.index)}` }} >View More</Link> */}
                    <Link className='link-table' to={{ pathname: `/people/${index + 1}` }} >View More</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );

}