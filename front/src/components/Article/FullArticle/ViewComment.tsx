import React, { ReactElement, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
interface Props {
    comments : any;
}

function ViewComment({comments}: Props): ReactElement {
    
    useEffect(() => {
        console.log(' comment update ');
        console.log(comments);
        
        
    }, [comments])
    
    return (
        <div>
            <Typography variant='h3'>Comment:</Typography>
            {
                comments !== null && comments.map((elem: any) => {
                
                return (
                    <Paper elevation={3} key={elem._id}>
                        <Typography variant='body1'>{elem.comment}</Typography>
                    </Paper>);
                })
            }
        </div>
    )
}

export default ViewComment
