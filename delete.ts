import { unlink } from "fs";

unlink("delete.ts", (e) => {
  if (e) throw e;
})