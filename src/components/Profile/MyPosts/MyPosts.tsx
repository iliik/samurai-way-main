import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ConnectPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


interface PostPropsType extends ConnectPropsType {
}

const MyPosts = (props: PostPropsType) => {
    const postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    );

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' placeholder='Post messages' component={Textarea}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button className={s.button}>Add post</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;