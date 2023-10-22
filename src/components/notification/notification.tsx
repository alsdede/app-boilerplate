import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AdditionalDataProps, NotificationProps } from './notification.types';
import * as S from './notification.styles';

const Notification = ({ data, onClose }: NotificationProps) => {
  const { navigate } = useNavigation();

  const handleOnPress = () => {
    const { route, game_id } = data.additionalData as AdditionalDataProps;

    if (route === 'details' && game_id) {
      navigate('details', { gameId: game_id });
      onClose();
    }
  };
  return (
    <S.Wrapper onPress={handleOnPress}>
      <S.IconWrapper>
        <Ionicons name='notifications-outline' size={24} />
      </S.IconWrapper>
      <S.Title>{data.title}</S.Title>
      <S.CloseButton>
        <Ionicons name='close' size={20} onPress={onClose} />
      </S.CloseButton>
    </S.Wrapper>
  );
};

export default Notification;
