import styled from "@emotion/styled";
import { Calendar, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "../../types";
import { Card } from "../Card";
import { useTheme } from "../../context/ThemeContext";

interface PostCardProps {
  post: BlogPost;
}

const PostTitle = styled.h2<{ theme: string }>`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
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
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-shadow: 2px 2px #00ffff;
    letter-spacing: 1px;
    text-transform: uppercase;
  `}
`;

const PostExcerpt = styled.p<{ theme: string }>`
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#d1d5db";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ff00";
      default:
        return "#4b5563";
    }
  }};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-shadow: 1px 1px #ff00ff;
    font-size: 1.1rem;
  `}
`;

const PostMeta = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
        return "#00ffff";
      default:
        return "#6b7280";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1rem;
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
  margin-top: 1rem;
`;

const TagItem = styled.span<{ theme: string }>`
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#374151";
      case "purple":
        return "#7e22ce";
      case "pink":
        return "#db2777";
      case "eighties":
        return "#ff00ff";
      default:
        return "#e5e7eb";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#d1d5db";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#00ffff";
      default:
        return "#4b5563";
    }
  }};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 0.9rem;
    border: 2px solid #00ffff;
    animation: pulse 2s infinite;
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `}
`;

const ReadMoreLink = styled(Link)<{ theme: string }>`
  display: inline-block;
  margin-top: 1rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#60a5fa";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#f472b6";
      case "eighties":
        return "#ffff00";
      default:
        return "#3b82f6";
    }
  }};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    ${(props) =>
      props.theme === "eighties" &&
      `
      text-decoration: none;
      animation: shake 0.5s infinite;
      @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(0); }
        75% { transform: translateX(5px); }
        100% { transform: translateX(0); }
      }
    `}
  }
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.2rem;
    text-shadow: 1px 1px #ff00ff;
    letter-spacing: 1px;
  `}
`;

export const PostCard = ({ post }: PostCardProps) => {
  const { theme } = useTheme();

  return (
    <Card>
      <PostTitle theme={theme}>{post.title}</PostTitle>
      <PostMeta theme={theme}>
        <MetaItem>
          <Calendar size={16} />
          {post.date}
        </MetaItem>
        <MetaItem>
          <User size={16} />
          {post.author}
        </MetaItem>
      </PostMeta>
      <PostExcerpt theme={theme}>{post.excerpt}</PostExcerpt>
      <TagsContainer>
        {post.tags.map((tag, index) => (
          <TagItem key={index} theme={theme}>
            <Tag size={12} />
            {tag}
          </TagItem>
        ))}
      </TagsContainer>
      <ReadMoreLink to={`/post/${post.id}`} theme={theme}>
        Read more →
      </ReadMoreLink>
    </Card>
  );
};
