module.exports = {
  components: {
    categories: [
      {
        name: 'INPUTS',
        include: [
          // 'src/components/Autocomplete/Autocomplete.js',
          'src/components/Button/Button.tsx',
          'src/components/ButtonGroup/ButtonGroup.js',
          'src/components/DatePicker/DatePicker.js',
          'src/components/Checkbox/Checkbox.js',
          'src/components/CheckboxWithLabel/CheckboxWithLabel.js',
          'src/components/CheckboxGroup/CheckboxGroup.js',
          'src/components/FloatingActionButton/FloatingActionButton.tsx',
          'src/components/IconButton/IconButton.tsx',
          'src/components/LoadingButton/LoadingButton.js',
          'src/components/Radio/Radio.js',
          'src/components/RadioWithLabel/RadioWithLabel.js',
          'src/components/RadioGroup/RadioGroup.js',
          'src/components/Rating/Rating.js',
          'src/components/Select/Select.js',
          'src/components/Slider/Slider.js',
          'src/components/SplitButton/SplitButton.js',
          'src/components/Switch/Switch.js',
          'src/components/Switch/Switch.js',
          'src/components/SwitchWithLabel/SwitchWithLabel.js',
          'src/components/SwitchGroup/SwitchGroup.js',
          'src/components/TextField/TextField.tsx',
          // 'src/components/TransferList/TransferList.js',
          'src/components/ToggleButton/ToggleButton.tsx',
          'src/components/ToggleButtonGroup/ToggleButtonGroup.js',
        ],
      },
      {
        name: 'DATA DISPLAY',
        include: [
          'src/components/Avatar/Avatar.js',
          'src/components/AvatarGroup/AvatarGroup.js',
          'src/components/Badge/Badge.js',
          'src/components/Chip/Chip.tsx',
          'src/components/DataGrid/DataGrid.js',
          'src/components/Divider/Divider.js',
          'src/components/Icon/Icon.tsx',
          'src/components/List/List.js',
          'src/components/Table/Table.tsx',
          'src/components/Tooltip/Tooltip.js',
          'src/components/Typography/Typography.tsx',
        ],
      },
      {
        name: 'FEEDBACK',
        include: [
          'src/components/Alert/Alert.tsx',
          'src/components/Backdrop/Backdrop.js',
          'src/components/Dialog/Dialog.tsx',
          'src/components/CircularProgress/CircularProgress.tsx',
          'src/components/LinearProgress/LinearProgress.js',
          'src/components/Skeleton/Skeleton.js',
          'src/components/Snackbar/Snackbar.tsx',
        ],
      },
      {
        name: 'SURFACES',
        include: [
          'src/components/Accordion/Accordion.js',
          'src/components/AppBar/AppBar.js',
          'src/components/Card/Card.tsx',
          'src/components/Paper/Paper.js',
        ],
      },
      {
        name: 'NAVIGATION',
        include: [
          'src/components/BottomNavigation/BottomNavigation.js',
          'src/components/Breadcrumbs/Breadcrumbs.js',
          'src/components/Drawer/Drawer.tsx',
          'src/components/Link/Link.js',
          'src/components/Menu/Menu.js',
          'src/components/Pagination/Pagination.tsx',
          // 'src/components/SpeedDial/SpeedDial.js',
          'src/components/Stepper/Stepper.js',
          'src/components/Tabs/Tabs.js',
        ],
      },
      {
        name: 'LAYOUT',
        include: [
          'src/components/Box/Box.tsx',
          'src/components/Container/Container.tsx',
          'src/components/Grid/Grid.tsx',
          'src/components/Image/Image.tsx',
          'src/components/ImageList/ImageList.js',
          'src/components/Stack/Stack.tsx',
          // 'src/components/Hidden/Hidden.js',
        ],
      },
      {
        name: 'CHILDREN (PARTS)',
        include: [
          'src/components/AlertTitle/AlertTitle.tsx',

          'src/components/AccordionActions/AccordionActions.js',
          'src/components/AccordionDetails/AccordionDetails.js',
          'src/components/AccordionSummary/AccordionSummary.js',

          'src/components/BottomNavigationAction/BottomNavigationAction.js',

          'src/components/CardActions/CardActions.tsx',
          'src/components/CardActionArea/CardActionArea.tsx',
          'src/components/CardContent/CardContent.tsx',
          'src/components/CardHeader/CardHeader.tsx',
          'src/components/CardMedia/CardMedia.tsx',
          'src/components/Collapse/Collapse.js',

          'src/components/DialogActions/DialogActions.tsx',
          'src/components/DialogContentText/DialogContentText.tsx',
          'src/components/DialogTitle/DialogTitle.tsx',
          'src/components/DialogContent/DialogContent.tsx',

          'src/components/FormControl/FormControl.js',
          'src/components/FormControlLabel/FormControlLabel.js',
          'src/components/FormGroup/FormGroup.js',
          'src/components/FormHelperText/FormHelperText.js',
          'src/components/FormLabel/FormLabel.tsx',

          'src/components/ImageListItem/ImageListItem.js',
          'src/components/ImageListItemBar/ImageListItemBar.js',

          'src/components/InputLabel/InputLabel.tsx',

          'src/components/ListItem/ListItem.js',
          'src/components/ListItemAvatar/ListItemAvatar.js',
          'src/components/ListItemButton/ListItemButton.js',
          'src/components/ListItemIcon/ListItemIcon.js',
          'src/components/ListItemText/ListItemText.js',
          'src/components/ListSubheader/ListSubheader.js',

          'src/components/MenuList/MenuList.js',
          'src/components/MenuItem/MenuItem.js',

          'src/components/TableCell/TableCell.tsx',
          'src/components/TableContainer/TableContainer.tsx',
          'src/components/TableBody/TableBody.tsx',
          'src/components/TableFooter/TableFooter.tsx',
          'src/components/TableHead/TableHead.tsx',
          'src/components/TableRow/TableRow.tsx',
          'src/components/TablePagination/TablePagination.tsx',

          'src/components/Tab/Tab.js',

          'src/components/Toolbar/Toolbar.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'MUI-UXPin-Merge',
};
