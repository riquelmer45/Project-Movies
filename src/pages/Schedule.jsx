import React, { useState, useEffect } from "react";
import "./Schedule.css";
import Card from "../components/Card";
import filterListData from "../data/filterListData";

function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterListData);

  const fetchData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFiltersMovies = (category) => {
    setFilters(
      filters.map((filter) =>
        filter.name === category
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
    if (category === "All") {
      setMovies(data);
      return;
    }
    setMovies(data.filter((movie) => movie.category === category));
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Em estreia</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter._id}
                className={`${filter.active ? "active" : undefined}`}
                onClick={() => {
                  handleFiltersMovies(filter.name);
                }}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row nt5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie._id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
