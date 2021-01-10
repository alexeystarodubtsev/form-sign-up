import React from "react";

import { CustomRadioButton } from "../components/CustomRadioButton";

export default {
    title: "Custom radio button",
    component: CustomRadioButton
}

export const Radio_Button = () => (
    <CustomRadioButton
        options={["first option", "second option"]}
        name="storybook_radioButton"
    />
)