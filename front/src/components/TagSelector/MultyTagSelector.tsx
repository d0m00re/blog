import React, { ReactElement, useState, useEffect } from 'react'
import TagSelector from './TagSelector';
import Grid from '@material-ui/core/Grid';

let tag : string[] = [
    'react',
    'material-ui',
    'crypto'
]


interface Props {
    allTag : string[],
    tmpListTag : string[],
    setTmpListTag : React.Dispatch<React.SetStateAction<string[]>>
 }
 
const MultyTagSelector = ({allTag, tmpListTag, setTmpListTag} : Props) : ReactElement => {
    const setTagV2 = (id : number, data : string) : any => {
        let tags = [...tmpListTag];
        tags[id] = data;
        if (data !== '' && id + 1 === tags.length)
            tags.push('');
        setTmpListTag(tags);
        console.log(tags);
}

    return (
        <Grid container direction = 'row' justify='flex-start'>
            {
                tmpListTag.map((elem, index) => <TagSelector
                                                tag={tmpListTag[index]}
                                                setTagList={setTagV2}
                                                tagList={allTag}
                                                id={index} />)
            }            
        </Grid>
    )
}

export default MultyTagSelector
