import {
  ReportWrap,
  StatisticItem,
  StatisticLabel,
  StatisticValue,
} from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ReportWrap>
      <StatisticItem>
        <StatisticLabel>Good:</StatisticLabel>
        <StatisticValue>{good}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>Neutral:</StatisticLabel>
        <StatisticValue>{neutral}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>Bad:</StatisticLabel>
        <StatisticValue>{bad}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>Total:</StatisticLabel>
        <StatisticValue>{total}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        <StatisticLabel>Positive feedback:</StatisticLabel>
        <StatisticValue>{positivePercentage}%</StatisticValue>
      </StatisticItem>
    </ReportWrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
