import React, { ReactElement, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function GeneralLayout({children}: Props): ReactElement {
    return (
        <div  style={{width : '80vw', margin : 'auto'}}>
            {children}
        </div>
    )
}

export default GeneralLayout
