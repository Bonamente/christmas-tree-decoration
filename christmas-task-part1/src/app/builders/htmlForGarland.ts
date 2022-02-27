const buildRow = (color: string, rowNum: number, bulbsPerRow: number): string => {
  const bulb = `<li class="${color}"></li>`;
  return `<ul class="lightrope lightrope--${rowNum}">${bulb.repeat(bulbsPerRow)}</ul>`;
};

const buildHtmlForGarland = (garlandColor: string): string => {
  const bulbsPerRow = [5, 7, 8, 11, 18, 21, 24];
  const rowCount = 7;
  let html = '';

  for (let i = 1; i <= rowCount; i += 1) {
    html += buildRow(garlandColor, i, bulbsPerRow[i - 1]);
  }

  return html;
};

export default buildHtmlForGarland;
