import { useState } from "react";
import EditTask from "./EditTask";

export default function TodoTask(props) {
  const { onRemove, onSave, value } = props;

  const [currentValue, setCurrentValue] = useState(value);
  const [isEditMode, setIsEditMode] = useState(false);

  const onCancel = () => {
    setCurrentValue(value);
    setIsEditMode(false);
  };

  const onSaveEdit = () => {
    onSave(currentValue);
    setIsEditMode(false);
  };

  const onChangeEdit = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <li>
      {isEditMode ? (
        <EditTask
          onCancel={onCancel}
          onSave={onSaveEdit}
          onChange={onChangeEdit}
          value={currentValue}
        />
      ) : (
        <>
          {value}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            Edit
          </button>
        </>
      )}

      <button onClick={onRemove}>X</button>
    </li>
  );
}
