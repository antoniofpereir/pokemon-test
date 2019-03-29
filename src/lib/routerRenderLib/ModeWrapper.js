import React from 'react';

const mobileComponentDesktopSize = {
  maxWidth: 640,
  margin: '0 auto',
};

/**
 * If there's no desktop mode component, wrap children
 * with fixed borders to keep ratio in desktop sized windows.
 */
class ModeWrapper extends React.Component {
  render() {
    if (!this.props.hasDesktopMode) {
      return (
        <div style={mobileComponentDesktopSize}>
          {this.props.children}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ModeWrapper;
