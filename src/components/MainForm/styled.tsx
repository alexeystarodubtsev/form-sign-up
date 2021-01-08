// @ts-ignore
import styled from 'styled-components';
import { Field } from "formik";

export const StyledMainForm = styled.div`
    width: 340px;
    height: 522px;
    background-color : white;
    position: relative;
    top: 184px;
    padding: 30px 30px 54px 30px;
    border-radius: 8px;
`;

export const Caption = styled.div`
    font: normal normal bold 28px/34px Roboto;
    color: #222222;
    text-align: center;
    margin-bottom: 36px;
`;

export const StyledField = styled(Field)<{pl?: string}>`
    width: calc(100% - 18px - ${({pl}) => pl ?? `18px`});
    height: 14px;
    border-radius: 8px;
    background: #F5F8FA 0% 0% no-repeat padding-box;
    border: 0px;
    padding-left: ${({pl}) => pl ?? `18px`};
    padding-right: 18px;
    padding-top: 18px;
    padding-bottom: 18px;
    font: normal normal normal 14px/17px Roboto;
    color: #222222;
    outline: none;
    ::placeholder { 
      color: #A2A2A2;
    }
`;


export const InputWrapper = styled.div<{mb: string; }>`
    margin-bottom: ${({mb}) => mb};
    position: relative;
    width: 100%;
`;

export const RadioButtons = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

export const RadioLabel = styled.label`
    margin-left: 10px;
    margin-right: 24px;
`;

export const Checkmark = styled.span`
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

export const CustomCheckbox = styled.label`
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

export const Icon = styled.div`
    position: absolute;
    z-index: 1;
    top: 18px;
    left: 18px;
`;

export const Link = styled.a`
    color: #0094FF;
    text-decoration: none
`

export const Error = styled.div<{last?: boolean}>`
    color: #E82828;
    font: normal normal normal 10px/13px Roboto;
    margin-left: 18px;
    margin-top: 2px;
    margin-bottom: ${({last}) => last ? '0': '6px'};
`;