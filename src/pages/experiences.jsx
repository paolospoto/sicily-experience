import React, { useState, useEffect } from "react";
import { Card } from "./Components/card";
import AppLayout from "./Components/appLayout";
import { Space } from "@mantine/core";
import Fuse from "fuse.js";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  // search
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fuse, setFuse] = useState(null);
  useEffect(() => {
    setFuse(new Fuse(experiences, { keys: ["title"] }));
  }, [experiences]);

  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (fuse) {
      const results = fuse.search(e.target.value).map(({ item }) => item);
      results.length > 0
        ? setFilteredExperiences(results)
        : setFilteredExperiences(experiences);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setFilteredExperiences(data);
      });
  }, []);

  useEffect(() => {
    console.log(experiences);
  }, [experiences]);
  return (
    <AppLayout withHeaderBorder={true}>
      <input
        type="text"
        placeholder="Search for..."
        value={searchTerm}
        onChange={onHandleSearch}
      />
      {filteredExperiences.map((experience) => (
        <>
          <Card key={experience._id} data={experience} />
          <Space h={"xl"} />
        </>
      ))}
    </AppLayout>
  );
};

export default Experiences;
