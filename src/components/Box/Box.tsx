import BoxM, { BoxProps as MBoxProps } from '@mui/material/Box';

export type BoxProps<RefType> = MBoxProps & {
  uxpinRef?: React.Ref<RefType>
}

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
 * @uxpindocurl https://mui.com/components/box/#main-content
 */
function Box<RefType>(props: BoxProps<RefType>) {
  const { uxpinRef, ...other } = props;
  return (
    <BoxM ref={uxpinRef} height="100%" {...other}>
      {!props.children ? (
        <span>
          <center>
            <p>Drag components into this wrapper</p>
          </center>
        </span>
      ) : (
        props.children
      )}
    </BoxM>
  );
}

export default Box;
