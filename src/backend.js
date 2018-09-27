import { CarbonLDP } from "carbonldp";
import faker from "faker";
import productos from "./productos";

const carbonldp = new CarbonLDP("https://db.itesm-03.carbonldp.com/");
//seeds
// console.log("🛠🛠🛠🛠🛠");
// console.log("faker");
// console.log(faker);
// console.log("🛠🛠🛠🛠🛠");
// for (let index = 0; index < 10; index++) {
//   carbonldp.documents.$createAndRetrieve("persona/", {
//     types: ["Persona"],
//     nombre: faker.internet.userName(),
//     birthDate: faker.date.past(),
//     // padres: {
//     //   "@type": "@id",
//     //   "@container": "@set"
//     // },
//     // hijos: {
//     //   "@type": "@id",
//     //   "@container": "@set"
//     // },
//     // empresa: {
//     //   "@type": "@id"
//     // },
//     // profesion: {
//     //   "@type": "string"
//     // },
//     // hobby: {
//     //   "@type": "@id",
//     //   "@container": "@set"
//     // },
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   });
// }
// for (let index = 0; index < 10; index++) {
//   carbonldp.documents.$createAndRetrieve("hobby/", {
//     types: ["Hobby"],
//     nombre: faker.internet.userName()
//   });
// }
// for (let index = 0; index < 10; index++) {
//   carbonldp.documents.$createAndRetrieve("empresa/", {
//     types: ["Empresa"],
//     nombre: faker.internet.userName(),
//     location: `${faker.address.streetAddress()}, ${faker.address.state()}, ${faker.address.country()}`,
//     fechaCreacion: faker.date.past()
//   });
// }
// console.log("🛠🛠🛠🛠🛠");
// console.log(productos);
// console.log("🛠🛠🛠🛠🛠");
// productos.forEach(ele => {
//   carbonldp.documents.$create("productos/", {
//     type: ["Producto"],
//     nombre: ele.nombre,
//     modelo: ele.modelo,
//     precio: ele.precio,
//     marca: ele.marca,
//     imagen: ele.imagen
//   });
// });

carbonldp.extendObjectSchema("Persona", {
  nombre: {
    "@type": "string"
  },
  birthDate: {
    "@type": "date"
  },
  padres: {
    "@type": "@id",
    "@container": "@set"
  },
  hijos: {
    "@type": "@id",
    "@container": "@set"
  },
  empresa: {
    "@type": "@id"
  },
  profesion: {
    "@type": "string"
  },
  hobby: {
    "@type": "@id",
    "@container": "@set"
  },
  email: {
    "@type": "string"
  },
  password: {
    "@type": "string"
  }
});

carbonldp.extendObjectSchema("Hobby", {
  nombre: {
    "@type": "string"
  },
  eventos: {
    "@type": "@id",
    "@container": "@set"
  },
  productos: {
    "@type": "@id",
    "@container": "@set"
  },
  personas: {
    "@type": "@id",
    "@container": "@set"
  },
  tags: {
    "@type": "@id",
    "@container": "@set"
  }
});

carbonldp.extendObjectSchema("Tag", {
  nombre: {
    "@type": "string"
  },
  subTags: {
    "@type": "@id",
    "@container": "@set"
  }
});

carbonldp.extendObjectSchema("Empresa", {
  nombre: {
    "@type": "string"
  },
  location: {
    "@type": "string"
  },
  fechaCreacion: {
    "@type": "date"
  },
  empleados: {
    "@type": "@id",
    "@container": "@set"
  }
});

carbonldp.extendObjectSchema("Evento", {
  nombre: {
    "@type": "string"
  },
  fecha: {
    "@type": "date"
  },
  productos: {
    "@type": "@id",
    "@container": "@set"
  },
  administradores: {
    "@type": "@id",
    "@coontainer": "@set"
  },
  ubicacion: {
    "@type": "string"
  }
});

carbonldp.extendObjectSchema("Producto", {
  nombre: {
    "@type": "string"
  },
  modelo: {
    "@type": "string"
  },
  precio: {
    "@type": "double"
  },
  marca: {
    "@type": "string"
  },
  imagen: {
    "@type": "string"
  }
});

export function signup({ email, password, nombre }) {
  return carbonldp.documents.$createAndRetrieve("persona/", {
    types: ["Persona"],
    email,
    password,
    nombre
  });
}

export function login({ email, password }) {
  return carbonldp.documents
    .$getChildren("persona/", builder => {
      return builder
        .withType("Persona")
        .properties({
          nombre: builder.inherit,
          birthDate: builder.inherit,
          padres: builder.inherit,
          hijos: builder.inherit,
          empresa: builder.inherit,
          profesion: builder.inherit,
          hobby: builder.inherit,
          email: {
            query: builderEmail => {
              return builderEmail.values(builderEmail.value(email));
            }
          },
          password: {
            query: builderPassword => {
              return builderPassword.values(builderPassword.value(password));
            }
          }
        })
        .limit(1);
    })
    .then(doc => {
      if (!doc) return Promise.reject("Usuario no encontrado");
      return doc[0];
    });
}

export function addHobby({}) {
  // return carbonldp.documents.$createAndRetrieve("hobby/", {
  //   types: ["Hobby"],
  //   fecha,
  //   nombre
  // });
}
export function addEvent({}) {
  // return carbonldp.documents.$createAndRetrieve("evento/", {
  //   types: ["Evento"],
  //   fecha,
  //   nombre,
  //   productos,
  //   administradores,
  //   ubicacion
  // });
}

export function getAllCompanies() {
  return carbonldp.documents.$getChildren("empresa/");
}

export function getAllPersonas() {
  return carbonldp.documents.$getChildren("persona/");
}

export function getAllProducts({ page }) {
  return carbonldp.documents.$getChildren("productos/", builder => {
    return builder
      .withType("Producto")
      .properties({
        nombre: builder.inherit,
        modelo: builder.inherit,
        precio: builder.inherit,
        marca: builder.inherit,
        imagen: builder.inherit
      })
      .limit(9)
      .offset((page - 1) * 9);
  });
}

export function getAllEvents({ page }) {
  return carbonldp.documents.$getChildren("eventos/", builder => {
    return builder
      .withType("Evento")
      .properties({
        nombre: builder.inherit,
        fecha: builder.inherit,
        productos: builder.inherit,
        administradores: builder.inherit,
        ubicacion: builder.inherit,
      })
      .limit(6)
      .offset((page -1) *6);
  })
}

export function getAllProductPages() {
  return carbonldp.documents
    .$getChildren("productos/")
    .then(productos => Promise.resolve(Math.ceil(productos.length / 9)));
}

export function getAllEventPages() {
  return carbonldp.documents
    .$getChildren("eventos/")
    .then(eventos => Promise.resolve(Math.ceil(eventos.length / 6)));
}