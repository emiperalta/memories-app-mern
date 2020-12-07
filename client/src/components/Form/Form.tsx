import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { InputChange, InputSubmit } from './types';
import { createPost } from '../../actions/posts.actions';

const initialState = {
    title: '',
    message: '',
    creator: '',
    tags: [''],
    selectedFile: '',
};

const Form = () => {
    const [postData, setPostData] = useState(initialState);
    const classes = useStyles();
    const dispatch = useDispatch();

    const submitHandler = (e: InputSubmit) => {
        e.preventDefault();

        dispatch(createPost(postData));

        console.log(postData);
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

    const clearHander = () => {};

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={submitHandler}
            >
                <Typography variant='h6'>Creating a memory</Typography>
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
                    color='primary'
                    size='large'
                    fullWidth
                    type='submit'
                >
                    Submit
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
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
