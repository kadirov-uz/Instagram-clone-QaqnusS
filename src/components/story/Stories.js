import React, {useState, useEffect} from 'react';
import './Stories.css';
import StoryCircle from '../story-circle/StoryCircle';
import {database } from '../../components/server/firebase';


function Stories() {
    const [allStories, setAllStories] = useState([]);
    useEffect(() => {
        database.collection("stories").onSnapshot(allStories => {
            setAllStories(
                allStories?.docs.map(story  => ({
                    uniqueId: story.id,
                    data:story.data()
                }))[0].data.storyImage
            )
        })
       
    }, [])
    console.log(allStories)
    return (
        <div className="home__story">
            {
                allStories?.map((story, id) => 
                    <StoryCircle key={id} image={story}/>)
            }
          
        </div>
    )
}

export default Stories
