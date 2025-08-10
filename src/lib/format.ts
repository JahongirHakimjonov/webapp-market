export function formatUZS(n: number) {
  try {
    return new Intl.NumberFormat("uz-UZ", { style: "currency", currency: "UZS", maximumFractionDigits: 0 }).format(n)
  } catch {
    return `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UZS`
  }
}