import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const ToDoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // const changHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(inputRef.current!.value);
      inputRef.current!.value = "";
      // console.log(title);
      // setTitle("");
    }
  };

  return (
    <div className="input_field mt2 ">
      <input
        // onChange={changHandler}
        // value={title}
        ref={inputRef}
        type="text"
        id="title"
        placeholder="What to do?"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        What to do?
      </label>
    </div>
  );
};
