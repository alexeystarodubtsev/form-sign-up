import React from 'react';

interface Props {
    color?: string;
    width?: number;
    height?: number;
}
export const ArrowIcon: React.FC<Props> = React.memo(props => (
    <svg fill='none' viewBox="0 0 11 11" {...props}>
        <path className="b"
              d="M6.358,3.927A.453.453,0,0,1,6.045,3.8L3.425,1.287.8,3.708a.447.447,0,0,1-.36.122.476.476,0,0,1-.329-.206A.619.619,0,0,1,0,3.212a.587.587,0,0,1,.18-.378L3.117.127a.442.442,0,0,1,.621,0l2.934,2.8a.589.589,0,0,1,.175.38.617.617,0,0,1-.111.41.468.468,0,0,1-.376.207Z"
              transform="translate(1.586 3.374)"
              fill={props.color}
        />
    </svg>
));

ArrowIcon.defaultProps = {
    width: 11,
    height: 11,
    color: '#222',
};
