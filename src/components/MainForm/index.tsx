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
import { Button } from "../Button";
import { Spinner } from "../Spinner"
import { Formik, Form } from "formik";
import BasicFormSchema from "../BasicFormSchema";
import {LetterIcon, LockIcon} from "../icons";
import { DropDownBox } from "../DropDownBox";
import { CustomCheckBox } from "../CustomCheckBox";
import { CustomRadioButton } from "../CustomRadioButton";
import { gql, useMutation } from '@apollo/client';

const countries = ["Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Amsterdam",
    "USA",
    "Germany",
    "Poland",
    "China"
];

const SEND_FORM = gql`
  mutation SendForm($name: String!, $password: String!, $email: String!, $country: String!, $gender: String!) {
    signup(input: {
      name: $name,
      email: $email,
      password: $password,
      country: $country,
      gender: $gender
    }) {
        id,
        name,
        email,
        country,
        gender
    }
  }
`;
// @ts-ignore
export const MainForm = () => {

    const [signup, { data, error, loading }] = useMutation(SEND_FORM);

    return (
      <StyledMainForm>
        <Caption>
            Create a new account
        </Caption>
        <Formik
            initialValues={{
                fullName: "",
                email: "",
                password: "",
                country: "",
                gender: "",
                terms: ""
            }}
            validationSchema={BasicFormSchema}
            onSubmit={async(values) => {
                signup({ variables: {
                    name: values.fullName,
                    email: values.email,
                    password: values.password,
                    country: values.country,
                    gender : values.gender.toUpperCase()
                } });
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
                    mb={errors.fullName && touched.fullName? '0' : '20px'}
                >
                  <StyledField
                    name="fullName"
                    placeholder="Enter your name"
                    type="text"
                  />
                </InputWrapper>
                {errors.fullName && touched.fullName &&
                  <Error>{errors.fullName}</Error>
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
                    <Error mb="16px">{errors.country}</Error>
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
                  <Error mb="0">{errors.terms}</Error>
                }
                </InputWrapper>
                <Button
                  disabled={!isValid || !dirty}
                  mt={errors.terms && touched.terms ? '22px': '36px'}
                >
                  {loading? <Spinner/> : 'Sign up'}
                </Button>
              </Form>
            )}
        />
    </StyledMainForm>
    );
}

