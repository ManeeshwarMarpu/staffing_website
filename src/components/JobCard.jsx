const JobCard = ({ job }) => {
  return (
    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
      <p className="text-gray-300">{job.location}</p>
      <p className="text-gray-400">{job.type}</p>
      <button className="mt-4 bg-cyan-400 text-black px-4 py-2 rounded-full">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
