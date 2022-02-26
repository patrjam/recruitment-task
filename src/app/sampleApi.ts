const data = ['Vypadá to že to funguje.', 'Asi to vážně funguje.', 'Nevím jak ty, ale já jsem spokojen.']

export function fetchSample(id: number) {
  return new Promise<string>((resolve, reject) =>
    setTimeout(() => {
      Math.random() < 0.8
        ? resolve(data[id] || 'Já jsem kytka co neví co říct.')
        : reject('I chybky se někdy stanou. Zobrazení této zprávy není chyba, právě naopak.');
    }, 500)
  );
}
