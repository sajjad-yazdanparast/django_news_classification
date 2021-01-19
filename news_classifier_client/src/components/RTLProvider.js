import {jssPreset, StylesProvider} from "@material-ui/core/styles";
import {create} from "jss";
import rtl from "jss-rtl";
import React from "react";

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

export default function RTLProvider(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}
