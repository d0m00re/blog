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
                comments !== null && comments.map((elem: any) => <Typography variant='body1' key={elem._id}>{elem.comment}</Typography>
            )
            }
        </div>
    )
}

export default ViewComment
