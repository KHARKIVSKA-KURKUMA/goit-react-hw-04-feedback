import React, { useState, useReducer } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import reducer from 'services/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;

  const [total, setTotal] = useState(0);
  const options = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  const handleClick = feedback => {
    dispatch({ type: feedback, payload: 1 });
    countTotalFeedback();
  };

  const countTotalFeedback = () => {
    const totalCount = good + neutral + bad;
    setTotal(totalCount + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }
    return Number.parseInt((good / total) * 100);
  };

  /* --------------------------------- RENDER --------------------------------- */
  const positivePercentage = countPositiveFeedbackPercentage();
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
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
