import Image from "next/image";
import Link from "next/link";

const Card = ({ photo }) => {
  return (
    <Link href={`/photos/${photo.id}`} className="group">
      <Image src={photo.url} height={500} width={500} alt="" />

      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
};

export default Card;
