import React, { useState } from "react";

const Display = ({ restaurants }) => {
  const totalPages = Math.floor((restaurants.length - 1) / 6) + 1;
  let pagesArr = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesArr.push(i);
  }

  const [showAllContent, setShowAllContent] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

  const page = () =>
    restaurants.filter(
      (restaurant, index) => index >= (currPage - 1) * 6 && index < currPage * 6
    );

  const forward = (index) => {
    setPageNumber(index);
    console.log("index", index);
    setShowAllContent(!showAllContent);
  };

  const back = () => {
    setShowAllContent(!showAllContent);
  };

  const changePage = (e) => {
    setCurrPage(parseInt(e.target.textContent, 10));
  };

  const content = () => {
    const arr = page();

    if (!showAllContent) {
      return (
        <div id="container2">
          <button id="back" className="button" onClick={back}>
            Back
          </button>
          {arr[pageNumber].image ? (
            <img width="150" height="150" src={arr[pageNumber].image} />
          ) : null}
          <h1>{arr[pageNumber].name}</h1>
          <p>Cost: {arr[pageNumber].cost}</p>
          <p>Rating: {arr[pageNumber].rating}</p>
          <p>Location: {arr[pageNumber].location}</p>
          <a className="men" target="_blank" href={arr[pageNumber].website}>
            See Menu
          </a>
        </div>
      );
    }

    return (
      <>
        <div id="container">
          {arr.map((restaurant, index) => {
            return (
              <button
                onClick={forward.bind(null, index)}
                className="btn btn-white"
              >
                <div className="price">{restaurant.cost}</div>
                <div className="name">{restaurant.name}</div>
              </button>
            );
          })}
        </div>
        <div className="pages">
          {pagesArr.map((page) => (
            <button onClick={changePage}>{page}</button>
          ))}
        </div>
      </>
    );
  };

  return <>{content()}</>;
};

export default Display;
