import { join } from "path";
import { fileURLToPath } from "url";
import { PackageCompiler } from "@manuth/woltlab-compiler";
import { MyPackage } from "./MyPackage.js";

let compiler = new PackageCompiler(MyPackage);

(
    async () =>
    {
        compiler.DestinationPath = join(fileURLToPath(new URL(".", import.meta.url)), "..", `${MyPackage.Identifier}-${MyPackage.Version}.tar`);
        await compiler.Execute();
    })();
