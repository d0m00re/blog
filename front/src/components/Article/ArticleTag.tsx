import React, { ReactElement } from 'react'
import Chip from '@material-ui/core/Chip'

interface Props {
    tag : string[];
}

const ArticleTag = ({tag}: Props) : ReactElement => {
    return (
        <>
            {
                tag.map((elem) => <Chip label={'# ' + elem}></Chip>)
            }
        </>
    )
}

export default ArticleTag
