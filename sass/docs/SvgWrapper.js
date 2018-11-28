import React from 'react';

export default function SvgWrapper() {
  return (
    <svg className="search__icon">
      <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
    </svg>
  );
}
