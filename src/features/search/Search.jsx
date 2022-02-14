
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import SearchBox from "../../components/Common/SearchBox"
import gifApi from '../../api/gifApi';
import ResultBox from '../../components/Common/ResultBox';

export default function Search() {
  //State
  const [data, setData] = useState([])

  //Hook
  useEffect(() => {
    gifApi.treding().then(res => setData(res.data.data)).catch()
  }, [])

  //Handle change from search box
  const handleChange = (st) => {
    setData(st)
  }

  return (<>
    <Box>
      <SearchBox handleChange={handleChange} />
      <ResultBox data={data} />
    </Box>
  </>)
}