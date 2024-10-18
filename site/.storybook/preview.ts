import type { Preview } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__BASE_PATH__ = "/";

(window as any).___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

export default preview;
