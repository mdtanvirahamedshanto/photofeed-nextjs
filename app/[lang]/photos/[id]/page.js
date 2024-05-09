import Follow from "@/public/assets/icons/follow.svg";
import Image from "next/image";
import { getDictionary } from "../../disctionaries";

const page = async ({ params: { id, lang } }) => {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`http://localhost:3000/api/photos/${id}`);
  const photo = await response.json();

  return (
    <div className="container my-4 lg:my-8">
      <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
        <div className="col-span-12 lg:col-span-8 border rounded-xl">
          <Image
            height={500}
            width={700}
            className="max-w-full h-full max-h-[70vh] mx-auto"
            src={photo.url}
            alt=""
          />
        </div>

        <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
          <h2 className="text-lg lg:text-2xl font-bold mb-2">{photo.title}</h2>
          <div className="text-xs lg:text-sm text-black/60 mb-6">
            {photo?.tags?.map((tag) => `#${tag} `)}
          </div>
          <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
            <div className="flex justify-between">
              <span>{dictionary.views}</span>
              <span className="font-bold">{photo?.views}</span>
            </div>
            <div className="flex justify-between">
              <span>{dictionary.share}</span>
              <span className="font-bold">{photo?.share}</span>
            </div>

            <div className="flex justify-between">
              <span>{dictionary.uploadedOn}</span>
              <span className="font-bold">{photo?.uploaded}</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <Image
                  height={500}
                  width={500}
                  className="size-12 lg:size-14 rounded-full border"
                  src={photo?.author?.avatar}
                  alt="avatar"
                />
                <div className="spacy-y-3">
                  <h6 className="lg:text-lg font-bold">
                    {photo?.author?.name}
                  </h6>
                  <p className="text-black/60 text-xs lg:text-sm">
                    {photo?.author?.followers} {dictionary.followers}
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                <Image alt="follow" src={Follow} className="w-5 h-5" />
                {dictionary.follow}
              </button>
            </div>
            <p className="text-xs lg:text-sm text-black/60">
              {photo?.author?.bio}
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-stretch gap-3">
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  height={500}
                  width={500}
                  alt="like"
                  src="/assets/icons/heart.svg"
                  className="w-5 h-5"
                />
                100
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  height={500}
                  width={500}
                  alt="save"
                  src="/assets/icons/save.svg"
                  className="w-5 h-5"
                />
                {dictionary.save}
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  height={500}
                  width={500}
                  alt="share"
                  src="/assets/icons/share.svg"
                  className="w-5 h-5"
                />
                {dictionary.share}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
