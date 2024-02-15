"use client";

import Link from "next/link";
import { jobType } from "@/types/jobTypes";
import Image from "next/image";

interface JobsCardProps {
  job: jobType;
}

const JobCard = ({ job }: JobsCardProps) => {
  return (
    <Link href={`/job/${job.id}`}>
      <div className="border p-3 rounded-md flex flex-col hover:bg-purple-600 transition duration-700 hover:text-white">
        <div className="flex justify-between">
          <div>
            <Image
              src={job.img ? job.img : "/fallbackimage.png"}
              height={40}
              width={40}
              alt={`${job.author} logo`}
            />
            <h2 className="text-sm">{job.author}</h2>
          </div>
          <h2>{job.salary}k/year</h2>
        </div>

        <div className="mt-3 text-xl">
          <h3>{job.name}</h3>
          <p>{job.location}</p>
          <span className="bg-purple-600 text-xs px-3 rounded-md text-white">
            {job.employmentType}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
