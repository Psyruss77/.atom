import Immutable from "immutable";

import {
  makeDisplayData,
  makeErrorOutput,
  makeExecuteResult,
  makeStreamOutput
} from "../src/outputs";
import { createCodeCell, createMarkdownCell } from "../src/structures";
import { cellToJS, outputToJS } from "../src/v4";

describe("cellToJS", () => {
  it("throws an error for unkown cell types", () => {
    const cell = Immutable.Map({
      cell_type: "not_real"
    });
    const invocation = () => cellToJS(cell);
    expect(invocation).toThrowError("Cell type unknown at runtime");
  });
  it("process known cell types", () => {
    const codeCell = createCodeCell();
    const markdownCell = createMarkdownCell();
    expect(cellToJS(codeCell).cell_type).toBe("code");
    expect(cellToJS(markdownCell).cell_type).toBe("markdown");
  });
});

describe("outputToJS", () => {
  it("can process all output types", () => {
    const executeResultOutput = makeExecuteResult();
    const displayDataOutput = makeDisplayData();
    const streamOutput = makeStreamOutput();
    const errorOutput = makeErrorOutput();

    expect(outputToJS(executeResultOutput).output_type).toEqual(
      "execute_result"
    );
    expect(outputToJS(displayDataOutput).output_type).toEqual("display_data");
    expect(outputToJS(streamOutput).output_type).toEqual("stream");
    expect(outputToJS(errorOutput).output_type).toEqual("error");
  });
});
