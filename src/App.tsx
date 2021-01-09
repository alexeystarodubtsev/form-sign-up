// @ts-ignore
import React from "react";
import styled from 'styled-components';
import './global.css'
import { MainForm } from "./components/MainForm";

export default () => {
  return (
    <MainWindow>
      <MainForm/>
    </MainWindow>
  );
}

const MainWindow = styled.div`
   width: 100%;
   height: 100%;
   justify-content: center;
   display: flex;
`

