
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { like, listLike } from '../../features/search/searchSlice';

export default function ResultBox(props) {
    //Props
    const { data } = props

    //Redux
    const dispatch = useDispatch();
    const listOfLike = useSelector(listLike)

    //Handle event like image
    const handleClick = (id) => {
        dispatch(like(id))
    }

    return (
        <Box >
            {data && (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}
                >
                    <Masonry>
                        {data.map((item, index) => (
                            <ImageListItem key={index} sx={{ display: "block", '&:hover > div': { opacity: "1" }, padding: "5px" }} >
                                <img
                                    src={`${item.images.original.url}`}
                                    srcSet={`${item.images.original.url}`}
                                    alt={item.images.original.urlle}
                                    loading="lazy"
                                    onClick={() => { handleClick(item.id) }}
                                />
                                <ImageListItemBar
                                    sx={{ background: "transparent", opacity: `${listOfLike.includes(item.id) ? ("1") : ("0")}` }} //Set opacity for like button
                                    actionIcon={

                                        <AiFillHeart color={`${listOfLike.includes(item.id) ? ("#f44336") : ("#ffc6c6")}`} style={{ transform: "scale(3) translateX(-8px) translateY(-6px)" }} />
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            )}
        </Box>
    )
}