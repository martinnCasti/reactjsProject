const products = [
  {
    id: 1,
    made: "Mercedes-Benz",
    model: "G-Class",
    stock: 1,
    price: 207069,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 2,
    made: "Mercedes-Benz",
    model: "GL-Class",
    stock: 1,
    price: 284733,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 3,
    made: "Mazda",
    model: "Mazda2",
    stock: 1,
    price: 690147,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 4,
    made: "Honda",
    model: "Pilot",
    stock: 2,
    price: 691793,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 5,
    made: "Dodge",
    model: "Shadow",
    stock: 5,
    price: 498390,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 6,
    made: "Acura",
    model: "MDX",
    stock: 1,
    price: 386776,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 7,
    made: "Nissan",
    model: "Sentra",
    stock: 3,
    price: 49411,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 8,
    made: "Hummer",
    model: "H2",
    stock: 5,
    price: 695479,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 9,
    made: "Toyota",
    model: "Tercel",
    stock: 1,
    price: 199763,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 10,
    made: "Dodge",
    model: "Monaco",
    stock: 4,
    price: 319172,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 11,
    made: "Bentley",
    model: "Continental Flying Spur",
    stock: 1,
    price: 258393,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 12,
    made: "Honda",
    model: "Element",
    stock: 5,
    price: 232682,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 13,
    made: "Volkswagen",
    model: "New Beetle",
    stock: 5,
    price: 776892,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 14,
    made: "Mercury",
    model: "Villager",
    stock: 5,
    price: 132702,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 15,
    made: "Chevrolet",
    model: "Suburban 1500",
    stock: 3,
    price: 147319,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 16,
    made: "GMC",
    model: "Savana 1500",
    stock: 4,
    price: 282568,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 17,
    made: "Mitsubishi",
    model: "Mirage",
    stock: 5,
    price: 450057,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 18,
    made: "Toyota",
    model: "Celica",
    stock: 4,
    price: 424421,
    category: "Used",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 19,
    made: "Chevrolet",
    model: "Malibu",
    stock: 4,
    price: 154478,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
  {
    id: 20,
    made: "Maserati",
    model: "Karif",
    stock: 4,
    price: 231411,
    category: "New",
    imgurl: "https://www.km77.com/images/medium/1/5/4/9/002.301549.jpg",
    description:
      "Un auto muy particular, excelente para el dia a dia, con algunos detalles en el exterior pero 100% funcional.",
  },
];

export default products;
