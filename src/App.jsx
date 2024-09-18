import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import ButtonContainer from './ButtonContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currJob, setCurrJob] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response isn't ok`);
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // const changeJob = id => {
  //   const newJob = jobs.findIndex(job => job.id === id);
  //   setCurrJob(newJob);
  // };

  useEffect(() => {
    setIsLoading(true);
    fetchJobs();
  }, []);

  return (
    <main>
      <section className="jobs-center">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <>
            <ButtonContainer
              jobs={jobs}
              currJob={currJob}
              setCurrJob={setCurrJob}
            />
            <JobInfo jobs={jobs} currJob={currJob} />
          </>
        )}
      </section>
    </main>
  );
};
export default App;
