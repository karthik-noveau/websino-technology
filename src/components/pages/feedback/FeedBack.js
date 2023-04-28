import React, { useState } from 'react';
import axios from 'axios';
import MONGO_URL from '../../../config';
import feedbackImg from '../../Assets/feedbackImg.jpg'
import './feedBack.css'
// ------MUI-----
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';

function FeedBack() {
    const [name, setName] = useState('');
    const [tutor, setTutor] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');
    console.log("data1", MONGO_URL)

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        console.log("data")

        const user = { name, tutor, rating, comments };
        console.log("MONGO_URL,", MONGO_URL)

        try {
            const response = await axios.post(`${MONGO_URL}/feedback`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className='feedbackContainer'>
                <div className='feedbackContainerBox'>
                    <div className='feedbackContainerBoxPiece1'>
                        <img src={feedbackImg} />
                    </div>

                    <div className='feedbackContainerBoxPiece2'>
                        <form onSubmit={handleSubmit}>
                            <div className='inputContainer'>
                                <label>Name</label>
                                <TextField id="standard-basic" placeholder='Name' variant="standard" className='inputContainerBox' />
                            </div>
                            <div className='inputContainer'>
                                <label>Rating</label>
                                <FormControl variant="standard"   className='inputContainerBox'>

                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={tutor}
                                        onChange={(e) => setTutor(e.target.value)}
                                        label="Tutor"
                                        displayEmpty
                                      
                                    >
                                        <MenuItem value="" disabled>
                                            <em>Select a tutor</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                            <div className='inputContainer'>
                                <label>Give your Rating</label>
                                <Rating
                                  className='inputContainerBox'
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                            </div>
                            <div className='inputContainer'> 
                                <label className='textAreaLable'>Comment</label>
                                <textarea value={comments} onChange={(e) => setComments(e.target.value)} className='inputContainerBox'>

                                </textarea>

                            </div>
                            <Button variant="contained" >Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedBack;
