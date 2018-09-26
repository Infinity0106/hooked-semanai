import { CarbonLDP } from "carbonldp";
import { AccessPoint } from "carbonldp/AccessPoint";

import "./styles.css";

console.log(CarbonLDP.version);

const carbonldp = new CarbonLDP("https://db.itesm-03.carbonldp.com/");
carbonldp.extendObjectSchema("Persona", {
    "nombre": {
        "@type": "string"
    },
    "birthDate": {
        "@type": "date"
    },
    "padres": {
        "@type": "@id",
        "@container": "@set"
    },
    "hijos": {
        "@type": "@id",
        "@container": "@set"
    },
    "empresa": {
        "@type": "@id"
    },
    "profesion": {
        "@type": "string"
    },
    "hobby": {
        "@type": "@id",
        "@container": "@set"

    }
});
carbonldp.extendObjectSchema("Hobby", {
    "nombre": {
        "@type": "string"
    },
    "eventos": {
        "@type": "@id",
        "@container": "@set"
    },
    "productos": {
        "@type": "@id",
        "@container": "@set"
    },
    "tags": {
        "@type": "@id",
        "@container": "@set"
    }
});
carbonldp.extendObjectSchema("Tag", {
    "nombre": {
        "@type": "string"
    },
    "subTags": {
        "@type": "@id",
        "@container": "@set"
    }
});
carbonldp.extendObjectSchema("Empresa",{
    "nombre": {
        "@type": "string"
    },
    "location": {
        "@type": "string"
    }, 
    "fechaCreacion": {
        "@type": "date"
    },
    "empleados": {
        "@type": "@id",
        "@container": "@set"
    }
});
carbonldp.extendObjectSchema("Evento", {
    "nombre": {
        "@type": "string"
    },
    "fecha": {
        "@type": "date"
    },
    "productos": {
        "@type": "@id",
        "@container": "@set",
    },
    "administradores": {
        "@type": "@id",
        "@coontainer": "@set"
    },
    "ubicacion": {
        "@type": "string"
    }
});
carbonldp.extendObjectSchema("Producto", {
    "nombre": {
        "@type": "string"
    },
    "precio": {
        "@type": "double"
    },
    "marca": {
        "@type": "string"
    },
    "modelo": {
        "@type": "string"
    }
})