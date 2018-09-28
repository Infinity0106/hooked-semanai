import { CarbonLDP } from "carbonldp";
import faker from "faker";
import productos from "./productos";
import { AccessPoint } from "carbonldp/AccessPoint/AccessPoint";
import { Header } from "carbonldp/HTTP/Header";
import { Event } from "carbonldp/Messaging";
import product from "./Components/Products/product";
import axios from "axios";

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
// productos.forEach((ele, index) => {
//   if (index < 500) {
//     carbonldp.documents.$create("productos/", {
//       types: ["Producto"],
//       nombre: ele.nombre,
//       modelo: ele.modelo,
//       precio: ele.precio,
//       marca: ele.marca,
//       imagen: ele.imagen
//     });
//   }
// });
// carbonldp.documents.$getChildren("productos/").then(elements => {
//   elements.forEach(ele => {
//     ele.$delete();
//   });
// });
// productos
//   .forEach((ele, index) => {
//     if (index < 500) {
//       carbonldp.documents.$create(
//         `tags/`,
//         {
//           types: ["Tag"],
//           nombre: ele.category
//         },
//         ele.category
//       );
//     }
//   })
// let tags = ["outdoors", "sports", "cloths", "drink", "party", "family"];
// tags.forEach(ele => {
//   console.log("🛠🛠🛠🛠🛠");
//   console.log(ele);
//   console.log("🛠🛠🛠🛠🛠");
//   carbonldp.documents.$create(
//     `tags/`,
//     {
//       types: ["Tag"],
//       nombre: ele
//     },
//     ele
//   );
// });
// carbonldp.documents.$getChildren("tags/").then(elements => {
//   elements.forEach(ele => {
//     ele.$delete();
//   });
// });
//Eventos
// for (let index = 0; index < 10; index++) {
//   carbonldp.documents.$createAndRetrieve("eventos/", {
//     types: ["Evento"],
//     nombre: faker.internet.userName(),
//     fecha: faker.date.future(),
//     imagen: faker.image.imageUrl(),
//     ubicacion: `${faker.address.streetAddress()}, ${faker.address.state()}, ${faker.address.country()}`
//   });
// }
// carbonldp.documents.$getChildren("eventos/").then(ele => {
//   ele.forEach(ele2 => {
//     ele2.$delete();
//   });
// });
// carbonldp.documents.$getChildren("eventos/").then(eventos => {
//   eventos.forEach(ele => {
//     ele.$create(
//       AccessPoint.create({
//         hasMemberRelation: "productos",
//         isMemberOfRelation: "eventos"
//       }),
//       "materiales/"
//     );
//   });
// });
// carbonldp.documents.$getChildren("eventos/").then(eventos => {
//   carbonldp.documents.$getChildren("productos/").then(productos => {
//     eventos.forEach((ele, index) => {
//       ele
//         .$addMembers("materiales/", [
//           productos[index % productos.length],
//           productos[(index + 1) % productos.length],
//           productos[(index + 2) % productos.length]
//         ])
//         .then(() => {
//           console.log("🛠🛠🛠🛠🛠");
//           console.log("added");
//           console.log("🛠🛠🛠🛠🛠");
//         });
//     });
//   });
// });

// carbonldp.documents.$getChildren("productos/").then(elements => {
//   carbonldp.documents.$getChildren("tags/").then(tags => {
//     elements.forEach((ele, index) => {
//       ele
//         .$addMembers("tags/", [
//           tags[index % tags.length],
//           tags[(index + 3) % tags.length],
//           tags[(index + 4) % tags.length]
//         ])
//         .then(() => {
//           console.log("🛠🛠🛠🛠🛠");
//           console.log("added");
//           console.log("🛠🛠🛠🛠🛠");
//         });
//     });
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
    "@type": "dateTime"
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
  },
  imagen: {
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
    "@type": "string"
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

export function getAllProducts(page) {
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

export function getAllEvents(page) {
  return carbonldp.documents.$getChildren("eventos/", builder => {
    return builder
      .withType("Evento")
      .properties({
        nombre: builder.inherit,
        fecha: builder.inherit,
        productos: builder.inherit,
        administradores: builder.inherit,
        materiales: builder.inherit,
        ubicacion: builder.inherit
      })
      .limit(6)
      .offset((page - 1) * 6);
  });
}

export function getAllProductPages() {
  return carbonldp.documents
    .$getChildren("productos/")
    .then(productos => Promise.resolve(Math.ceil(productos.length / 9)));
}

export function getAllEventos(page) {
  return carbonldp.documents.$getChildren("eventos/", builder => {
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

export function getAllEventoPages() {
  return carbonldp.documents
    .$getChildren("eventos/")
    .then(evento => Promise.resolve(Math.ceil(evento.length / 9)));
}

export function getTopTags() {
  return carbonldp.documents.$executeSELECTQuery(
    `
    PREFIX local: <https://db.itesm-03.carbonldp.com/vocabularies/main/#>

    SELECT ?tagName (COUNT(?tagProducts) as ?countedProducts)
   
   WHERE {
     ?tag a local:Tag.
     ?tag local:nombre ?tagName.
     FILTER(?tagName != "").
     
     ?tag local:productos ?tagProducts.
   }
   
   GROUP BY ?tagName
   ORDER BY DESC(?countedProducts)
   LIMIT 5
  `
  );
}

export function getLandingProducts(tag_name) {
  return carbonldp.documents.$getChildren("productos/", builder => {
    if (tag_name) {
      return builder
        .withType("Producto")
        .properties({
          nombre: builder.inherit,
          modelo: builder.inherit,
          precio: builder.inherit,
          marca: builder.inherit,
          imagen: builder.inherit,
          tags: {
            query: function(builderTags) {
              return builderTags.properties({
                nombre: {
                  query: function(builderName) {
                    return builderName.values(builderName.value(tag_name));
                  }
                }
              });
            }
          }
        })
        .filter(`${builder.property("nombre")} != ""`)
        .limit(6);
    } else {
      return builder
        .withType("Producto")
        .properties({
          nombre: builder.inherit,
          modelo: builder.inherit,
          precio: builder.inherit,
          marca: builder.inherit,
          imagen: builder.inherit,
          tags: builder.inherit
        })
        .limit(6);
    }
  });
}

export function getRecomendedEvents(data) {
  return carbonldp.documents.$executeSELECTQuery(`
  PREFIX local: <https://db.itesm-03.carbonldp.com/vocabularies/main/#>

  SELECT ?tagName (COUNT(?tagProducts) as ?countedProducts)
 
 WHERE {
   ?tag a local:Tag.
   ?tag local:nombre ?tagName.
   FILTER(?tagName != "").
   
   ?tag local:productos ?tagProducts.
 }
 
 GROUP BY ?tagName
 ORDER BY DESC(?countedProducts)
 LIMIT 5
  `);
}

export function getOneEvent(id) {
  return carbonldp.documents.$get(`eventos/${id}/`).then(evento => {
    return Promise.all(
      evento.productos.map(producto => {
        producto.$resolve();
      })
    ).then(() => {
      return Promise.resolve(evento);
    });
  });
}

export function addProductToEvent(id) {
  return carbonldp.documents.$get(`eventos/${id}/`).then(evento => {
    carbonldp.documents.$getChildren("productos/").then(productos => {
      let randProd =
        productos[Math.floor(Math.random() * productos.length + 0)];
      evento.$addMember("materiales/", randProd);
    });
  });
}

export function eventDetail(id, callback) {
  carbonldp.documents.$on(
    Event.MEMBER_ADDED,
    `eventos/${id}/*`,
    message => callback(message, null),
    error => callback(null, error)
  );
}

export function getBeerOfTheDay() {
  return axios.get("https://api.punkapi.com/v2/beers/random");
}

export function getExchangeRate() {
  return axios.get(
    "https://api.exchangeratesapi.io/latest?symbols=USD&base=MXN"
  );
}
