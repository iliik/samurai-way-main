import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css';
import {PostType} from "../../../Redux/store";
import {Post} from "./Posts/Post";



type PostPropsType = {
    postsData: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: PostPropsType) => {
    const postsElements = props.postsData.map(p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    );

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (props: any) => {
        props.addPost();
    }

    const onPostChange = (props: any) => {
            let text = newPostElement.current.value;
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