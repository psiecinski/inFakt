import { useState, useEffect, useCallback } from "react";
import {
  User,
  UserGetApi,
  RandomUserGetResponse,
  RandomUserGetProps,
  RandomUserGetResult,
} from "./types";

export default function useGetRandomUser({
  seed,
  gender,
  resultsSize = 4,
}: RandomUserGetProps): RandomUserGetResult {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uniqueUserIds] = useState<Set<string>>(new Set());

  const genderQuery = gender || "male";
  const seedQuery = seed || "inFakt";

  const transformData = useCallback(
    (data: UserGetApi[]): User[] => {
      return data
        .map((user) => ({
          ...user,
          id: user.id.value,
          averageNettoPrice: 350,
        }))
        .filter((user) => {
          if (!uniqueUserIds.has(user.id)) {
            uniqueUserIds.add(user.id);
            return true;
          }
          return false;
        });
    },
    [uniqueUserIds]
  );

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const resultsPerPage = resultsSize;
      const startIndex = (page - 1) * resultsPerPage;

      const response = await fetch(
        `https://randomuser.me/api/?seed=${seedQuery}&gender=${genderQuery}&page=${page}&results=${resultsPerPage}&start=${startIndex}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData: RandomUserGetResponse = await response.json();
      const transformedData = transformData(responseData.results);
      setData((prevData) => [...prevData, ...transformedData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, seedQuery, genderQuery, resultsSize, transformData]);

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { data, isLoading, fetchMore: loadMore };
}
