import React, { ReactElement, useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
    postComment : any,
}

function PostComment({postComment}: Props): ReactElement {
    const [comment, setComment] = useState<String>('');

    const handleComment = (e : any) => {
        console.log(comment);
        
        setComment(e.target.value);
    }

    const handlePostComment = () => {
        let tmpComment = comment;
        postComment(tmpComment);
        setComment('');
    }

    return (
        <div>
            <Typography variant='h3'>Post a comment : </Typography>
            <TextField onChange={handleComment} value={comment} />
            <Button onClick={handlePostComment}>post</Button>
        </div>
    )
}

export default PostComment
