import React from 'react';
import Pr from 'prop-types';

export const BORDER_STYLES = Object.freeze({
    "solid": "solid",
    "dotted": "dotted",
    "double": "double",
    "dashed": "dashed"
});

export const FancyBorder = ({ width, color, borderStyle, children }) => {
    return (
        <div style={{ border: `${width} ${borderStyle} ${color}`}}>
            {children}
        </div>
    );
}

FancyBorder.propTypes = {
    width: Pr.string.isRequired,
    color: Pr.string.isRequired,
    borderStyle: Pr.oneOf(Object.values(BORDER_STYLES))
}