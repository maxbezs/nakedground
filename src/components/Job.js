const Job = (props) =>{
    return(
        <div className="job">
            <div className="job-header">
                <h3 className="job-h3">
                    {props.jobPosition}
                </h3>
                <p className="review-header" style={{fontWeight:"700"}}>{props.jobType}</p>
            </div>
            <p className="job-desc">
                {props.jobDescription}
            </p>
            
        </div>
    )
}
export default Job