import PropTypes from 'prop-types';
import { BtnWrap, FeedbackBtn } from './Feedback.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnWrap>
      {Object.keys(options).map((option, index) => {
        return (
          <FeedbackBtn
            key={index}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackBtn>
        );
      })}
    </BtnWrap>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
