import type { Preview } from "@storybook/react";
import { withRouter, withThemeProvider } from "./decorators";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      description: {
        component: `
### Routing support
You can add routing to your stories by using the deeplink parameter:

\`\`\`js
MyStory.parameters = {
  deeplink: {
    path: '/post/:id',     // The route pattern
    route: '/post/1',      // The actual route to navigate to
  }
};
\`\`\`

### Theme support
The application supports five themes:
- Light (default) - Standard light mode
- Dark - Dark mode with better contrast
- Purple - Theme with intentionally poor contrast for testing accessibility
- Pink - Pink theme with light text
- 80's - Retro theme with neon colors and severe accessibility issues
`,
      },
    },
  },
  decorators: [withThemeProvider, withRouter],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Theme for the components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "light" },
          { value: "dark", icon: "moon", title: "dark" },
          { value: "purple", icon: "lightning", title: "purple" },
          { value: "pink", icon: "heart", title: "pink" },
          { value: "eighties", icon: "star", title: "80's" },
        ],
      },
    },
  },
};

export default preview;
