import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './HighlightsToggle.css';

const HighlightsToggle = ({ items }) => {
  const [isHighlightsEnabled, setIsHighlightsEnabled] = useState(true);

  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item'); // Assuming a class 'timeline-item'
    timelineItems.forEach((itemElement) => {
      const itemId = itemElement.dataset.itemId; // Assuming a data attribute 'data-item-id'
      const originalItem = items.find(item => item.title.replace(/\s+/g, '-').toLowerCase() === itemId); // Simple matching

      if (originalItem) {
        if (isHighlightsEnabled && !originalItem.highlight) {
          itemElement.style.display = 'none';
        } else {
          itemElement.style.display = '';
        }
      }
    });
  }, [isHighlightsEnabled, items]);

  const handleToggle = () => {
    setIsHighlightsEnabled(!isHighlightsEnabled);
  };

  return (
    <button className="highlights-toggle" onClick={handleToggle}>
      {isHighlightsEnabled ? '● Highlights' : '◌ Highlights'}
    </button>
  );
};

HighlightsToggle.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired, // ImageMetadata type is complex, use object
    highlight: PropTypes.bool,
  })).isRequired,
};

export default HighlightsToggle;