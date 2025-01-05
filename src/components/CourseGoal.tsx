import { ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
  id?: number;
}

export default function CourseGoal(props: CourseGoalProps) {
  const id = props.id || 0;
  return (
    <article>
      <div>
        <h2>
          {id} - {props.title}
        </h2>
        {props.children}
        <button>Delete</button>
      </div>
    </article>
  );
}
