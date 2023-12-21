import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Draggable from 'react-draggable';

const WebcamWithDrag = () => {
  const videoConstraints = {
    width: 160,
    height: 100,
    facingMode: 'user',
  };

  const [isRound, setIsRound] = useState(false);

  const toggleShape = () => {
    setIsRound(!isRound);
  };

  const webcamStyle = {
    borderRadius: isRound ? '50%' : '0', // 根据 isRound 的值来设置 borderRadius 属性
    overflow: 'hidden',
  };

  return (
    <Draggable>
      <div style={{ position: 'absolute' }}>
        <div style={webcamStyle}>
          <Webcam audio={false} videoConstraints={videoConstraints} />
        </div>
        <button onClick={toggleShape}>切换形状</button>
      </div>
    </Draggable>
  );
};

export default WebcamWithDrag;
