import { CarbonLDP } from "carbonldp";
import { AccessPoint } from "carbonldp/AccessPoint";

const carbonldp = new CarbonLDP("https://db.itesm-03.carbonldp.com/");
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
  precio: {
    "@type": "double"
  },
  marca: {
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
