import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This feedback item 1",
      rating: 6,
    },
    {
      id: 2,
      text: "This feedback item 2",
      rating: 10,
    },
    {
      id: 3,
      text: "This feedback item 3",
      rating: 7,
    },
    {
      id: 4,
      text: "This feedback item 4",
      rating: 4,
    },
    {
      id: 5,
      text: "This feedback item 5",
      rating: 5,
    },
  ]);

  const deleteFeedback = (id) => {
    if (window.confirm("Are your sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
