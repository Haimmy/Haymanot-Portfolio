export default function ProjectCard({
  title,
  description,
  video
}) {
  return (
    <div className="glass rounded-3xl overflow-hidden hover:scale-105 transition">

      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-gray-300 mt-4">
          {description}
        </p>

        <button className="mt-6 bg-purple-600 px-6 py-2 rounded-full">
          View Project
        </button>

      </div>

    </div>
  );
}