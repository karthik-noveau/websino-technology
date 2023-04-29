import React, { useState } from 'react';
import axios from 'axios';
import MONGO_URL from '../../../config';
import feedbackImg from '../../Assets/feedbackImg.jpg'
import './feedBack.css'
import kumClg from '../../Assets/kumClg.png'
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
    const [regNo, setRegNo] = useState('')
    const [tutor, setTutor] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');
    console.log("data1", MONGO_URL)

    async function handleSubmit(event) {

        event.preventDefault();

        if (name != '' && regNo!=0 && tutor != '' && rating != 0 && comments != '') {

            const user = { name,regNo, tutor, rating, comments };
            console.log("data", user)
            console.log("MONGO_URL,", MONGO_URL)

            try {
                const response = await axios.post(`${MONGO_URL}/feedback`, user);
                console.log(response.data);
                alert("Thank you for your feedback")
            } catch (error) {
                console.error(error);
            }
        }
        else {
            alert("Enter Valid details")
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
                            <div className='feedbackFromTitle'>

                                <img src={kumClg} />
                                <p>FeedBack Form</p>

                            </div>
                            <div className='inputContainer'>
                                <label>Name</label>
                                <TextField id="standard-basic" value={name} placeholder='Name' variant="standard" className='inputContainerBox' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='inputContainer'>
                                <label>Reg No</label>
                                <TextField id="standard-basic" value={regNo} placeholder='Reg No' variant="standard" className='inputContainerBox' onChange={(e) => setRegNo(e.target.value)} />
                            </div>
                            <div className='inputContainer'>
                                <label>Rating</label>
                                <FormControl variant="standard" className='inputContainerBox'>

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
                                        <MenuItem value="Kannan">Kannan</MenuItem>
                                        <MenuItem value="Karthika">Karthika </MenuItem>
                                        <MenuItem value="Karthik">Karthik</MenuItem>
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
                                <textarea value={comments} onChange={(e) => setComments(e.target.value)} className='inputContainerBox' placeholder='write your comments'>

                                </textarea>

                            </div>
                            <div className='inputContainer'>
                                <Button variant="contained" type="submit" >Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedBack;
