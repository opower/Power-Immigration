import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 346,
    margin:'2rem',
  },
  media: {
    height: 300
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const articles = props.articles;

  return (
    <>
    {articles ? console.log(articles.urlToImage) : null}
    {!articles ? null : articles.slice(0,6).map(article => {
      return(
        <div style={{display:'inline-flex'}}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={article.urlToImage}
                title="image"
              />
              <CardContent style={{height:250}}>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.description.length > 200 ? article.description.substring(0,180)+'...' : article.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{marginTop:'1rem'}}>
              <Button size="small" color="primary" href={article.url} target="_blank">
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
      );

    })}</>
  );
}