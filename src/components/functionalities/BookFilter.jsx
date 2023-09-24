import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export const BookFilter = ({ onFilter, authors, titles, subjects }) => {
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [isAuthorsDropdownOpen, setIsAuthorsDropdownOpen] = useState(false);
  const [isTitlesDropdownOpen, setIsTitlesDropdownOpen] = useState(false);

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({
      authors: selectedAuthors,
      titles: selectedTitles,
      subjects: [], 
    });
  };

  const toggleAuthorsDropdown = () => {
    setIsAuthorsDropdownOpen(!isAuthorsDropdownOpen);
  };

  const toggleTitlesDropdown = () => {
    setIsTitlesDropdownOpen(!isTitlesDropdownOpen);
  };

  return (
    <div className="container my-4 mx-auto">
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <form>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label
                  className="text-sm font-medium text-stone-600 cursor-pointer flex items-center space-x-2"
                  onClick={toggleAuthorsDropdown}
                >
                  Authors
                  {isAuthorsDropdownOpen ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </label>
                {isAuthorsDropdownOpen && (
                  <div>
                    {authors.map((author) => (
                      <label
                        key={author}
                        className="flex items-center space-x-2 mt-2"
                      >
                        <input
                          type="checkbox"
                          value={author}
                          checked={selectedAuthors.includes(author)}
                          onChange={(e) => {
                            const authorName = e.target.value;
                            setSelectedAuthors((prevAuthors) => {
                              if (prevAuthors.includes(authorName)) {
                                return prevAuthors.filter(
                                  (author) => author !== authorName
                                );
                              } else {
                                return [...prevAuthors, authorName];
                              }
                            });
                          }}
                          className="rounded border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <span>{author}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  className="text-sm font-medium text-stone-600 cursor-pointer flex items-center space-x-2"
                  onClick={toggleTitlesDropdown}
                >
                  Titles
                  {isTitlesDropdownOpen ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </label>
                {isTitlesDropdownOpen && (
                  <div>
                    {titles.map((title) => (
                      <label
                        key={title}
                        className="flex items-center space-x-2 mt-2"
                      >
                        <input
                          type="checkbox"
                          value={title}
                          checked={selectedTitles.includes(title)}
                          onChange={(e) => {
                            const titleName = e.target.value;
                            setSelectedTitles((prevTitles) => {
                              if (prevTitles.includes(titleName)) {
                                return prevTitles.filter(
                                  (title) => title !== titleName
                                );
                              } else {
                                return [...prevTitles, titleName];
                              }
                            });
                          }}
                          className="rounded border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <span>{title}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </form>
          <button
            onClick={handleFilter} 
            className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
          >
            Search 
          </button>
        </div>
      </div>
    </div>
  );
};
