// @ts-ignore
import React from "react";
import {
    StyledMainForm,
    Caption,
    Link
} from "./styled"
import {InputWrapper, Error as StyledError} from "../InputField/styled";
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { InputField } from "../InputField"
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

    const [signup, {
        // data: mutationData,
        // error: murationError,
        loading
    }] = useMutation(SEND_FORM, { errorPolicy: 'all' });

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
            >
            {({ errors,
                       touched,
                       setFieldValue,
                       setFieldTouched,
                       isValid,
                       dirty
            }) => (
              <Form>
                <InputField
                  name="fullName"
                  placeholder="Enter your name"
                  showError={!!errors.fullName && !!touched.fullName}
                  errorText={errors.fullName}
                />
                <InputField
                  name="email"
                  placeholder="Email"
                  showError={!!errors.email && !!touched.email}
                  Icon={LetterIcon}
                  errorText={errors.email}
                />
                <InputField
                  name="password"
                  placeholder="Password"
                  showError={!!errors.password && !!touched.password}
                  Icon={LockIcon}
                  errorText={errors.password}
                  type="password"
                />
                <InputWrapper mb= {  errors.country && touched.country ? '0' : '30px'}>
                  <DropDownBox
                    changeValue = {setFieldValue}
                    touchValue={setFieldTouched}
                    changeKey="country"
                    options={countries}
                    placeholder="Select country"
                  />
                  {errors.country &&touched.country &&
                    <StyledError mb="16px">{errors.country}</StyledError>
                  }
                </InputWrapper>
                <InputWrapper mb={errors.gender && touched.gender ? '0' : '30px'}>
                  <CustomRadioButton
                      options={['Male', 'Female']}
                      setFieldValue={setFieldValue}
                      name="gender"
                  />
                  {errors.gender && touched.gender &&
                    <StyledError>{errors.gender}</StyledError>
                  }
                </InputWrapper>
                <InputWrapper mb="0">
                  <CustomCheckBox
                    id="acceptRules"
                    onChange={(e : any) => {
                      const el = document.querySelector("#acceptRules") as HTMLInputElement;
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
                  <StyledError mb="0">{errors.terms}</StyledError>
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
        </Formik>
    </StyledMainForm>
    );
}

