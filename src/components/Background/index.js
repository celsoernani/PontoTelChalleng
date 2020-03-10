import React from 'react';

import {ImageBack} from './styles';

export default function Background({children, image}) {
  return <ImageBack source={image}>{children}</ImageBack>;
}
