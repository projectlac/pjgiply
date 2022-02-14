import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromLocal, listLike } from '../../features/search/searchSlice';
import { Link } from 'react-router-dom';
import "../../assets/styles/styles.scss"
export default function Navbar() {
  //Redux
  const listOfLike = useSelector(listLike)
  const dispatch = useDispatch();

  //Hook
  useEffect(() => {
    dispatch(getDataFromLocal()) //Get data from local storage
  }, [dispatch])

  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GIPHY Searcher
          </Typography>
          <Link to="/"><Button color="inherit">Search</Button></Link>
          <Link to="/save"><Button color="inherit">Saved{" "}{listOfLike.length}</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}