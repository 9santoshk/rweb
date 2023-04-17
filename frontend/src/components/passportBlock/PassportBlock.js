import React, { useState, useRef } from 'react';
import './PassportBlock.css'; // Import SCSS file for styling

const CameraAndImageCapture = () => {

    const [videoStream, setVideoStream] = useState(null);
    const [recording, setRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState(null);
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    const [imageSrc, setImageSrc] = useState(null);
    const canvasRef = useRef(null);

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            videoRef.current.srcObject = stream;
            setVideoStream(stream);
          })
          .catch((error) => {
            console.error('Error accessing camera:', error);
          });
      };
    
      const stopVideo = () => {
        if (videoStream) {
          videoStream.getTracks().forEach((track) => track.stop());
          setVideoStream(null);
        }
      };
    
    const captureImage = () => {
        const videoElement = videoRef.current;
        const canvasElement = canvasRef.current;
        const canvasContext = canvasElement.getContext('2d');

        canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
        const capturedImageSrc = canvasElement.toDataURL('image/png');
        setImageSrc(capturedImageSrc);
        stopVideo();
    };
    const startRecording = () => {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = handleDataAvailable;
          mediaRecorder.start();
          setRecording(true);
          mediaRecorderRef.current = mediaRecorder;
          setTimeout(stopRecording, 30000); // Stop recording after 30 seconds
        }
      };
    
      const stopRecording = () => {
        const mediaRecorder = mediaRecorderRef.current;
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
          setRecording(false);
        }
      };
    
      const handleDataAvailable = (event) => {
        const blob = new Blob([event.data], { type: 'video/webm' });
        setVideoBlob(blob);
      };
    
    
    return (
        <div className="camera-and-image-capture">
            <div className="camera-container">
                <h2>Camera</h2>
                <video ref={videoRef} className="video-element" />
                <div className="buttons-container">
                    <button onClick={startVideo}>Start Video</button>
                    <button onClick={stopVideo}>Stop Video</button>
                    <button onClick={captureImage}>Capture Image</button>
                </div>
            </div>
            <div className="image-container">
                <h2>Captured Image</h2>
                {imageSrc ? (
                    <img src={imageSrc} alt="Captured" className="captured-image" />
                ) : (
                    <div className="no-image-message">No image captured</div>
                )}
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
};

export default CameraAndImageCapture;
