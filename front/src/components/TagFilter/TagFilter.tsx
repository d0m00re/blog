import React, { useEffect, ReactElement } from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { requirePropFactory } from '@material-ui/core';

interface Props {
    tagList : string[],
    currentTag : string[],
    setCurrentTag : React.Dispatch<React.SetStateAction<string[]>> 
}

function TagFilter({tagList, currentTag, setCurrentTag}: Props): ReactElement {

    useEffect(() => {
        console.log('tag list ------>');
        console.log(tagList);
    }, [tagList])

    const handleClickTag = (event : any) => {
        console.log(event.target.innerText);
        if (currentTag.filter(elem => elem === event.target.innerText).length === 0)
        {
            setCurrentTag([...currentTag, event.target.innerText]);
        }
        else
        {
            let tmp : any = currentTag.filter(elem => elem !== event.target.innerText);
            setCurrentTag(tmp);
        }
    }

    useEffect(() => {
        console.log('current tag : ');
        
        console.log(currentTag);

        console.log( currentTag.filter(elem => elem === 'REACT').length === 1)
        
    }, [currentTag])

    return (
        <Paper style={{width:'70%'}}>
            <Typography>DISCOVER MORE OF WHAT MATTER TO YOU</Typography>
            <Grid item container direction='column'>
                {


                    tagList.map(tagElem => {
                        let color = (currentTag.filter((elem : string) => elem === tagElem.toUpperCase()).length === 1) ? 'red' : 'yellow'
                        console.log('new color : ' + color);
                        console.log('tag elem');
                        console.log(tagElem);
                        console.log('current tag : ');
                        
                        console.log(currentTag);
                        
                        
                        return (                        
                        <Button
                            key={tagElem}
                            style={{backgroundColor : color}}
                            onClick={handleClickTag}
                            variant={( (currentTag.filter(elem => elem === tagElem).length === 1)) ? 'outlined' : 'contained'}>
                                {tagElem}
                        </Button>
                    )
                        
                    })
                }
            </Grid>
        </Paper>
    )
}

export default TagFilter
