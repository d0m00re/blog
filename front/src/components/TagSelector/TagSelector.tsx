import React, { ReactElement } from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface Props {
   // tagList : string [];
   id : number,
   setTagList : (id : number, data : string) => any,
   tag : string,
   tagList : string[],
}

const TagSelector = ({id, setTagList, tag, tagList}: Props): ReactElement => {
    const onChangeTag = (e : any, value : any) => {
        console.log(value);
        setTagList(id, value);
    }
    
    return (
        <Autocomplete
            style={{width : '200px', margin : '8px'}}
            options={tagList}
            renderInput={(params) => <TextField {...params} variant='outlined' />}
            onChange={onChangeTag}
        />

    )
}

export default TagSelector

