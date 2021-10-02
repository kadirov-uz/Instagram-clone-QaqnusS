import React from 'react';
import './Feed.css';
import Post from '../post/Post';
import { hoverData } from '../../data/HoverPreview';

function Feed() {
    return (
        <div className="feed">
            {
                hoverData?.map(post =>
                <Post key={post.id} accountImage={post.accountImage} posts={post.posts} />

                )
            }
        </div>
    )
}

export default Feed
