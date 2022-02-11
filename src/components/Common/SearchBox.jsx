import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect, useCallback } from 'react';
import gifApi from '../../api/gifApi';
import debounce from 'lodash/debounce';

export default function SearchBox(props) {

    const { handleChange } = props
    const [listHint, setListHint] = useState([])
    const [input, setInput] = useState()

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={listHint}
            value={input}
            onChange={(newTeam) => {

                gifApi.search(newTeam.name).then(res => handleChange(res.data.data))
            }}
            onInputChange={(e) => {
                gifApi.autocomple(e.target.value).then(res => setListHint(res.data.data)).catch()
            }}
            onKeyDown={
                (e) => {
                    if (e.key === 'Enter') {
                        gifApi.search(e.target.value).then(res => handleChange(res.data.data))
                    }
                }
            }
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search..." value={params} />}
            getOptionLabel={option => option.name}
        />
    );
}
