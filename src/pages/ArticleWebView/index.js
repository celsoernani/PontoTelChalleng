import React from 'react';

import {WebView} from 'react-native-webview';

export default function ArticleWebView({route, navigation}) {
  const {link} = route.params;

  return <WebView source={{uri: link}} />;
}
