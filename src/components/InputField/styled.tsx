import styled from "styled-components";
import {Field} from "formik";

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

export const Icon = styled.div`
    position: absolute;
    z-index: 1;
    top: 18px;
    left: 18px;
`;

export const Error = styled.div<{mb?: string}>`
    color: #E82828;
    font: normal normal normal 10px/13px Roboto;
    margin-left: 18px;
    margin-top: 2px;
    margin-bottom: ${({mb}) => mb ?? '6px'};
`;