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
                    <RadioButton className="container">{gend}
                        <input
                          type="radio"
                          name={name}
                          value={gend}
                          onChange={() => setFieldValue(name, gend)}/>
                        <RadioButtonSpan/>
                    </RadioButton>
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

const RadioButton = styled.label`
  display: block;
  position: relative;
  padding: 0 24px;
  cursor: pointer;
  font: normal normal normal 14px/17px Roboto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  input:checked ~ span:after {
    display: block;
  }
`;

const RadioButtonSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border: 1px solid #0094FF;
  :after {
    content: "";
    position: absolute;
    display: none;
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0094FF;
  }
`
