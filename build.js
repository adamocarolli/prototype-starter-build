import esbuildServe from "esbuild-serve";
import sassEs from "essass";
import yargs from 'yargs';
import copy from 'copy';

async function main(options) {
  try {
    await esbuildServe(
      {
        entryPoints: ["src/index.ts", "src/about.ts"],
        bundle: true,
        outdir: "dist",
        logLevel: "info",
        sourcemap: true,
        minify: true,
        // TODO: Enable code splitting
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
    );

    if (options.pages) {
      copy('dist/**/*', 'pages/', (err) => {
        if (err) console.error(err); // TODO: Handle errors
      });
    }
  } catch (err) {
    process.exit(1);
  }
}

main(yargs(process.argv).argv);
