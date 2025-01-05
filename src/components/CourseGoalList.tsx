import CourseGoal from "./CourseGoal";

export interface Goal {
  title: string;
  description: string;
  id: number;
}

interface CourseGoalListProps {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList(props: CourseGoalListProps) {
  return (
    <ul>
      {props.goals.map((goal, index) => {
        return (
          <li key={index}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDeleteGoal={props.onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
