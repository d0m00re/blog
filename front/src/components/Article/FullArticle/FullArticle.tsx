import React, { ReactElement } from 'react'
import TArticle from './../../../type/TArticle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

interface Props {
    article : TArticle;
}

function FullArticle({article}: Props): ReactElement {


    return (
        <Paper elevation={3}>
            <Typography variant='h2' align='center'>{article?.title}</Typography>
            <Typography variant='body1' align='center'>{article?.description}</Typography>
        </Paper>
    )
}

export default FullArticle
 