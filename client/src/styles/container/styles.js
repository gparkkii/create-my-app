import styled from '@emotion/styled';
import { media } from '../media_query';

export const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
  padding-top: 60px;
  padding-bottom: 80px;
`;

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

export const GridContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  & a {
    width: 100%;
    height: 100%;
  }
  ${media.desktop`
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 28px;
  `}
  ${media.tablet`
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
  `}
  ${media.mobile`
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,1fr);
  `}
`;
