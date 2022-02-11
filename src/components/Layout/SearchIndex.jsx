
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import SearchBox from "../Common/SearchBox"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AiFillHeart } from "react-icons/ai"
import ImageListItemBar from '@mui/material/ImageListItemBar';
import gifApi from '../../api/gifApi';
import { useDispatch, useSelector } from 'react-redux';
import { like, listLike } from '../../features/search/searchSlice';
export default function Search() {
    const [data, setData] = useState([])
    useEffect(() => {
        if (data.length < 1) {
            gifApi.treding().then(res => setData(res.data.data)).catch()
        }
    })
    const dispatch = useDispatch();
    const handleClick = (id) => {
        dispatch(like(id))

    }
    const handleChange = (st) => {
        setData(st)

    }

    const listOfLike = useSelector(listLike)

    return (<>

        <Box>
            <SearchBox handleChange={handleChange} />

            <Box >
                {data && (
                    <ImageList cols={5} gap={8} variant="masonry" >

                        {data.map((item) => (
                            <ImageListItem key={item.images.original.url} sx={{ display: "block", '&:hover > div': { opacity: "1" } }} >
                                <img
                                    src={`${item.images.original.url}`}
                                    srcSet={`${item.images.original.url}`}
                                    alt={item.images.original.urlle}
                                    loading="lazy"
                                    onClick={() => { handleClick(item.id) }}
                                />
                                <ImageListItemBar
                                    sx={{ background: "transparent", opacity: "0" }}
                                    actionIcon={

                                        <AiFillHeart color={`${listOfLike.includes(item.id) ? ("#f44336") : ("#ffc6c6")}`} style={{ transform: "scale(3) translateX(-8px) translateY(-6px)" }} />
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                )}
            </Box>
        </Box>
    </>)
}