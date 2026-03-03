// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import reactLibraryConfig from "./packages/eslint-config/react-library.mjs"

export default [...reactLibraryConfig, ...storybook.configs["flat/recommended"]];
