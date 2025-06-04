import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './HighlightsToggle.css';

const HighlightsToggle = () => {
  const [isHighlightsEnabled, setIsHighlightsEnabled] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (isHighlightsEnabled) {
      params.set('filter', 'highlights');
    } else {
      params.delete('filter');
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [isHighlightsEnabled]);

  const handleToggle = () => {
    setIsHighlightsEnabled(!isHighlightsEnabled);
  };

  return (
    <button className="highlights-toggle" onClick={handleToggle}>
      {isHighlightsEnabled ? '◉ Highlights' : '○ Highlights'}
    </button>
  );
};

export default HighlightsToggle;