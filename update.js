import fs from "fs";

const SOURCE =
  "https://raw.githubusercontent.com/amit-654584/jtv/main/jtv.m3u";

async function run() {
  const res = await fetch(SOURCE);
  const text = await res.text();

  const lines = text.split("\n");

  let out = ["#EXTM3U\n"];
  let capture = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('group-title="SONYLIV"')) {
      capture = true;
    }

    if (capture) {
      out.push(line);
      if (line.trim().endsWith(".m3u8")) {
        out.push("");
        capture = false;
      }
    }
  }

  fs.writeFileSync("sony.m3u", out.join("\n"));
}

run();
