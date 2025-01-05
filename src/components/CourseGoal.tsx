import { ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
  id?: number;
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoal(props: CourseGoalProps) {
  const id = props.id || 0;
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        {props.children}
        <button
          onClick={() => {
            props.onDeleteGoal(id);
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
