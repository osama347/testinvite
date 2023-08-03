import { useLocation } from "react-router-dom";

function QuestionBank() {
    const location = useLocation();

    return (
      <div>
        <p>Current URL: {location.pathname}</p>
        {/* You can also access other properties like location.search, location.hash, etc. */}
      </div>
    );
}

export default QuestionBank