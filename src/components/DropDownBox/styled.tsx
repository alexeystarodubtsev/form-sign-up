import styled from 'styled-components';

export const MainBox = styled.div<{color?: string; selected: string}>`
    background-color: ${({color}) => color ?? '#F5F8FA'};
    width: calc(100% - 36px);
    height: 14px;
    padding: 18px;
    border-radius: 8px;
    ${({selected}) => !selected && "color: #A2A2A2"};
    font: normal normal normal 14px/17px Roboto;
    display: flex;
    cursor: pointer;
`

export const ArrowBox = styled.div<{isOpen?: boolean}>`
    margin-left: auto;
    margin-right: 0;
    transition: transform 0.4s ease-out;
    transform: ${({ isOpen }) => (isOpen ? `rotate(0)` : `rotate(180deg)`)};
`

export const OptionsStyle = styled.div`
    
    width: 100%;
    height: 196px;
    box-shadow: 0px 3px 8px #00000026;
    border-radius: 8px;
    position: absolute;
    top: 56px;
    z-index: 1;
    background: white;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
`

export const DropBoxPosition = styled.div`
    height: 16px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px; 
    cursor: pointer;
    : hover {
      background: #F5F8FA;
    }
`
export const DropBoxStyled = styled.div`
    width: 100%;
    position: relative;
`