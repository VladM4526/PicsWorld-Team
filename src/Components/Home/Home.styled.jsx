import styled from 'styled-components';

export const HomeWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const DailyWrapStyled = styled.div``;

export const TodayWrapStyled = styled.div`
  padding: 24px 8px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: var(--Secondary-color-2, #ecf2ff);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
  }

  @media only screen and (min-width: 1440px) {
    /* padding: 32px 24px; */
  }
`;

export const DailyTrackerWrapStyled = styled.div``;
