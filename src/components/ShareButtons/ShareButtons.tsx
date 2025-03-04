import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Copy, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const ShareTitle = styled.h3<{ theme: string }>`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#ffff00";
      default:
        return "#374151";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-shadow: 1px 1px #ff00ff;
    letter-spacing: 1px;
  `}
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ShareButton = styled.button<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#374151";
      case "purple":
        return "#7e22ce";
      case "pink":
        return "#f9a8d4";
      case "eighties":
        return "#ffff00";
      default:
        return "#f3f4f6";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#831843";
      case "eighties":
        return "#ff00ff";
      default:
        return "#4b5563";
    }
  }};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#4b5563";
        case "purple":
          return "#9333ea";
        case "pink":
          return "#f472b6";
        case "eighties":
          return "#00ffff";
        default:
          return "#e5e7eb";
      }
    }};
    transform: translateY(-2px);
    ${(props) =>
      props.theme === "eighties" &&
      `
      color: #ffff00;
      animation: spin 0.8s infinite linear;
      @keyframes spin {
        from { transform: rotate(0deg) translateY(-2px); }
        to { transform: rotate(360deg) translateY(-2px); }
      }
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${(props) => {
        switch (props.theme) {
          case "dark":
            return "rgba(255, 255, 255, 0.2)";
          case "purple":
            return "rgba(254, 240, 138, 0.5)";
          case "pink":
            return "rgba(249, 168, 212, 0.5)";
          case "eighties":
            return "0 0 15px #ff00ff, 0 0 25px #00ffff";
          default:
            return "rgba(59, 130, 246, 0.5)";
        }
      }};
  }
`;

const CopyButton = styled(ShareButton)<{ copied: boolean; theme: string }>`
  ${(props) =>
    props.copied &&
    css`
      background-color: ${props.theme === "dark"
        ? "#065f46"
        : props.theme === "purple"
        ? "#7e22ce"
        : props.theme === "pink"
        ? "#be185d"
        : props.theme === "eighties"
        ? "#00ff00"
        : "#d1fae5"};
      color: ${props.theme === "dark"
        ? "#ecfdf5"
        : props.theme === "purple"
        ? "#fef08a"
        : props.theme === "pink"
        ? "#fdf2f8"
        : props.theme === "eighties"
        ? "#ff00ff"
        : "#065f46"};
    `}
`;

const CopyMessage = styled.span<{ visible: boolean; theme: string }>`
  font-size: 0.75rem;
  margin-left: 0.5rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#ecfdf5";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#ffff00";
      default:
        return "#065f46";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    props.visible &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1rem;
    animation: blink 0.3s infinite;
    @keyframes blink {
      0% { opacity: 0; }
      49% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 1; }
    }
  `}
`;

export const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <ShareContainer>
      <ShareTitle theme={theme}>Share this post</ShareTitle>
      <ButtonsContainer>
        <ShareButton
          onClick={handleTwitterShare}
          theme={theme}
          aria-label="Share on Twitter"
        >
          <Twitter size={20} />
        </ShareButton>
        <ShareButton
          onClick={handleLinkedInShare}
          theme={theme}
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={20} />
        </ShareButton>
        <CopyButton
          onClick={handleCopyLink}
          copied={copied}
          theme={theme}
          aria-label="Copy link"
        >
          <Copy size={20} />
          <CopyMessage visible={copied} theme={theme}>
            Copied!
          </CopyMessage>
        </CopyButton>
      </ButtonsContainer>
    </ShareContainer>
  );
};
