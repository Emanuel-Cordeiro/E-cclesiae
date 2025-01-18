export const prayersCategoriesAndTitles: {
  [key in 'Adoração' | 'Orações Marianas' | 'Orações' | 'Igreja']: string[];
} = {
  Adoração: [
    'Eu Vos Adoro',
    'Canta, ó Lingua',
    'Tão Sublime Sacramento',
    'Ato de Adoração',
  ],
  'Orações Marianas': [
    'Ave Maria',
    'Salve Rainha',
    'Angelus',
    'Terço',
    'Rosário - Método de São Luís Montfort',
  ],
  Orações: [
    'Sinal da Cruz',
    'Glória',
    'Pai Nosso',
    'Santo Anjo',
    'Vinde Espírito Santo',
    'Creio',
    'São Miguel Arcanjo',
    'Ato de Contrição',
    'Oração de São Bento',
  ],
  Igreja: [
    'Os Dez Mandamentos',
    'Cinco Mandamentos da Igreja',
    'Sete sacramentos',
    'Sete dons do Espírito Santo',
    'Doze frutos do Espírito Santo',
    'Sete pecados capitais',
    'Virtudes teologais',
    'Virtudes cadeais',
    'Obras de misericórdia corporal',
    'Obras de misericórdia espiritual',
  ],
};
