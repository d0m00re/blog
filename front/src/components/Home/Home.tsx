import React, { useState, useEffect } from 'react';
import Article from './../Article/Article';
import Grid from '@material-ui/core/Grid'
import TagFilter from './../TagFilter/TagFilter';

import TArticle from './../../type/TArticle'

import axios from 'axios';

function Home() {

  const [arts, setArts] = useState<TArticle[]>([]);
  const [artsShow, setArtsShow] = useState<TArticle[]>([])
  const [currentTag, setCurrentTag] = useState<string[]>([])
  const [listTag, setListTag] = useState([]);

  useEffect(() => {
    getAllArticles();
    getAllTag();
  }, [])

  const getAllArticles = () => {
    axios.get('http://localhost:3042/articles')
      .then(res => {
        console.log(res.data);
        setArts(res.data);
        setArtsShow(res.data);
        //setArts(res);
      })
      .catch(err => {

      })
  }

  useEffect(() => {
    console.log('root current tag : ');
    console.log(currentTag);

    setArtsShow(getCurrentArticle());
  }, [currentTag])

  const getAllTag = () => {
    // get all tag
    axios.get('http://localhost:3042/tags')
      .then(res => {
        console.log(' load tag');
        console.log(res.data);
        let tmp = res.data.map((elem: any) => elem.name);
        setListTag(tmp);

      })
      .catch(err => {
        console.log('error load tag');
        console.log(err);
      })
  }

  const getCurrentArticle = (): TArticle[] => {
    console.log('------------------------');

    if (currentTag.length === 0)
      return arts;

    let tmpArt: TArticle[] = [];
    for (let i = 0; i < arts.length; i++) {
      console.log('turn : ' + i + ' ; current tag : ');
      console.log(arts[i].tag);


      if (arts[i].tag.filter((tmpTag: string) => currentTag.filter(t => t.toUpperCase() === tmpTag.toUpperCase()).length > 0).length)
        tmpArt.push(arts[i])
    }
    console.log(' go go go ');
    console.log(tmpArt);

    return tmpArt
  }

  return (
    <>
      <Grid container direction='row' justify='center' className="App" style={{ width: '100vw' }}>
          <Grid item container direction='column' style={{ width: '50%', padding: '8px' }}>
            {
              artsShow.map((elem) => <Article article={elem} />)
            }
          </Grid>

        <Grid item style={{ width: '30%', padding: '8px' }}>
          <TagFilter tagList={listTag} currentTag={currentTag} setCurrentTag={setCurrentTag} />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;