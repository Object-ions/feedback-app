import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
