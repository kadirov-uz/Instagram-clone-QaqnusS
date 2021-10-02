import React from 'react';
import './StoryCircle.css';
import {useStateValue} from '../../context/stateprovider/StateProvider';

function StoryCircle({image}) {
    const [{activeStory}, dispatch] = useStateValue();
    const setActiveStory = () => {
        let timer = setTimeout(() => {
            dispatch({
                type:"CLOSE_ACTIVE_STORY",
                activeStory:null
            })
        }, 5000)
        dispatch({
            type:"SET_ACTIVE_STORY",
            activeStory:{
                storyImage: image,
                timeout:timer,
                activeStory
            }
        })
    }
    return (
        <div className="story__circleWrapper" onClick={setActiveStory}>
            <div className="story__circle">
                <div className="story__container">
                    <img src={image} alt="" className="story__circleImage"/>
                </div>
            </div>
            <span className="story__circleUsername">QaqnusS</span>
        </div>
    )
}

export default StoryCircle
