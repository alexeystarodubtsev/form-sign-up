import React from "react";

import { Button } from "../components/Button";

export default {
    title: "Button",
    component: Button
}

export const Button_full_width = () => (
    <Button>SignUp Button</Button>
)

export const Button_full_width_disabled = () => (
    <Button disabled>SignUp Button</Button>
)
// export const Button2 = () => (
//     <Button>SignUp Button</Button>
// )