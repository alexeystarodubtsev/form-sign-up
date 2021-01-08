import React from 'react';

interface Props {
    color?: string;
    width?: number;
    height?: number;
}
export const LockIcon: React.FC<Props> = React.memo(props => (
    <svg fill='none' viewBox="0 0 16 20" {...props}>
        <path className="a"
              d="M17,8H16V6.11a4,4,0,0,0-8,0V8H7a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V11A3,3,0,0,0,17,8ZM10,6.11a2,2,0,1,1,4,0V8H10ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"
              transform="translate(-4 -2.11)"
              fill={props.color}
        />
        <path className="a" d="M12,12a3,3,0,1,0,3,3A3,3,0,0,0,12,12Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,16Z"
              transform="translate(-4 -2.11)"
              fill={props.color}
        />
    </svg>
));

LockIcon.defaultProps = {
    width: 16,
    height: 20,
    color: '#a2a2a2',
};
