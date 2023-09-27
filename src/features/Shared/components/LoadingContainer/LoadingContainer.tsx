import { Container } from "./LoadingContainer.styled";
import { LoadingTile } from "./Private/LoadingTile";

type LoadingSkeletonProps = {
  size: number;
};

function LoadingContainer({ size }: LoadingSkeletonProps) {
  const iterate = Array(size)
    .fill(0)
    .map((_, i) => i * i);

  return (
    <Container>
      {iterate.map((index) => {
        return <LoadingTile key={index}/>;
      })}
    </Container>
  );
}

export default LoadingContainer;
