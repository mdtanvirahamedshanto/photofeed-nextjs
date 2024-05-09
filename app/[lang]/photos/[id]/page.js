import PhotoDetails from "@/components/PhotoDetails";
import { getDictionary } from "../../disctionaries";

const page = async ({ params: { id, lang } }) => {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`http://localhost:3000/api/photos/${id}`);
  const photo = await response.json();

  return <PhotoDetails photo={photo} dictionary={dictionary} />;
};

export default page;
