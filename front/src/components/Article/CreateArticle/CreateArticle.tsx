import React, { useState, useEffect, KeyboardEvent, KeyboardEventHandler, ChangeEvent } from 'react';
import Textfield from '@material-ui/core/TextField';
import Typographie from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import useCreateArticleStyle from './CreateArticle.styles';
import axios from 'axios';
import MultyTagSelector from './../../TagSelector/MultyTagSelector';

type TFormData = {
    title: string,
    tag: string[],
    description: string,
    img: any
} 

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

const CreateArticle = () => {
    const classe = useCreateArticleStyle();

    const [allTag, setAllTag]= useState<string[]>([]);

    const [tmpListTag, setTmpListTag] = useState<string[]>(['']);

    useEffect(() =>  {
        axios.get('http://localhost:3042/tags')
        .then((res) => {
            console.log('all tag : ');
            console.log(res.data);
            setAllTag(res.data.map((elem : any) => elem.name));
        })
    }, [])

    const [formData, setFormData] = useState<TFormData>({
        title: '',
        tag: [],
        description: '',
        img: ''
    });

    const handleFormUpd = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('value : ');
        console.log(e.target.value);
        
        
        setFormData((old) => ({ ...old, [e.target.name]: e.target.value }));
    };

    const handleFormImg = (e : any) => {
        //let file = (<HTMLInputElement>e.target).files[0];
        let file = e.target.files[0];
        console.log('file');
        console.log(file);
        setFormData((old) => ({...old, [e.target.name] : file}));
    }

    useEffect(() => {        
        setFormData({...formData, tag : tmpListTag})
    }, [tmpListTag])

    const handleSaveArticle = () => {
        console.log('send article : ');
        console.log(formData);


        axios.post('http://localhost:3042/article', formData)
            .then((res) => {
                setFormData({title : '', tag : [''], description : '', img : ''});
                setTmpListTag(['']);
            })
            .catch((err) => {
                console.log('error : ' + err);
            })
    }

    return (
        <div>
            <Typographie variant='h2'>Write an article</Typographie>
            <Paper className={classe.paper__padding}>
                <Grid direction='column' container>
                    <Typographie>Cover image</Typographie>
                    <Textfield
                        name='img'
                        type='file'
                        onChange={handleFormImg}
                       //value={formData.img}
                    />
                    {/* <Button>Add a cover image</Button> */}
                    <div className={classe.div}>
                    <Typographie>Title</Typographie>
                    <Textfield
                        name='title'
                        variant='outlined'
                        className={classe.title__textfield}
                        onChange={handleFormUpd}
                        value={formData.title}
                    />
                    </div>
                    <div className={classe.div}>
                    <Typographie>Description</Typographie>
                    <Textfield
                        name='description'
                        variant='outlined'
                        placeholder='description'
                        className={classe.description__textfield}
                        multiline
                        rows={4}
                        onChange={handleFormUpd}
                        value={formData.description}
                    ></Textfield>
                    </div>

                    <div>
                        <Typographie>Tag</Typographie>
                        <MultyTagSelector allTag={allTag} tmpListTag={tmpListTag} setTmpListTag={setTmpListTag} />
                    </div>
                </Grid>
            </Paper>

            <Button onClick={handleSaveArticle}>Publish</Button>
            <Button>Save Draft</Button>
        </div>
    )
}

export default CreateArticle
