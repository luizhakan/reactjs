type TweetProps = {
  text: string | number;
};

export function Tweet(props: TweetProps) {
  return (
    <div>
      {props.text}
      <br />
    </div>
  );
}
