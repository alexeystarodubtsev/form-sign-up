import React from "react";
import styled from "styled-components";


export const CustomCheckBox = (props: any) => {
    return (
        <CheckBox>
            {props.label}
            <input type="checkbox" {...props}/>
            <Checkmark/>
        </CheckBox>
    )
}


const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    border: 1px solid #0094FF;
    border-radius: 3px;
    :after {
        content: "";
        position: absolute;
        display: none;
    }

`

const CheckBox = styled.label`
  display: block;
  width: auto;
  position: relative;
  padding-left: 22px;
  font: normal normal normal 14px/17px Roboto;
  cursor: pointer;
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
  
  input:checked ~ span{
    background-color: white;
  }
  
  input:checked ~ span:after {
      display: block;
  }
  
  span:after {
      left: 3px;
      top: 0px;
      width: 5px;
      height: 8px;
      border: 1px solid #0094FF;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
`;
