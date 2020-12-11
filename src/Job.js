import React from "react";
import { Card } from "react-bootstrap";

const Job = ({ job }) => {
  return (
    <Card>
      <Card.body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
          </div>
        </div>
      </Card.body>
    </Card>
  );
};

export default Job;
