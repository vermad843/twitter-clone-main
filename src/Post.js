import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'


function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar 
}) {
    return (
        <div className = "post">
            <div className = "post__avatar">
                <Avatar
                    src = "https://avatars.githubusercontent.com/u/51009293?s=60&v=4"
                  />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                        <h3>
                            Vishnu Verma
                            <span>
                                 <VerifiedUserIcon
                                   className = "post__badge"
                                  />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
