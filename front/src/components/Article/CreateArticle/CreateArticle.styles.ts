import {makeStyles} from '@material-ui/core/styles';

const useCreateArticleStyle = makeStyles(theme => ({
    paper__padding : {
        padding : '16px'
    },
    title__textfield : {
        width: 'inherit'
    },
    subtitle__textfield: {
        width: 'inherit'
    },
    description__textfield: {
        width: 'inherit'
    },
    tag__textfield: {
        width: 'inherit'
    },

    div: {
        paddingBottom : '16px',
        width:'100%'
    }

}))

export default useCreateArticleStyle;