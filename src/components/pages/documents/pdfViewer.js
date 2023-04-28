import React, { useEffect } from 'react'
import './pdfViewer.css'
import { Button } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { SpecialZoomLevel } from '@react-pdf-viewer/core';
import { RenderZoomProps, zoomPlugin } from '@react-pdf-viewer/zoom';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 

const PdfViewer = ({ open, onClose , pdfUrl, title }) => {
  const zoomPluginInstance = zoomPlugin();
  const { Zoom } = zoomPluginInstance;
 
useEffect(()=>{
  
}, [])
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} id='appbar'>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
             {title}
            </Button>
          </Toolbar>
        </AppBar>
        <div>

          <div>
            <div className='ControlHolder'>
              <div className='ControlContainer'>
                <p>Here you can change the layout</p>
                <div className='ControlContainerBox'>

                  <Zoom>
                    {(props: RenderZoomProps) => (
                      <Button onClick={() => props.onZoom(SpecialZoomLevel.ActualSize)}>
                        Actual size
                      </Button>
                    )}
                  </Zoom>


                  <Zoom>
                    {(props: RenderZoomProps) => (
                      <Button onClick={() => props.onZoom(SpecialZoomLevel.PageFit)} >
                        Page fit
                      </Button>
                    )}
                  </Zoom>


                  <Zoom>
                    {(props: RenderZoomProps) => (
                      <Button onClick={() => props.onZoom(SpecialZoomLevel.PageWidth)}>
                        Page width
                      </Button>
                    )}
                  </Zoom>


                  <Zoom>
                    {(props: RenderZoomProps) => (
                      <Button onClick={() => props.onZoom(0.5)} >
                        50%
                      </Button>
                    )}
                  </Zoom>


                  <Zoom>
                    {(props: RenderZoomProps) => (
                      <Button onClick={() => props.onZoom(1)}>
                        100%
                      </Button>
                    )}
                  </Zoom>


                  <Zoom>
                    {(props: RenderZoomProps) => (
                      <Button onClick={() => props.onZoom(1.5)}>
                        150%
                      </Button>
                    )}
                  </Zoom>

                </div>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
              className='pdfViewerContainer'
            >
              
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} plugins={[zoomPluginInstance]}  />
              </Worker>
            </div>
          </div>
        </div>
      </Dialog>
    </div>

  );
};

export default PdfViewer;
