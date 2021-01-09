// @ts-ignore
import React from "react";
import styled from 'styled-components';


export const SignupBtn = (props : any) => {
  return <StyledBtn mt={props.mt} {...props}>Sign up</StyledBtn>;
}

const StyledBtn = styled.button<{mt?: string}>`
    background: #0094FF 0% 0% no-repeat padding-box;
    border-radius: 32px;
    border: 0px;
    color: white;
    width: 100%;
    height: 62px;
    font: normal normal normal 18px/22px Roboto;
    transition: all 0.3s ease-out 0s;
    transition-property: background;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: ${({mt}) => mt};
    &: focus {
      outline: none;
    }
    :disabled {
      background: #A2A2A2 0% 0% no-repeat padding-box;
    }
`
