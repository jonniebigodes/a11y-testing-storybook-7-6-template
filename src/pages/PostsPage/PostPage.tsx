import styled from "@emotion/styled";
import { Calendar, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { ClapButton } from "../../components/ClapButton";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";
import { ShareButtons } from "../../components/ShareButtons";
import { posts } from "../../data/posts";
import { useTheme } from "../../context/ThemeContext";

const PostContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const PostHeader = styled.div`
  margin-bottom: 2rem;
`;

const PostTitle = styled.h1<{ theme: string }>`
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
        return "#ffff00"; // Yellow text on magenta background
      default:
        return "#1f2937";
    }
  }};
  margin-bottom: 1rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-shadow: 3px 3px #ff00ff, -3px -3px #00ffff;
    letter-spacing: 2px;
    text-transform: uppercase;
    transform: skew(-5deg);
    display: inline-block;
    padding: 5px;
    border: 2px solid #00ffff;
    background: linear-gradient(to right, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
    width: 100%;
  `}
`;

const PostMeta = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ffff"; // Cyan text
      default:
        return "#6b7280";
    }
  }};
  margin-bottom: 2rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.1rem;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px 10px;
    border-radius: 0;
    border-left: 3px solid #ff00ff;
    border-right: 3px solid #00ffff;
  `}
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const TagItem = styled.span<{ theme: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#1f2937";
      case "purple":
        return "#7e22ce";
      case "pink":
        return "#db2777";
      case "eighties":
        return "#ff00ff"; // Magenta background
      default:
        return "#dbeafe";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#93c5fd";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#00ffff"; // Cyan on magenta - poor contrast
      default:
        return "#1e40af";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 0.9rem;
    border-radius: 0;
    border: 1px solid #00ffff;
    text-transform: uppercase;
    animation: tagPulse 2s infinite alternate;
    @keyframes tagPulse {
      from { transform: scale(1); background-color: #ff00ff; }
      to { transform: scale(1.1); background-color: #cc00cc; }
    }
  `}
`;

const NotFoundMessage = styled.div<{ theme: string }>`
  text-align: center;
  padding: 3rem 0;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#d1d5db";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#ffff00"; // Yellow text
      default:
        return "#6b7280";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.5rem;
    text-shadow: 2px 2px #ff00ff;
    border: 2px dashed #00ffff;
    padding: 20px;
    animation: blink 1s infinite alternate;
    @keyframes blink {
      from { opacity: 0.7; }
      to { opacity: 1; }
    }
  `}
`;

const PostActions = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid
    ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#374151";
        case "purple":
          return "#7e22ce";
        case "pink":
          return "#db2777";
        case "eighties":
          return "#00ffff"; // Cyan border
        default:
          return "#e5e7eb";
      }
    }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    border-top-width: 3px;
    border-top-style: dashed;
    background: linear-gradient(to right, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
    padding: 20px 10px 10px;
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.3);
  `}
`;

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);
  const { theme } = useTheme();

  if (!post) {
    return (
      <PostContainer>
        <Card>
          <NotFoundMessage theme={theme}>
            Post not found. The post you're looking for might have been removed
            or doesn't exist.
          </NotFoundMessage>
        </Card>
      </PostContainer>
    );
  }

  // Get the current URL for sharing
  const currentUrl = window.location.href;

  return (
    <PostContainer>
      <Card>
        <PostHeader>
          <PostTitle theme={theme}>{post.title}</PostTitle>
          <PostMeta theme={theme}>
            <MetaItem>
              <Calendar size={18} />
              {post.date}
            </MetaItem>
            <MetaItem>
              <User size={18} />
              {post.author}
            </MetaItem>
          </PostMeta>
          <TagsContainer>
            {post.tags.map((tag, index) => (
              <TagItem key={index} theme={theme}>
                {tag}
              </TagItem>
            ))}
          </TagsContainer>
        </PostHeader>

        <MarkdownRenderer content={post.content} />

        <PostActions theme={theme}>
          <ClapButton postId={post.id} />
          <ShareButtons title={post.title} url={currentUrl} />
        </PostActions>
      </Card>
    </PostContainer>
  );
};
