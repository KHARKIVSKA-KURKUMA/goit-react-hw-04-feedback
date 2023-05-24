import React, { useEffect, useState } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

const App = () => {
  /* ---------------------------------- STATE --------------------------------- */
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  /* -------------------------------------------------------------------------- */
  const options = {
    good,
    neutral,
    bad,
  };
  /* ------------------------------ HANDLE CLICK ------------------------------ */
  const handleClick = feedback => {
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      default:
        return;
    }
  };

  /* ---------------------------------- TOTAL --------------------------------- */
  const countTotalFeedback = () => {
    setTotal(good + neutral + bad);
  };

  /* -------------------------------- POSITIVE -------------------------------- */
  const countPositiveFeedbackPercentage = () =>
    setPositiveFeedback(Number.parseInt((good / total) * 100));
  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  });

  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
