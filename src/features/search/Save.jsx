
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ResultBox from '../../components/Common/ResultBox';
import Box from '@mui/material/Box';
import { listLike } from '../../features/search/searchSlice';
import gifApi from '../../api/gifApi';

export default function Save() {
    //state
    const [data, setData] = useState([])

    //Redux
    const listOfLike = useSelector(listLike)

    useEffect(() => {
        const input = listOfLike.toString();
        gifApi.getImgById(input).then(res => setData(res.data.data)).catch()
    }, [listOfLike])

    return (<>
        <Box sx={{ marginTop: "40px" }}>
            <ResultBox data={data} />
        </Box>
    </>)
}