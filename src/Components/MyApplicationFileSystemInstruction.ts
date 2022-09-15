import { join } from "path";
import { fileURLToPath } from "url";
import { ApplicationFileSystemInstruction } from "@manuth/woltlab-compiler";

/**
 * The instruction.
 */
export let MyApplicationFileSystemInstruction = new ApplicationFileSystemInstruction(
    {
        Application: "wcf",
        Source: join(fileURLToPath(new URL(".", import.meta.url)), "..", "..", "assets", "files", "wcf")
    });
