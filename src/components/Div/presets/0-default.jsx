import React from "react";
import Typography from "../../Typography/Typography";
import Div from '../Div'
import AppBarPresets from '../../AppBar/presets/0-default'
import AccordionPresets from '../../Accordion/presets/0-default'

const sx = {
    "display": "flex",
    "width": "100%",
    "height": "100%",
    "flex-direction": "column"
}

export default( 
    <Div uxpId="div-1" sx={sx}>
        {AppBarPresets}
        {AccordionPresets}
    </Div>
)