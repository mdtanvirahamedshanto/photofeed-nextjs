import PhotoDetails from "@/components/PhotoDetails";

const page = async ({ params: { id, lang } }) => {
  return <PhotoDetails id={id} lang={lang} />;
};

export default page;
