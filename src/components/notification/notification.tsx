import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NotificationProps } from './notification.types';
import * as S from './notification.styles';

const Notification = ({ title, onClose }: NotificationProps) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Ionicons name='notifications-outline' size={24} />
      </S.IconWrapper>
      <S.Title>{title}</S.Title>
      <S.CloseButton>
        <Ionicons name='close' size={20} onPress={onClose} />
      </S.CloseButton>
    </S.Wrapper>
  );
};

export default Notification;
