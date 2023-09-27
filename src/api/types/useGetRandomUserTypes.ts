export type UserGetApi = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  picture: {
    thumbnail: string;
  };
  id: {
    name: string;
    value: string;
  };
  gender: string;
};

type TransformedUser = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  picture: {
    thumbnail: string;
  };
  id: string;
  averageNettoPrice: number;
  gender: string;
};

export type RandomUserGetProps = {
  seed?: string;
  gender?: string;
  resultsSize?: number;
};

export type RandomUserGetResponse = {
  results: UserGetApi[];
};

export type RandomUserGetResult = {
  data: TransformedUser[];
  isLoading: boolean;
  fetchMore: () => void;
};

export type { TransformedUser as User };
