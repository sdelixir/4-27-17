
/*
 * This hash helps exerslide to determine whether the file needs to be updated
 * or not. Please don't remove it.
 * @exerslide-file-hash 3280f175535da1ea028db9a841205223
 */

import ExtensionPoint from 'exerslide/components/ExtensionPoint';
import React from 'react';

/**
 * The base layout for every slide. This allows you do add additional
 * content to all slides before or after the content.
 */
export default function SlideLayout({children}) {
  return (
    <ExtensionPoint tags={['content']}>
      <div>
        {children}
      </div>
    </ExtensionPoint>
  );
}

SlideLayout.propTypes = {
  /**
   * The current slide content and header are passed in as children by exerslide
   */
  children: React.PropTypes.node,
};
