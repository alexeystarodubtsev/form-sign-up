import React from "react";
import {InputWrapper, StyledField, Icon as StyledIcon, Error} from "./styled";

interface Props {
    showError?: boolean;
    errorText?: string;
    Icon?: any;
    name: string;
    type?: string;
    placeholder: string;
}

export const InputField: React.FC<Props> = ({
   showError,
   errorText,
   Icon,
   name,
   type ,
   placeholder
}) => {
    // const Icon = IconName? icons["Letter"]: undefined;
    return (
        <>
          <InputWrapper mb={showError? '0': '20px'}>
            {Icon &&
              <StyledIcon>
                  <Icon width/>
              </StyledIcon>
            }
            <StyledField
              name={name}
              placeholder={placeholder}
              type={type ?? "text"}
              pl={Icon ? "52px": "18px"}
            />
          </InputWrapper>
          {showError &&
            <Error>{errorText}</Error>
          }
        </>
    )
}

