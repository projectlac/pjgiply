import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import gifApi from '../../../api/gifApi';


export default function SearchBox(props) {
    //Props
    const { handleChange } = props

    //State
    const [listHint, setListHint] = useState([])

    // Get data from API
    const getData = async (data) => {
        await handleChange([])
        gifApi.search(data).then(res => handleChange(res.data.data)).catch()
    }

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={listHint}
            onChange={(event, newValue) => {
                getData(newValue.name)

            }}
            onInputChange={(e) => {
                gifApi.autocomple(e.target.value).then(res => setListHint(res.data.data)).catch()
            }}
            onKeyDown={
                (e) => {
                    if (e.key === 'Enter') {
                        getData(e.target.value)
                    }
                }
            }
            sx={{ width: { md: 521, xs: "97%" }, margin: "40px auto", '& .MuiOutlinedInput-root': { borderRadius: "30px" } }}
            renderInput={(params) => <TextField {...params} placeholder="Search..." value={params} />}
            getOptionLabel={option => option.name}
        />
    );
}
