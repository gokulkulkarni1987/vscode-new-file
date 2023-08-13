import { Uri, window, workspace } from "vscode";

export interface NewFileSettings {
	defaultFilePath: string;
	defaultFileName: string;
	defaultFileExtension: string;
	defaultTestFilePath: string;
	defaultTestFileName: string;
	defaultTestFileExtension: string;
	relativeTo: "file" | "project" | "root";
}
class FileController {
	getDefaultSettings = (): NewFileSettings => {

    const config = workspace.getConfiguration('newLFile', this.getUriOfCurrentFile());
		const newFileSettings: NewFileSettings = {
			defaultFilePath: "",
			defaultFileName: "",
			defaultFileExtension: "",
			defaultTestFilePath: "",
			defaultTestFileName: "",
			defaultTestFileExtension: "",
			relativeTo: "file",
		};
		return newFileSettings;
	};

  private getUriOfCurrentFile(): Uri | undefined {
    const editor = window.activeTextEditor;
    return editor ? editor.document.uri : undefined;
  }
}
