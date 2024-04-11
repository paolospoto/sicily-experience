import React, { useState, useEffect } from "react";
import { Card } from "../Components/card";
import AppLayout from "../Components/appLayout";
import { Space, Flex, Select, TextInput, Text } from "@mantine/core";
import Fuse from "fuse.js";
import {
  IconFilter,
  IconFilterCheck,
  IconFilterCode,
  IconFilterFilled,
  IconFilters,
} from "@tabler/icons-react";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  // search
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fuse, setFuse] = useState(null);
  const [category, setCategory] = useState("");
  useEffect(() => {
    setFuse(new Fuse(experiences, { keys: ["title"] }));
  }, [experiences]);

  //   useEffect(() => {
  //     if (category) {
  //       const results = experiences.filter((exp) => exp.category === category);
  //       setFilteredExperiences(results);
  //     }
  //   }, [category, filteredExperiences, experiences]);

  //   const onHandleSearch = (e) => {
  //     setSearchTerm(e.target.value);
  //     if (fuse) {
  //       const results = fuse.search(e.target.value).map(({ item }) => item);
  //       results.length > 0
  //         ? setFilteredExperiences(results)
  //         : setFilteredExperiences(experiences);
  //     }
  //   };

  const handleSelect = (categoryValue) => {
    if (categoryValue === category) {
      setCategory("");
    } else {
      setCategory(categoryValue);
    }
  };

  const filterExperiences = () => {
    let filtered = [...experiences];

    if (category) {
      filtered = filtered.filter((exp) => exp.category === category);
    }

    if (searchTerm && fuse) {
      const searchResults = fuse.search(searchTerm).map(({ item }) => item);
      filtered = filtered.filter((exp) => searchResults.includes(exp));
    }

    setFilteredExperiences(filtered);
  };

  useEffect(() => {
    filterExperiences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, category, experiences]);
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
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Space h={"xl"} />
        <Text align={"center"} size={"xl"} fw={800}>
          Experiences
        </Text>
        <Space h={"xl"} />
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          w={"70%"}
          p={"xl"}
          bg={"white"}
          c={"black"}
          style={{ borderRadius: "5px" }}
        >
          <TextInput
            label="Search"
            type="text"
            placeholder="Search for..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            w={"100%"}
          />
          <Space h={"xl"} />
          <Select
            onChange={(_value, category) => handleSelect(category?.value)}
            label="Pick a category"
            placeholder="All"
            data={["Food", "Wellness", "Events", "Openair"]}
            w={"100%"}
            clearable
            leftSection={<IconFilters />}
            comboboxProps={{
              transitionProps: {
                transition: "pop",
                duration: 200,
                shadow: "md",
              },
            }}
          />
        </Flex>
        <Space h={"xl"} />
        {filteredExperiences.map((experience) => (
          <>
            <Card key={experience._id} data={experience} />
            <Space h={"xl"} />
          </>
        ))}
      </Flex>
    </AppLayout>
  );
};

export default Experiences;
