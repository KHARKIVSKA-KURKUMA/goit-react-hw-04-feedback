import styled from 'styled-components';

const ReportWrap = styled.div`
  margin: 10px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 120px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.5;
  max-width: 500px;
`;
const StatisticItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const StatisticLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const StatisticValue = styled.span`
  font-weight: normal;
`;

export { ReportWrap, StatisticItem, StatisticLabel, StatisticValue };
