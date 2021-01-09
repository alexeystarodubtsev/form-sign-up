import React, {useState, useEffect} from "react";
import {MainBox, ArrowBox, DropBoxStyled, OptionsStyle} from "./styled";
import { Option } from "./Option"
import { ArrowIcon } from "../icons"

interface Props {
    color?: string;
    changeValue?: any;
    changeKey?: string;
    placeholder: string;
    options: string [];
    touchValue?: any;
}

export const DropDownBox : React.FC<Props> = ({
      color,
      changeValue,
      changeKey,
      placeholder,
      options,
      touchValue
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const hideOut = () => {
        if (isOpen) {
            setIsOpen(false);
            touchValue(changeKey);
        }
    };

    useEffect(() => {
      if (typeof window !== 'undefined') {
        document.addEventListener('click', hideOut);
      }
      return () => {
        if (typeof window !== 'undefined') {
          document.removeEventListener('click', hideOut);
        }
      };
    });

    return <DropBoxStyled>

    <MainBox color={color} onClick={() => {setIsOpen(!isOpen)}} selected = {selectedValue}>
        {!!selectedValue ?  selectedValue : placeholder}
        <ArrowBox isOpen={isOpen}>
           <ArrowIcon/>
        </ArrowBox>
    </MainBox>
        {isOpen &&
        <OptionsStyle>
          {options.map(o => (
            <Option key={o} option={o} onClick={() => {
                setIsOpen(!isOpen);
                setSelectedValue(o);
                if (changeValue && changeKey) {
                    changeValue(changeKey, o);
                }
            }}/>
          ))
          }
        </OptionsStyle>
        }
    </DropBoxStyled>;
}

