import * as React from 'react';
import OverlayContainer, {
  OverlayContainerProps,
  overlayContainerDefaultProps,
  overlayContainerPropTypes
} from '../Overlay/OverlayContainer';

export interface ModalContainerProps extends OverlayContainerProps {}

const ModalContainer: React.FunctionComponent<ModalContainerProps> = ({ children, defaultVisible, ...props }) => (
  <OverlayContainer defaultVisible={defaultVisible} {...props}>
    {children}
  </OverlayContainer>
);

ModalContainer.propTypes = {
  ...overlayContainerPropTypes
};
ModalContainer.defaultProps = {
  ...overlayContainerDefaultProps
};

export default ModalContainer;
