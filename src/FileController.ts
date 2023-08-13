import { Uri, window, workspace } from "vscode";
import { FILE_SETTINGS_KEYS } from "./Constants";

export interface NewFileSettings {
	defaultFilePath: string;
	defaultFileName: string;
	defaultFileExtension: string;
	defaultTestFilePath: string;
	defaultTestFileName: string;
	defaultTestFileExtension: string;
	relativeTo: "file" | "project" | "root";
}
export class FileController {
	getDefaultSettings = (): NewFileSettings => {
    const currentUri = this.getUriOfCurrentFile();
    const config = workspace.getConfiguration('newLFile', currentUri);
    let fileName = 'newFile';
		const newFileSettings: NewFileSettings = {
			defaultFilePath: config.get(FILE_SETTINGS_KEYS.defaultFilePath, "./"),
			defaultFileName: config.get(FILE_SETTINGS_KEYS.defaultFileName, fileName),
			defaultFileExtension: config.get(FILE_SETTINGS_KEYS.defaultFileExt, ".ts"),
			defaultTestFilePath: config.get(FILE_SETTINGS_KEYS.defaultTestFilePath, "./"),
			defaultTestFileName: config.get(FILE_SETTINGS_KEYS.defaultFileName, fileName + ".test"),
			defaultTestFileExtension: config.get(FILE_SETTINGS_KEYS.defaultFileName, ".ts"),
			relativeTo: config.get(FILE_SETTINGS_KEYS.relativeTo, "file"),
		};
		return newFileSettings;
	};

  private getUriOfCurrentFile(): Uri | undefined {
    const editor = window.activeTextEditor;
    return editor ? editor.document.uri : undefined;
  }
}
