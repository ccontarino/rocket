import React, { useState } from "react";
import { Box, makeStyles,Typography } from '@material-ui/core'

const useStyle=()=>makeStyles({
div:{
    color:'grey'
}
});

export const  CustomComponent = () => {
// const [state,setState] = useState();

const classes = useStyle();
return <div className={classes.div}>hello world</div>

}