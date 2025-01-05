import { type FormEvent, useRef } from "react";

export interface NewGoalProps {
  addGoal: (title: string, description: string) => void;
}

export default function NewGoal({ addGoal }: NewGoalProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const goalTitle: string = title.current!.value;
    const goalDescription: string = description.current!.value;
    addGoal(goalTitle, goalDescription);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title: </label>
      </p>
      <p>
        <input type="text" id="title" name="title" ref={title} />
      </p>
      <p>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          ref={description}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
