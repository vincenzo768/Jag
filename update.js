const fs = require("fs");

const content = `#EXTM3U
# Updated at ${new Date().toISOString()}
`;

fs.writeFileSync("hip.m3u", content);

console.log("hip.m3u updated successfully");
