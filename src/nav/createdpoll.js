import React, { useState } from 'react';
import './UserVoting.css';

function Createdpoll() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [page, setPage] = useState('poll');

  const handleMemberSelect = (selectedMember) => {
    setSelectedMember(selectedMember);
  }

  const handleVote = () => {
    if (selectedMember) {
      setPage('success');
    }
  }

  const members = [
    {
      name: "AP ELECTIONS",
      image: "./image/TDP.png",
      options: "TDP",
      description: "Telugu Desam Party - A regional political party in Andhra Pradesh and Telangana, advocating for regional development and governance.",
    },
    {
      name: "AP ELECTIONS",
      image: "./image/JSP.png",
      options: "JSP",
      description: "Jana Sena Party - Founded by actor Pawan Kalyan, it focuses on social and political issues in Andhra Pradesh.",
    },
    {
      name: "AP ELECTIONS",
      image: "./image/YSRCP.png",
      options: "YSRCP",
      description: "Yuvajana Sramika Rythu Congress Party - A regional party in Andhra Pradesh, led by Y. S. Jagan Mohan Reddy.",
    },
    {
      name: "AP ELECTIONS",
      image: "./image/CONGRESS.png",
      options: "CONGRESS PARTY",
      description: "Indian National Congress - One of India's oldest political parties, with a rich history and diverse representation.",
    },
    {
      name: "AP ELECTIONS",
      image: "./image/vasu.jpg",
      options: "THALAPATHY PARTY",
      description: "Tamizhaga Vetri Kazhagam- The party will mark its debut in the 2026 Tamil Nadu assembly election",
    },
  ];

  return (
    <div className="voting-container">
      <h2 className='ct-headline'>Created A Voting</h2>
      {page === 'poll' && (
        
        <div>
          <table className="voting-table">
            <thead>
              <tr>
                <th className="table-header">Title</th>
                <th className="table-header">Options</th>
                <th className="table-header">Images</th>
                <th className="table-header">Description</th>
                
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
<footer className="footer">

<div >

<div className="col-lg-3 col-md-12 col-sm-12 col-12 section2">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 app-icons">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 copy-info"> 
                  <h6 className='version'>Version: 32.4.50.1</h6>
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

export default Createdpoll;
