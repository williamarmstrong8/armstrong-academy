import markdownStyles from "./markdown-styles.module.css";

type Props =
  | { content: string; reactContent?: never }
  | { content?: never; reactContent: React.ReactElement };

export function CourseBody(props: Props) {
  if (props.reactContent) {
    return (
      <div className={markdownStyles["markdown"]}>
        {props.reactContent}
      </div>
    );
  }
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: props.content! }}
    />
  );
}
