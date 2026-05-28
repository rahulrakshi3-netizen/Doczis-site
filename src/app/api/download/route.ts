import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  const apkPath = join(process.cwd(), "public", "Doczis.apk");
  const apkBuffer = await readFile(apkPath);

  return new NextResponse(apkBuffer, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="Doczis.apk"',
    },
  });
}
