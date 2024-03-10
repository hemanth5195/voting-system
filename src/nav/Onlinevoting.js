import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Onlinevoting.css';

function Onlinevoting() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedType, setSelectedType] = useState('image_poll'); // Default selected type
  const [selectedImage, setSelectedImage] = useState(null);
  const [answerOptions, setAnswerOptions] = useState([{ label: '', image: null, description: '' }]);
  const [pollCreated, setPollCreated] = useState(false);
  const [descriptions, setDescriptions] = useState(['']); // Initialize with an empty description
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();
  
  const handleStartForFreeClick = () => {
    navigate('/createdpoll');
  };

  const handleStartFreeClick = () => {
    navigate('/result');
  };
  
  
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setTitleError(false); // Clear title error when user starts typing
  };

  const handleOptionSelection = (index) => {
    // Implement your selection logic here
    // You can set the selected option based on the index or perform any other action.
    console.log(`Option at index ${index} selected.`);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    // If switching to 'Multiple Choice', remove options with no labels
    if (type === 'multiple_choice') {
      const filteredOptions = answerOptions.filter((option) => option.label.trim() !== '');
      setAnswerOptions(filteredOptions);
    }
  };

  const handleDescriptionChange = (index, e) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index] = e.target.value;
    setDescriptions(updatedDescriptions);
  };

  const handleImageChange = (index, e) => {
    const selectedImageFile = e.target.files[0];
    const updatedOptions = [...answerOptions];
    updatedOptions[index].image = selectedImageFile;
    setAnswerOptions(updatedOptions);
  };

  const addOption = () => {
    setAnswerOptions([...answerOptions, { label: '', image: null, description: '' }]);
  };

  const removeOption = (index) => {
    const updatedOptions = [...answerOptions];
    updatedOptions.splice(index, 1);
    setAnswerOptions(updatedOptions);
  };

  const createPoll = () => {
    // Check if the title is empty
    if (title.trim() === '') {
      setTitleError(true);
      return;
    }

    // Filter out options with no labels when creating the poll
    const filteredOptions = answerOptions.filter((option) => option.label.trim() !== '');

    // Check if there are no answer options
    if (filteredOptions.length === 0) {
      // Show an error message or handle it as needed
      return;
    }

    // You can handle the creation of the poll with the filteredOptions here.
    // Access title, selectedType, filteredOptions, and selectedImage as needed.
    console.log({
      title,
      selectedType,
      answerOptions: filteredOptions,
      selectedImage,
    });
    setPollCreated(true); // Set pollCreated to true after creating the poll
    setFilteredOptions(filteredOptions); // Update filteredOptions state
  };

  return (
    <div className="full">
      <div>
        <div className='ct-headline7'>
          Create Poll
        </div>
        <form className='tab'>
          <div>
            <div className="relative">
              <label htmlFor="title" className="label">
                Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Type your question here"
                  className={`input large ${titleError ? 'is-danger' : ''}`}
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              {titleError && (
                <p className="mt-2 text-sm text-red-600">
                  Please enter a poll title.
                </p>
              )}
            </div>
          </div>

          <div className="mt-3 text-sm space-x-2">
            <button
              type="button"
              onClick={() => setShowDescription(!showDescription)}
              className="ad"
            >
              <span>Add description or Text</span>
            </button>
          </div>

          {showDescription && (
            <div>
              <div>
                <label htmlFor="description" className="label">
                  Description <span className="text-sm text-gray-500">(optional)</span>
                </label>
              </div>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  className="textarea large"
                ></textarea>
                <div className="mt-1 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowDescription(false)}
                    className="button"
                  >
                    Hide description
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="sm:grid sm:grid-cols-2 sm:gap-6">
            <div className="relative mt-1 rounded-md shadow-sm">
              <label htmlFor="voting-type" className="label">
                Voting type
              </label>
              <select
                id="voting-type"
                name="voting-type"
                className="input large"
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
              >
                <option value="image_poll">Image poll</option>
                <option value="multiple_choice">Multiple choice</option>
                <option value="meeting">Meeting poll</option>
                <option value="ranking">Ranking poll</option>
              </select>
            </div>
          </div>

          {selectedType === 'image_poll' && (
            <div>
              <label className="label">Answer Options (Image Poll)</label>
              {answerOptions.map((option, index) => (
                <div key={index} className="mt-1 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    className="input"
                    value={option.label}
                    onChange={(e) => {
                      const updatedOptions = [...answerOptions];
                      updatedOptions[index].label = e.target.value;
                      setAnswerOptions(updatedOptions);
                    }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e)}
                    className="hidden"
                  />
                  <label htmlFor={`option-image-${index}`} className="cursor-pointer">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0"
                      stroke="currentColor"
                    ></svg>
                  </label>
                  {option.image && (
                    <img
                      src={URL.createObjectURL(option.image)}
                      alt={`Option ${index + 1} Image`}
                      className="option-image"
                    />
                  )}
                  <input
                    type="text"
                    placeholder="Description"
                    className="input"
                    value={option.description}
                    onChange={(e) => {
                      const updatedOptions = [...answerOptions];
                      updatedOptions[index].description = e.target.value;
                      setAnswerOptions(updatedOptions);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removeOption(index)}
                    className="button1"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                className="button"
              >
                Add Option
              </button>
            </div>
          )}

          {selectedType === 'multiple_choice' && (
            <div>
              <label className="label">Answer Options (Multiple Choice)</label>
              {answerOptions.map((option, index) => (
                <div key={index} className="mt-1 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    className="input"
                    value={option.label}
                    onChange={(e) => {
                      const updatedOptions = [...answerOptions];
                      updatedOptions[index].label = e.target.value;
                      setAnswerOptions(updatedOptions);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removeOption(index)}
                    className="buttonm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                className="button"
              >
                Add Option
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={createPoll}
            className="create"
          >
            Create Poll
          </button>
        </form>
      </div>

      {pollCreated ? (
        <div>
          <h2>Poll Created:</h2>
          <table className="poll-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Options</th>
                <th>Images</th>
                <th>Description</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {filteredOptions.map((option, index) => (
                <tr key={index}>
                  <td>{title}</td>
                  <td>{selectedType}</td>
                  <td>{option.label}</td>
                  <td>
                    {option.image && (
                      <img
                        src={URL.createObjectURL(option.image)}
                        alt={`Option ${index + 1} Image`}
                        className="table-option-image"
                      />
                    )}
                  </td>
                  <td>{option.description}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleOptionSelection(index)}
                      className="selection-button"
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
<div>
  <button className='crep' onClick={handleStartForFreeClick}>
    Created Poll
    </button>
  <button className='crep1' onClick={handleStartFreeClick}>
    Result
    </button>
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

export default Onlinevoting;
