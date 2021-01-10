import styled from "styled-components";

import { Spinner } from "../components/Spinner";
import React from "react";

export default {
    title: "Loader",
    component: Spinner,
}

export const White_Loader = () => (
    <WithBackground>
        <Spinner/>
    </WithBackground>
);

const WithBackground = styled.div`
  background: #a2a2a2;
  display: flex;
  justify-content: center;
`