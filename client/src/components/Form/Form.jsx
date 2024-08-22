import React, { useState, useEffect } from 'react';
import "./Form.css"
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <div className="paper">
            <form autoComplete="off" noValidate className="root form" onSubmit={handleSubmit}>
                <h6 className="form-title">
                    {currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
                </h6>
                <input
                    type="text"
                    name="creator"
                    className="input-field"
                    placeholder="Creator"
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    fullWidth
                />
                <input
                    type="text"
                    name="title"
                    className="input-field"
                    placeholder="Title"
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    fullWidth
                />
                <textarea
                    name="message"
                    className="textarea-field"
                    placeholder="Message"
                    rows="4"
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    fullWidth
                />
                <input
                    type="text"
                    name="tags"
                    className="input-field"
                    placeholder="Tags (comma separated)"
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    fullWidth
                />
                <div className="file-input">
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <button
                    className="button-submit"
                    type="submit"
                    fullWidth
                >
                    Submit
                </button>
                <button
                    className="button-clear"
                    type="button"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </button>
            </form>
        </div>
    );
}


export default Form;