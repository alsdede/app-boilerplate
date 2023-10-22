import styled from 'styled-components/native';

export const Wrapper = styled.Pressable`
  width: 100%;
  padding: 16px;
  padding-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #c4c4cc;
  position: absolute;
  top: 40px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #000;
  flex: 1;
`;

export const CloseButton = styled.Pressable`
  font-size: 12px;
  color: #000;
  height: 24px;
  width: 24px;
`;
export const IconWrapper = styled.View`
  padding-right: 8px;
`;
