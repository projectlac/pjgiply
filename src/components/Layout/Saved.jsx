
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { AiFillHeart } from "react-icons/ai"
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { listLike } from '../../features/search/searchSlice';
import gifApi from '../../api/gifApi';
export default function Saved() {
    const [data, setData] = useState([])
    const listOfLike = useSelector(listLike)
    useEffect(() => {
        const input = listOfLike.toString();
        gifApi.getImgById(input).then(res => console.log(res)).catch()
    }, [])
    return (<>
        <Box>

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