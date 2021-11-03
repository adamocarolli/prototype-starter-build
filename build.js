import esbuildServe from "esbuild-serve";
import sassEs from "essass";
import yargs from 'yargs';

async function main(options) {
  esbuildServe(
    {
      entryPoints: ["src/index.ts", "src/about.ts"],
      bundle: true,
      outdir: "dist",
      logLevel: "info",
      sourcemap: true,
      minify: true,
      // splitting: true,
      // format: "esm",
      plugins: [sassEs],
      loader: {
        ".png": "file",
        ".html": "text",
      },
    },
    {
      root: "dist",
    }
  ).catch(() => process.exit(1));
}

main(yargs(process.argv).argv);
