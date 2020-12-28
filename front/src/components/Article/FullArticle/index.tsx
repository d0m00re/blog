import React, { ReactElement, useState, useEffect } from 'react'
import FullArticle from './FullArticle';
import PostComment from './PostComment';
import ViewComment from './ViewComment';
import Paper from '@material-ui/core/Paper';
import TArticle from './../../../type/TArticle';

import {useParams} from 'react-router-dom';
import axios from 'axios';

interface Props {
    
}

function Index({}: Props): ReactElement {
    const params : any = useParams();
    const [article, setArticle] = useState<any | null>(null);
    const [comments, setComments] = useState<any | null>(null);

    const handlePostComment = ((msg : string) => {
        console.log('Post a comment : ' + msg);
        axios.post(`http://localhost:3042/comment/${params.uuid}`,
            {comment : msg,
            })
        .then(res => {
            console.log('comment successful added');
            axios.get(`http://localhost:3042/comments/${params.uuid}`)
            .then(res => {
                console.log('get comment ; ');
                console.log(res.data);
                setComments(res.data);
            })
            .catch(() => {
                console.log('get comment');
                
            })
        })
        .catch(err => {
            console.log('error add message');
        })
    })

    useEffect(() => {
        console.log('get article');
        axios.get(`http://localhost:3042/article/${params.uuid}`)
        .then(res => {
            setArticle(res.data);
        })
        .catch(() => {
            console.log(`error get article : ${params.uuid}`);
            
        })

        axios.get(`http://localhost:3042/comments/${params.uuid}`)
        .then(res => {
            console.log('get comment ; ');
            console.log(res.data);
            setComments(res.data);
        })
        .catch(() => {
            console.log('get comment');
            
        })

    }, [])

    useEffect(() => {
        
    }, [comments])

    return (
        <Paper>
            <FullArticle  article={article}/>
            <PostComment postComment={handlePostComment}/>
            <ViewComment comments={comments}/>
        </Paper>
    )
}

export default Index;