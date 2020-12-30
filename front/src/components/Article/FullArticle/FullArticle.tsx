import React, { ReactElement } from 'react'
import TArticle from './../../../type/TArticle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
interface Props {
    article : TArticle;
}

function FullArticle({article}: Props): ReactElement {


    return (
        <>
            <Typography variant='h2' align='center'>{article?.title}</Typography>
            {
                article?.tag.map((elem) => <Chip label={'# ' + elem} />)
            }
        <Typography variant='body1' align='center'>{article?.description}</Typography>
       </>
    )
}

export default FullArticle
 