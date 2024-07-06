function LatestArtCard({ imageSrc, title }) {
  return (
    <div className="w-[288px] bg-transparent shadow-sm border-[1px] h-fit border-gray-300 rounded-[8px] mx-2">
      <img src={imageSrc} className="rounded-t-[8px] w-full" alt={title} />
      <div className="py-5 px-3 flex flex-col justify-start items-start gap-2 text-white">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
}

export default LatestArtCard;
