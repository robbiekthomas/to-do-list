export default function EditTask(props) {
  const { onCancel, onSave, onChange, value } = props;
  return (
    <>
      <input value={value} onChange={onChange} />
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </>
  );
}
