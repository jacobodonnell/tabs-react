const ButtonContainer = ({ jobs, currJob, setCurrJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            type="button"
            className={currJob === index ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrJob(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
