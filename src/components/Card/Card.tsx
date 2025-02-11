type CardProps = {
  id: number;
  title: string;
  body: string;
};

export default function Card({ id, title, body }: CardProps) {
  return (
    <div>
      <h1>
        {id}: {title}
      </h1>
      <p>{body}</p>
    </div>
  );
}
