import React from 'react';

import {Launche, MissionPath, MissionName, RocketName} from './styles';

export default function LaunchItem({launche}) {
  return (
    <Launche elevation={2}>
      <MissionPath
        source={{
          uri: launche.links.mission_patch_small
            ? launche.links.mission_patch_small
            : 'https://cdn.icon-icons.com/icons2/1968/PNG/512/launch_122853.png',
        }}
      />
      <MissionName> {launche.mission_name} </MissionName>
      <RocketName>{launche.rocket.rocket_name} </RocketName>
    </Launche>
  );
}
