export default (fonts) => {
  const fontFaceDeclarations = fonts
    .map((font) => {
      return `
        @font-face {
          font-family: "${font.name}";
          src:
            local("${font.name}"),
            url("./fonts/${font.fileName}") format("${font.format}");
          font-weight:${font.weight};
          font-style:${font.style};
        }
      `;
    })
    .join('\n');
  const cssVars = fonts
    .map((font) => {
      return `${font.cssVar}:"${font.name}";`;
    })
    .join('\n');
  const rootDeclaration = `
    :root {
      ${cssVars}
    }
  `
  return `
    ${fontFaceDeclarations}
    ${rootDeclaration}
  `
}