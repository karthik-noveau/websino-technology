import React from 'react'
import { useState } from 'react'
// import PdfViewer from "./pdfViewer";
import './doc.css'
import { Button } from '@material-ui/core';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import PdfViewer from './pdfViewer';
import data from './Data'



function Doc() {

    const [open, setOpen] = useState(false);
    const [pdfData, setPdfData] = useState({
        title: '',
        url: ''
    });
    const handleClickOpen = (e) => {
        setOpen(true);
        setPdfData({
            title: e.currentTarget.getAttribute('title'),
            url: e.currentTarget.getAttribute('pdfUrl')
        })
        console.log(data[0].url)
        console.log(pdfData.url)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='docHolder'>
            <div className='docHolderContainer'>
                <h1>Documents Library</h1>

                <div className='langContainer'>
                    <p>Program Language : Java</p>
                    <div className='javaContainer'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='javaContainerBox'>
                                        <img src={item.img} />
                                        <p>{item.description}</p>
                                        <Button variant='contained' onClick={handleClickOpen} pdfUrl={item.url} title={item.title}>open<MdOutlineArrowForwardIos className='arrowIcon' /></Button>
                                        <PdfViewer open={open} onClose={handleClose} pdfUrl={pdfData.url} title={pdfData.title} />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doc