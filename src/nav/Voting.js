import React, { useState } from 'react';

function Voting({ members, updateVoteCount }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [page, setPage] = useState('poll');

  const handleMemberSelect = (selectedMember) => {
    setSelectedMember(selectedMember);
  }

  const handleVote = () => {
    if (selectedMember) {
      updateVoteCount(selectedMember);
      setPage('success');
    }
  }

  return (
    <div className="voting-container">
      {page === 'poll' && (
        <div>
          <h1 className="voting-title">Choose Your Favorite Member:</h1>
          <table className="voting-table">
            <thead>
              <tr>
                <th className="table-header">Title</th>
                <th className="table-header">Options</th>
                <th className="table-header">Images</th>
                <th className="table-header">Description</th>
                <th className="table-header">Select</th>
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
                  <td className="table-data">{member.description}</td>
                  <td className="table-data">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="options"
                        value={member.options}
                        onChange={() => handleMemberSelect(member.options)}
                      />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="vote-button-container">
            <button className="vote-button" onClick={handleVote}>Vote</button>
          </div>
        </div>
      )}

      {page === 'success' && selectedMember && (
        <div>
          <h2 className="success-message">Successfully Voted for {selectedMember}!</h2>
          <div className='than1'>
            <img src='./image/thanks.png' className='thank' alt="Thanks" />
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
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

export default Voting;
