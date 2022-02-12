import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromLocal, listLike } from '../../features/search/searchSlice';


export default function Navbar(props) {
  //Props
  const { handleChangeTab } = props

  //Redux
  const listOfLike = useSelector(listLike)
  const dispatch = useDispatch();

  //Hook
  useEffect(() => {
    dispatch(getDataFromLocal()) //Get data from local storage
  }, [dispatch])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GIPHY Searcher
          </Typography>
          <Button color="inherit" onClick={() => { handleChangeTab(true) }}>Search</Button>
          <Button color="inherit" onClick={() => { handleChangeTab(false) }}>Saved{" "}{listOfLike.length}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}