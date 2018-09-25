import { CarbonLDP } from "carbonldp";
import { AccessPoint } from "carbonldp/AccessPoint";

import "./styles.css";

console.log(CarbonLDP.version);

const carbonldp = new CarbonLDP("https://db.itesm-02.carbonldp.com/");
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
    "materiales": {
        "@type": "string",
        "@container": "@set"
    },
    "tags": {
        "@type": "@id",
        "@container": "@set"
    }
});
carbonldp.extendObjectSchema("Tags", {
    "name": {
        "@type": "string"
    },
    "subTags": {
        "@type": "@id",
        "@container": "@set"
    }
});
carbonldp.extendObjectSchema("Empresa",{
    "name": {
        "@type": "string"
    },
    "location": {
        "@type": "string"
    }, 
    "dateCreated": {
        "@type": "date"
    },
    "employees": {
        "@type": "@id",
        "@container": "@set"
    }
});