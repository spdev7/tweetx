import React, { useState } from 'react'
import Card from './Card';
import UserCard from './UserCard';
import { InputGroup, Button,Input } from 'reactstrap';

const Write = () => {

    const [renderwrite,setRenderwrite] = useState(false);
    const [renderButton,setButton] = useState(false);
   
    const handleButton = () => setButton(true)
    const handleRenderwrite = () => setRenderwrite(true)
    return (
        <div>
            {!renderwrite && (<div>
                { !renderButton && (<Button onClick={handleButton}>Write</Button>)}
                {renderButton && (<div>
                    <InputGroup>
                    <div>
                    <Input placeholder="Enter your tweet" size="lg"/>
                    <Button style={{float:"right"}} onClick={handleRenderwrite}>Submit</Button>
                    </div>
                    </InputGroup>
                </div>)}
            </div>)}
        </div>
    )
}
const Feed = () => {
    return (
        <div className="feed_new">
            <Write/>
            {/* <Card/>
            <UserCard/> */}
        </div>
    )
}

export default Feed
