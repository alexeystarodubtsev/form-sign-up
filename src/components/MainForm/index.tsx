// @ts-ignore
import React from "react";
import { StyledMainForm, Caption, StyledField, Error, Icon, InputWrapper } from "./styled"
import SignupBtn from "../SignUpBtn";
import { Formik, Form } from "formik";
import BasicFormSchema from "../BasicFormSchema";
import {LetterIcon, LockIcon} from "../icons";
import { DropDownBox } from "../DropDownBox";

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

            //инициализируем значения input-ов
            initialValues={{
                username: "",
                email: "",
                password: "",
                country: "",
                gender: "",
                terms: ""
            }}
            //подключаем схему валидации, которую описали выше
            validationSchema={BasicFormSchema}
            //определяем, что будет происходить при вызове onsubmit
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            render={({ errors, touched, setFieldValue }) => (
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
                    {  errors.username &&
                    touched.username &&
                    <Error>{errors.username}</Error>}
                    <InputWrapper
                        mb={errors.email &&
                        touched.email? '0' : '20px'}
                    >
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
                    {  errors.email &&
                       touched.email && <Error>{errors.email}</Error>}
                    <InputWrapper
                        mb={errors.password &&
                        touched.password? '0' : '20px'}
                    >
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

                    {errors.password &&
                    touched.password && (
                        <Error>{errors.password}</Error>
                    )}
                    <InputWrapper
                        mb= {  errors.country &&
                        touched.country ? '0' : '20px'}
                    >
                        <DropDownBox
                            changeValue = {setFieldValue}
                            changeKey="country"
                            options={countries}
                            placeholder="Select country"
                        />
                        {   errors.country &&
                                touched.country &&
                        <Error>{errors.country}</Error>
                        }
                    </InputWrapper>
                    <InputWrapper
                        mb= {  errors.gender &&
                        touched.gender ? '0' : '20px'}
                    >
                        {['Male', 'Female'].map((gend) => (
                            <React.Fragment key={gend}>
                                <input type="radio" id={gend} name="gender" value={gend} onChange={() =>
                                {
                                    console.log(document.getElementById(""))
                                }
                                }/>
                                <label htmlFor={gend}>{gend}</label>
                            </React.Fragment>
                            ))}
                        {errors.gender &&
                        touched.gender &&
                        <Error>{errors.gender}</Error>
                        }
                    </InputWrapper>
                    <InputWrapper
                        mb= {  errors.terms &&
                        touched.terms ? '0' : '20px'}
                    >

                        {   errors.terms &&
                        touched.terms &&
                        <Error>{errors.terms}</Error>
                        }
                    </InputWrapper>
                    <SignupBtn/>
                </Form>
            )}
        />
    </StyledMainForm>;
}

