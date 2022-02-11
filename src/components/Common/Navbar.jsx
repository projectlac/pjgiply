import react, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { listLike, getDataFromLocal } from '../../features/search/searchSlice';


export default function Navbar(props) {
  const { handleChangeTab } = props
  const listOfLike = useSelector(listLike)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromLocal())
  }, [])
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