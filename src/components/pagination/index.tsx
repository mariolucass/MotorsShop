import Pagination from "@mui/material/Pagination";
import React from "react";
import { useDataContext } from "../../context";

const MyPagination = () => {
  const { page, setPage } = useDataContext();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination
      count={10}
      page={page}
      color="secondary"
      onChange={handleChange}
      size="large"
      sx={{
        ".MuiPagination-ul": {
          justifyContent: "center",
          m: 2,
        },
      }}
    />
  );
};

export default MyPagination;
