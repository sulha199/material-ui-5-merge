import DrawerM, { DrawerProps as DrawerPropsM } from '@mui/material/Drawer';
import React from 'react';
import Box from '../Box/Box';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core';
import { DefaultTheme } from '@mui/styles';

const drawerStyle = makeStyles<DefaultTheme, DrawerProps, 'root' | 'divChildren'>({
  root: {
    minWidth: '200px',
    minHeight: '300px',
    height: '100%'
  },
  divChildren: { width: props => props.width, minHeight: '200px' }
})

export type DrawerProps = DrawerPropsM & {
  width?: number;
}

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Drawer(props: DrawerProps) {
  const [open, setOpen] = React.useState(props.open);
  const style = drawerStyle(props);

  React.useEffect(() => setOpen(props.open), [props]);

  // Unique Id
  const id = uuidv4();

  return (
    <Box className={style.root} id={id}>
      <DrawerM
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        container={document.querySelector("[id='" + id + "']")}
        disableEnforceFocus
        disablePortal={true}
        {...props}
      >
        <div className={style.divChildren}>{props.children}</div>
      </DrawerM>
    </Box>
  );
}