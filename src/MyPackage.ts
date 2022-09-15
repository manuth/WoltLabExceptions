import { ConflictingPackageDescriptor, InvariantCultureName, Package, RequiredPackageDescriptor } from "@manuth/woltlab-compiler";
import { MyApplicationFileSystemInstruction } from "./Components/MyApplicationFileSystemInstruction.js";

/**
 * The package.
 */
export let MyPackage = new Package(
    {
        Identifier: "ch.nuth.exceptions",
        DisplayName: {
            [InvariantCultureName]: "Exceptions"
        },
        Version: "0.0.2",
        Author: {
            Name: "Manuel Thalmann",
            URL: "https://nuth.ch"
        },
        License: null,
        CreationDate: new Date("2018-05-31"),
        Description: {
            [InvariantCultureName]: "Provides a set of exceptions which can be used when providing PHP-code for WoltLab.",
            de: "Stellt Exception-Klassen zur Verfügung, welche beim Schreiben von eigenem PHP-Code für WoltLab verwendet werden können."
        },
        InstallSet: {
            Instructions: [
                MyApplicationFileSystemInstruction
            ]
        },
        RequiredPackages: [
            new RequiredPackageDescriptor(
                {
                    Identifier: "com.woltlab.wcf",
                    MinVersion: "3.0.0"
                })
        ],
        ConflictingPackages: [
            new ConflictingPackageDescriptor(
                {
                    Identifier: "com.woltlab.wcf",
                    Version: "6.0.0 Alpha 1"
                })
        ]
    });
