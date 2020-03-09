import styled from 'styled-components/native';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

export const Container = styled.View`
  flex: 1;
`;

export const VideoMission = styled(Video)`
  align-self: stretch;
  height: 300px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const YouTubeVideoMission = styled(YouTube)`
  align-self: stretch;
  height: 300px;
`;
