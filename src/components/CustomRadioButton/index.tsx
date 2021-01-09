import React from "react";
import styled from "styled-components";

interface Props {
    name: string;
    options: string[];
    setFieldValue: any;
}

export const CustomRadioButton: React.FC<Props> = ({name, options, setFieldValue}) => {
    return (
        <RadioButtons>
            {(options as string[]).map((gend) => (
                <React.Fragment key={gend}>
                    <input
                        type="radio"
                        id={gend}
                        name={name}
                        value={gend}
                        onChange={() => setFieldValue(name, gend)}/>
                    <RadioLabel htmlFor={gend}>{gend}</RadioLabel>
                </React.Fragment>
            ))}
        </RadioButtons>
    )
}

const RadioButtons = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`
const RadioLabel = styled.label`
    margin-left: 10px;
    margin-right: 24px;
`;
