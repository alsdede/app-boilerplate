import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { RouteParamsProps, GameProps } from './details-screen.types';
import { GAMES } from './content';
import * as S from './details-screen.styles';

const DetailsScreen = () => {
  const [game, setGame] = useState<GameProps>({} as GameProps);
  const route = useRoute();
  const { navigate } = useNavigation();
  const { gameId } = route.params as RouteParamsProps;

  useEffect(() => {
    const selected = GAMES.filter((item) => item.id === gameId)[0] as GameProps;
    setGame(selected);
  }, [gameId]);

  return (
    <S.Wrapper>
      <Text>{game}</Text>
    </S.Wrapper>
  );
};

export default DetailsScreen;
