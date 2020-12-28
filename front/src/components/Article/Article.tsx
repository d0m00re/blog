import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TArticle from './../../type/TArticle';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ArticleTag from './ArticleTag';

import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    root: {
    //  width: '50vw',
    },
    media: {
      height: 140,
    },
  });

interface Props {
    article : TArticle;
}

function ArticleCard({article}: Props): ReactElement {
    const classes = useStyles();
    const history = useHistory();

    const goViewFullArticle = () => {
      history.push(`/Article/${article._id}`);
    }

    return (
        <Card className={classes.root} style={{marginBottom : '10px'}} onClick={goViewFullArticle}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image= {article.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {article.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {article.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
            
            <ArticleTag tag = {article.tag} />
            
          </CardActions>
        </Card>
      );
}

export default ArticleCard;
