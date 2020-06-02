import React, { useState,useEffect } from 'react'
import { InputGroup, Button,Input } from 'reactstrap';
import { connect } from 'react-redux'
import {add_post} from '../actions'

const Write = (props) => {
    // const [renderwrite,setRenderwrite] = useState(false);
    const [renderButton,setButton] = useState(false);
    const [input,setInput] = useState('')

    const handleButton = () => setButton(!renderButton)

    const handleInput = (event) => {
        setInput(
            [event.target.name] = event.target.value
        )
    }

    const handleSubmit = (e) => {
        props.add_post(input);
    }

    return (
        <div className="feed-container">
                { !renderButton && (<Button color="danger" onClick={handleButton}>Write</Button>)}
                {renderButton && (<div>
                    <InputGroup>
                    <div>
                    <Input name="input" placeholder="Enter your tweet" size="lg" onChange={handleInput}/>
                    <Button color="danger" style={{float:"right"}} onClick={() => {handleButton();handleSubmit()}}>Submit</Button>
                    </div>
                    </InputGroup>
                </div>)}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_post: (tweet) => dispatch(add_post(tweet)),
    }
}

export default connect(null,mapDispatchToProps)(Write)
