import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context";
import Pagination from "@mui/material/Pagination";
import { getCountAnnouncements } from "../../services";

const MyPagination = () => {
  const [countPages, setCountPages] = useState(0);
  const { page, setPage, count, setCount, AdvertsData, searchParams } =
    useDataContext();

  useEffect(() => {
    (async () => {
      const countAnnouncements = await getCountAnnouncements();
      setCount(countAnnouncements);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const pageParam = searchParams.get("page");

    const countOfPages =
      AdvertsData.length <= 9
        ? Math.floor(AdvertsData.length / 9) + 1
        : Math.floor(count / 9) + 1;

    setCountPages(countOfPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AdvertsData]);

  return (
    <Pagination
      count={2}
      page={page}
      color="secondary"
      onChange={handleChange}
      size="large"
      sx={{
        fontFamily: "Lexend",
        ".MuiPagination-ul": {
          justifyContent: "center",
          m: 2,
        },
      }}
    />
  );
};

export default MyPagination;
