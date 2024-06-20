import Image from "next/image";

interface CommentProps {
  id: number;
  name: string;
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ id, name, comment }) => {
  return (
    <div className="card bg-base-100 shadow-xl  my-5">
      <div className="card-body">
        <Image
          src={`https://i.pravatar.cc/150?u=${id}`}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <h2 className="card-title">{name}</h2>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
