import React from 'react';
import { RowProps } from './Row.types';
import styled from 'styled-components';

const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-flow: row wrap;
  row-gap: ${(props) => props.gutter.y};
  margin-left: -${(props) => props.gutter.x};
  margin-right: -${(props) => props.gutter.x};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')}; ;
`;

const Row: React.FC<RowProps> = ({ align, gutter, justify, wrap }) => {
  return <div></div>;
};
