import styled from '@emotion/styled';
import { media } from '../media_query';

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  transition: all 0.2s;
  width: 1200px;

  ${media.desktop`
    width: calc(100% - 2rem);
    border: 1px solid red;
  `}
  ${media.mobile`
    width: calc(100% - 1rem);        
  `}
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s;

  width: 1200px;
  height: calc(100vh - 140px);

  /* height: calc(100vh - (header + footer height)); */

  ${media.desktop`
    width: calc(100% - 2rem);
  `}
  ${media.mobile`
    width: calc(100% - 1rem);        
  `}
`;
