import Commands from "@moonlight-mod/wp/commands_commands";
import { CommandType, InputType, OptionType, StringCommandOption } from "@moonlight-mod/types/coreExtensions/commands";

Commands.registerCommand({
  type: CommandType.CHAT,
  inputType: InputType.BUILT_IN_TEXT,
  id: "vennie",
  description: "Send an image of Vennie ;) (changes per day)",
  options: [],
  execute: (options) => {
	return { content: "https://votd.vennie.moe/image" };
  }
});
