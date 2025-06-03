import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SortToggle.css';

const SortToggle = () => {
  const [isReverseChronological, setIsReverseChronological] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (isReverseChronological) {
      params.set('sort', 'reverse-chronological');
    } else {
      params.set('sort', 'chronological');
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [isReverseChronological]);

  const handleToggle = () => {
    setIsReverseChronological(!isReverseChronological);
  };

  return (
    <button className="sort-toggle" onClick={handleToggle}>
      Sort {isReverseChronological ? '↓' : '↑'}
    </button>
  );
};

export default SortToggle;