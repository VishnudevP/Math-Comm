import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./Story.css"


function Story({image , profileSrc , title  }) {

    return <div className="story" style= {{ backgroundImage : `url(${image})` }}>

            <Avatar className="story__avatar" src={profileSrc}/>
            <h4> {title}</h4>
        </div>
}

export default Story
