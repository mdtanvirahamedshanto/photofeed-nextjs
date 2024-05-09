import Card from "./Card";

/* eslint-disable @next/next/no-img-element */
const PhotoList = ({ photos }) => {
  return (
    <div className="container my-4 lg:my-8">
      <div className="img-grid">
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
