// @ts-ignore
import React from "react";
import {
    StyledMainForm,
    Caption,
    StyledField,
    Error,
    Icon,
    InputWrapper,
    Link
} from "./styled"
import SignupBtn from "../SignUpBtn";
import { Formik, Form } from "formik";
import BasicFormSchema from "../BasicFormSchema";
import {LetterIcon, LockIcon} from "../icons";
import { DropDownBox } from "../DropDownBox";
import { CustomCheckBox } from "../CustomCheckBox";
import { CustomRadioButton } from "../CustomRadioButton";

const countries = ["Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Amsterdam",
    "USA",
    "Germany",
    "Poland",
    "China"];

export const MainForm = () => {
    return <StyledMainForm>
        <Caption>
            Create a new account
        </Caption>
        <Formik
            initialValues={{
                username: "",
                email: "",
                password: "",
                country: "",
                gender: "",
                terms: ""
            }}
            validationSchema={BasicFormSchema}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            render={({ errors,
                       touched,
                       setFieldValue,
                       setFieldTouched,
                       isValid,
                       dirty
            }) => (
              <Form>
                <InputWrapper
                    mb={errors.username && touched.username? '0' : '20px'}
                >
                  <StyledField
                    name="username"
                    placeholder="Enter your name"
                    type="text"
                  />
                </InputWrapper>
                {errors.username && touched.username &&
                  <Error>{errors.username}</Error>
                }
                <InputWrapper mb={errors.email && touched.email? '0' : '20px'}>
                  <Icon>
                    <LetterIcon/>
                  </Icon>
                  <StyledField
                    name="email"
                    placeholder="Email"
                    type="Email"
                    pl="52px"
                  />
                </InputWrapper>
                {errors.email && touched.email &&
                  <Error>{errors.email}</Error>
                }
                <InputWrapper mb={errors.password &&  touched.password? '0' : '20px'}>
                <Icon>
                  <LockIcon/>
                </Icon>
                <StyledField
                    name="password"
                    placeholder="Password"
                    type="password"
                    pl="52px"
                />
                </InputWrapper>
                {errors.password && touched.password &&
                  <Error>{errors.password}</Error>
                }
                <InputWrapper mb= {  errors.country && touched.country ? '0' : '30px'}>
                  <DropDownBox
                    changeValue = {setFieldValue}
                    touchValue={setFieldTouched}
                    changeKey="country"
                    options={countries}
                    placeholder="Select country"
                  />
                  {errors.country &&touched.country &&
                    <Error>{errors.country}</Error>
                  }
                </InputWrapper>
                <InputWrapper mb={errors.gender && touched.gender ? '0' : '30px'}>
                  <CustomRadioButton options={['Male', 'Female']} setFieldValue={setFieldValue} name="gender"/>
                  {errors.gender && touched.gender &&
                    <Error>{errors.gender}</Error>
                  }
                </InputWrapper>
                <InputWrapper mb="0">
                  <CustomCheckBox
                    id="acceptRules"
                    onChange={(e : any) => {
                      const el = document.getElementById("acceptRules") as HTMLInputElement;
                      setFieldTouched("terms");
                      setFieldValue("terms", el.checked);
                    }}
                    label={<>
                      Accept {' '}
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                       terms
                      </Link>
                      {' and '}
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        conditions
                      </Link>
                      </>
                    }
                  />
                {errors.terms && touched.terms &&
                  <Error>{errors.terms}</Error>
                }
                </InputWrapper>
                <SignupBtn
                  disabled={!isValid || !dirty}
                  mt={errors.terms && touched.terms ? '42px': '56px'}
                />
              </Form>
            )}
        />
    </StyledMainForm>;
}

