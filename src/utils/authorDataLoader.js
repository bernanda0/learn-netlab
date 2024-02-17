import authorsData from "../../authors";

const getAuthorsByName = (names) => {
  const authorList = [];

  names.forEach(name => {
    if (authorsData[name]) {
      authorList.push(authorsData[name]);
    }
  });

  return authorList;
};

export default getAuthorsByName;