import React from "react"

export type DefaultButtonPropsType = {
   innerButtonText: string;
   type?: "submit" | "reset" | "button" | undefined;
} & React.HTMLProps<HTMLButtonElement>

