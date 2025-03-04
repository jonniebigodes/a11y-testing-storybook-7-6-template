import styled from "@emotion/styled";
import { PostCard } from "../../components/PostCard";
import { posts } from "../../data/posts";
import { useTheme } from "../../context/ThemeContext";

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HomeHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1<{ theme: string }>`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#f9fafb";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#ffff00";
      default:
        return "#1f2937";
    }
  }};
  margin-bottom: 1rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff; 
    font-family: "VT323", "Courier New", monospace;
    letter-spacing: 2px;
    animation: blink 1s infinite alternate;
    @keyframes blink {
      from { opacity: 0.7; }
      to { opacity: 1; }
    }
  `}
`;

const Subtitle = styled.p<{ theme: string }>`
  font-size: 1.25rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ff00";
      default:
        return "#6b7280";
    }
  }};
  max-width: 600px;
  margin: 0 auto;
  ${(props) =>
    props.theme === "eighties" &&
    `
    text-shadow: 1px 1px #ff00ff;
    font-family: "VT323", "Courier New", monospace;
  `}
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <HomeContainer>
      <HomeHeader>
        <Title theme={theme}>Welcome to Testing Blog</Title>
        <Subtitle theme={theme}>
          A blog about testing, development, and design.
        </Subtitle>
      </HomeHeader>

      <PostsGrid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsGrid>
    </HomeContainer>
  );
};
