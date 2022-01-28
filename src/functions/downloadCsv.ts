export default async (weatherArray: string[][]) => {
  const csvContent = `data:text/csv;charset=utf-8,${weatherArray.map((e) => e.join(',')).join('\n')}`;
  const encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
};
