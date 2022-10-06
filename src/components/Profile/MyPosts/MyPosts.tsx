import React from 'react';
import s from './MyPosts.module.css'
import {PostType} from "../../../Redux/store";
import {Post} from "./Posts/Post";
import {ConnectPropsType} from "./MyPostsContainer";

interface PostPropsType extends ConnectPropsType{}

const MyPosts = (props: PostPropsType) => {
    const postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    );

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
            let text = newPostElement.current!.value;
            props.updateNewPostText(text);
        }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText}
                        />
                </div>
                <div>
                    <button className={s.button} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;