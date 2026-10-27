export async function fetchCountries() {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
}

export function formatPopulation(population: number): string {
  return new Intl.NumberFormat("en-US").format(population);
}
