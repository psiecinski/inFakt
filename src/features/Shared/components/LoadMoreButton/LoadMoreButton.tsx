import { LoadButton } from "./LoadMoreButton.styled";

type Props = {
  fetchMore: () => void;
  isLoading: boolean;
};

export default function LoadMoreButton({ fetchMore, isLoading }: Props) {
  return (
    <LoadButton onClick={fetchMore} disabled={isLoading} className={isLoading ? "loading" : ""}>
      {isLoading ? "Loading..." : "Load More Users"}
    </LoadButton>
  );
}