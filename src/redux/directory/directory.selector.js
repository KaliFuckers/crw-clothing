import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectorSections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
