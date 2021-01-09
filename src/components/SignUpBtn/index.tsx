// @ts-ignore
import React from "react";
import { StyledBtn } from "./styled"



const SignupBtn = (props : any) => {

    return <StyledBtn mt={props.mt} {...props}>Sign up</StyledBtn>;
}

export default SignupBtn;
