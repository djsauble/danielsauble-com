import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SortToggle.css';

const SortToggle = ({ items }) => {
  const [isReverseChronological, setIsReverseChronological] = useState(true);

  useEffect(() => {
    const timelineContainer = document.querySelector('.timeline'); // Assuming a container with class 'timeline'
    if (!timelineContainer) return;

    const timelineItems = Array.from(timelineContainer.querySelectorAll('.timeline-item')); // Assuming a class 'timeline-item'

    const sortedItems = [...items].sort((a, b) => {
      if (isReverseChronological) {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });

    // Reorder DOM elements based on sorted data
    sortedItems.forEach(sortedItem => {
      const itemId = sortedItem.title.replace(/\s+/g, '-').toLowerCase(); // Simple matching
      const itemElement = timelineItems.find(element => element.dataset.itemId === itemId);
      if (itemElement) {
        timelineContainer.appendChild(itemElement); // Append reorders the element
      }
    });

  }, [isReverseChronological, items]);

  const handleToggle = () => {
    setIsReverseChronological(!isReverseChronological);
  };

  return (
    <button className="sort-toggle" onClick={handleToggle}>
      Sort {isReverseChronological ? '↓' : '↑'}
    </button>
  );
};

SortToggle.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired, // ImageMetadata type is complex, use object
    highlight: PropTypes.bool,
  })).isRequired,
};

export default SortToggle;