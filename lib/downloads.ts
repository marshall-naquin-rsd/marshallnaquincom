import fs from "fs";
import path from "path";

const DOWNLOADS_DIR = path.join(process.cwd(), "public/downloads");

export function getDownloadFiles(): string[] {
  if (!fs.existsSync(DOWNLOADS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(DOWNLOADS_DIR)
    .filter((file) => !file.startsWith("."))
    .sort((a, b) => a.localeCompare(b));
}

export function getDownloadUrl(filename: string): string {
  return `/downloads/${encodeURIComponent(filename)}`;
}

export function getDisplayName(filename: string): string {
  return filename.replace(/\.[^/.]+$/, "");
}
