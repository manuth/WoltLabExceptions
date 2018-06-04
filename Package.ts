import * as Path from "path";
import Package from "./lib/PackageSystem/Package";
import RequiredPackageDescriptor from "./lib/PackageSystem/RequiredPackageDescriptor";
import StyleInstructionCollection from "./lib/Customization/Styles/StyleInstructionCollection";
import UpdateInstructionCollection from "./lib/Automation/UpdateInstructionCollection";

function getComponentsPath(value: string): string
{
    return Path.join(__dirname, "components", value);
}

let pkg: Package = new Package({
    Identifier: "ch.nuth.exceptions",
    Name: "Exceptions",
    DisplayName: {
        inv: "Exceptions"
    },
    Date: new Date("2018/05/31"),
    Description: {
        inv: "Provides a set of exceptions which can be used when providing PHP-code for WoltLab.",
        de: "Stellt Exception-Klassen zur Verfügung, welche beim Schreiben von eigenem PHP-Code für WoltLab verwendet werden können."
    },
    InstallInstructions: [
        require(getComponentsPath("Files"))
    ],
    UpdateInstructions: [
        {
            FromVersion: "0.0.1",
            Instructions: [
                require(getComponentsPath("Files"))
            ]
        },
        {
            FromVersion: "0.0.2",
            Instructions: [
                require(getComponentsPath("Files"))
            ]
        }
    ],
    RequiredPackages: [
        new RequiredPackageDescriptor({
            Identifier: "com.woltlab.wcf",
            MinVersion: "3.0.0"
        })
    ]
});

export = pkg;