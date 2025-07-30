import { ExtensionWebExports } from "@moonlight-mod/types";

export const webpackModules: ExtensionWebExports["webpackModules"] = {
  entrypoint: {
    dependencies: [{ ext: "commands", id: "commands" }],
    entrypoint: true
  }
};
