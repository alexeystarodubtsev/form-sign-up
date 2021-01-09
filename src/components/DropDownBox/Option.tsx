import React from "react";
import {DropBoxPosition} from "./styled";

interface Props {
    onClick?: any;
    option: string;
}

export const Option : React.FC<Props> = ({ option, onClick}) => {
    return <DropBoxPosition onClick={onClick}>
        {option}
    </DropBoxPosition>;
}

