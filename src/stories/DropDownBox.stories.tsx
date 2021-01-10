import React from "react";

import { DropDownBox } from "../components/DropDownBox";

export default {
    title: "Drop down box",
    component: DropDownBox,
}

export const Drop_Down_Box = () => (
    <DropDownBox
        placeholder="select value"
        options={["value 1", "value 2"]}
    />
)