import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip({ text, children, position = "top" }) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);



  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div 
      // onClick={hideTooltip} 
      className={`tooltip-box ${position}`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
