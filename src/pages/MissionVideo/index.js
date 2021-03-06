import React, {useRef, useState} from 'react';
import {WebView} from 'react-native-webview';
import Error from '../../components/Error';
import {Container, VideoMission, YouTubeVideoMission} from './styles';

export default function MissionVideo({navigation, route}) {
  const {link} = route.params;
  const {youtubeId} = route.params;
  const [error, setError] = useState(false);
  const videoRef = useRef(null);

  function renderVideo() {
    if (link) {
      if (error) {
        return <WebView source={{uri: link}} />;
      }
      if (link.includes('www.youtube.com')) {
        return (
          <YouTubeVideoMission
            videoId={youtubeId}
            apiKey="AIzaSyCWVbSczJgH0MnxEkWDfjkd8A4Kzprm-oo"
            play
            fullscreen
            loop
            onError={() => setError(true)}
            ref={videoRef}
            style={{}}
          />
        );
      }
      return <VideoMission ref={videoRef} source={{uri: link}} />;
    }
    return (
      <Error
        navigation={navigation}
        title="Erro no lançamento."
        desc="Não foi possível carregar o vídeo do lançamento."
      />
    );
  }

  return <Container>{renderVideo()}</Container>;
}
