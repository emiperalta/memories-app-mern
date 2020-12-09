import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { InputChange, InputSubmit } from './types';
import { createPost, updatePost } from '../../actions/posts.actions';
import { IPost, PostProps } from '../../api/types';

const initialState = {
    title: '',
    message: '',
    creator: '',
    tags: [''],
    selectedFile: '',
};

const Form: React.FC<PostProps> = (props: PostProps) => {
    // get post if there is a currentId (currentId !== null)
    const post = useSelector((state: RootStateOrAny) =>
        props.currentId
            ? state.posts.find((post: IPost) => post._id === props.currentId)
            : null
    );

    const classes = useStyles();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState(initialState);

    // hook that fills the form fields if there is a post and on each change of the constant 'post'
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const submitHandler = (e: InputSubmit) => {
        e.preventDefault();

        props.currentId
            ? dispatch(updatePost(props.currentId, postData))
            : dispatch(createPost(postData));

        setPostData({ ...initialState, tags: [] });
        props.setCurrentId!('');
    };

    const onChangeHandler = (e: InputChange) => {
        const { name, value } = e.target;

        setPostData({
            ...postData,
            [name]: value,
        });
    };

    const tagsHandler = (e: InputChange) => {
        const { value } = e.target;

        setPostData({
            ...postData,
            tags: value.split(','),
        });
    };

    const fileHandler = ({ base64 }: { base64: string }) => {
        setPostData({
            ...postData,
            selectedFile: base64,
        });
    };

    const clearHander = () => {
        setPostData({ ...initialState, tags: [], selectedFile: '' });
        props.setCurrentId!('');
    };

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={submitHandler}
            >
                <Typography variant='h6'>
                    {props.currentId ? 'Editing' : 'Creating'} a memory
                </Typography>
                <TextField
                    name='creator'
                    label='Creator'
                    variant='outlined'
                    fullWidth
                    value={postData.creator}
                    onChange={onChangeHandler}
                />
                <TextField
                    name='title'
                    label='Title'
                    variant='outlined'
                    fullWidth
                    value={postData.title}
                    onChange={onChangeHandler}
                />
                <TextField
                    name='message'
                    label='Message'
                    variant='outlined'
                    fullWidth
                    value={postData.message}
                    onChange={onChangeHandler}
                />
                <TextField
                    name='tags'
                    label='Tags'
                    variant='outlined'
                    fullWidth
                    value={postData.tags}
                    onChange={tagsHandler}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={fileHandler}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    size='large'
                    fullWidth
                    type='submit'
                >
                    Submit
                </Button>
                <Button
                    className={classes.buttonClear}
                    variant='contained'
                    size='small'
                    fullWidth
                    onClick={clearHander}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
