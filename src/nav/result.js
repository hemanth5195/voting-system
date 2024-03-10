import React from 'react';

function Result({ members }) {
  return (
    <div className="voting-container">
      <h2 className='ct-headline'>Result</h2>
      <div>
        <table className="voting-table">
          <thead>
            <tr>
              <th className="table-header">Title</th>
              <th className="table-header">Options</th>
              <th className="table-header">Images</th>
              <th className="table-header">No Of Votes</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td className="table-data">{member.name}</td>
                <td className="table-data">{member.options}</td>
                <td className="table-data">
                  <img src={member.image} alt={member.name} className="member-image" />
                </td>
                <td className='table-data'>{member.noofvotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="footer">
<div >

            <div className="col-lg-3 col-md-12 col-sm-12 col-12 section2">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 app-icons">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 copy-info"> 
                  <h6 className='version'>Version: Coming Soon</h6>
                  <h6 className='last'>Available Soon </h6>
                  <h6 className="copyright">© Copyright 2026 VoteForChange. All Rights Reserved.</h6>
                </div>
              </div>
            </div>


 </div>

</footer>
    </div>
  );
}

export default Result;
