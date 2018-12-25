import React from 'react';
import magnifier from '../img/magnifying-glass.svg';

export default function SvgWrapper() {
  return (
    <svg className="icon">
      <use className="icon m-primary" xlinkHref={magnifier} />
    </svg>
  );
}
