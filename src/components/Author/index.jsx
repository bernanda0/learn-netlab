import React from "react";
import getAuthorsByName from "../../utils/authorDataLoader"; // Importing the

const AuthorContributor = ({ author }) => {
  const { name, title, url, image_url } = author;

  return (
    <div className="mt-6 mb-3 grid grid-cols-6">
      <div className="col-span-6 md:col-span-3">
        <div className="mb-3 flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-3"
            src={image_url}
            alt={name}
          />
          <div className="flex flex-col">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-medium">{name}</span>
            </a>
            <small className="text-gray-600">{title}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthorList = ({ authorsName }) => {
  const authors = getAuthorsByName(authorsName);

  return (
    <div>
      {authors.length !== 0 ? (
        <div>
          {authors.map((author, index) => (
            <AuthorContributor key={index} author={author} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AuthorList;
