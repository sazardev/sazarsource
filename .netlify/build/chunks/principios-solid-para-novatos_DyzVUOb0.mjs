import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro/server_DNwvyA0O.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_1m1W4OeF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Principios SOLID",
  "description": "Principios SOLID",
  "pubDate": "10 Sep 2024"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "s-principio-de-responsabilidad-\xFAnica-srp",
    "text": "[S] Principio de responsabilidad \xFAnica (SRP)"
  }, {
    "depth": 3,
    "slug": "caso-de-aplicaci\xF3n",
    "text": "Caso de aplicaci\xF3n"
  }, {
    "depth": 4,
    "slug": "ejemplo",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "cuando-aplicar-el-principio-de-responsabilidad-\xFAnica",
    "text": "Cuando aplicar el principio de responsabilidad \xFAnica"
  }, {
    "depth": 2,
    "slug": "o-principio-de-abiertocerrado-ocp",
    "text": "[O] Principio de abierto/cerrado (OCP)"
  }, {
    "depth": 3,
    "slug": "caso-de-aplicaci\xF3n-1",
    "text": "Caso de aplicaci\xF3n"
  }, {
    "depth": 4,
    "slug": "ejemplo-1",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "cuando-aplicar-el-principio-de-abiertocerrado",
    "text": "Cuando aplicar el principio de abierto/cerrado"
  }, {
    "depth": 2,
    "slug": "l-principio-de-sustituci\xF3n-de-liskov-lsp",
    "text": "[L] Principio de sustituci\xF3n de Liskov (LSP)"
  }, {
    "depth": 3,
    "slug": "caso-de-aplicaci\xF3n-2",
    "text": "Caso de aplicaci\xF3n"
  }, {
    "depth": 4,
    "slug": "ejemplo-2",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "cuando-aplicar-el-principio-de-sustituci\xF3n-de-liskov",
    "text": "Cuando aplicar el principio de sustituci\xF3n de Liskov"
  }, {
    "depth": 2,
    "slug": "i-principio-de-segregaci\xF3n-de-interfaces-isp",
    "text": "[I] Principio de segregaci\xF3n de interfaces (ISP)"
  }, {
    "depth": 3,
    "slug": "caso-de-aplicaci\xF3n-3",
    "text": "Caso de aplicaci\xF3n"
  }, {
    "depth": 4,
    "slug": "ejemplo-3",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "cuando-aplicar-el-principio-de-segregaci\xF3n-de-interfaces",
    "text": "Cuando aplicar el principio de segregaci\xF3n de interfaces"
  }, {
    "depth": 2,
    "slug": "d-principio-de-inversi\xF3n-de-dependencia-dip",
    "text": "[D] Principio de inversi\xF3n de dependencia (DIP)"
  }, {
    "depth": 3,
    "slug": "caso-de-aplicaci\xF3n-4",
    "text": "Caso de aplicaci\xF3n"
  }, {
    "depth": 4,
    "slug": "ejemplo-4",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "cuando-aplicar-el-principio-de-inversi\xF3n-de-dependencia",
    "text": "Cuando aplicar el principio de inversi\xF3n de dependencia"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Los principios SOLID son un conjunto de cinco principios de dise\xF1o de software que se utilizan para crear sistemas de software de alta calidad. Estos principios fueron introducidos por Robert C. Martin en la d\xE9cada de 1990 y se han convertido en una gu\xEDa fundamental para los desarrolladores de software en todo el mundo."
    }), "\n", createVNode(_components.p, {
      children: "Y aunque son importantes los principios SOLID, sigalos como consejos y sugerencias y apliquelos bajo un contexto en el que aplique el caso de uso. Aplique el sentido com\xFAn y no los siga ciegamente. Plantee si realmente necesita seguir estos principios en su c\xF3digo o si puede hacer una excepci\xF3n. No se atenga a ellos si no son \xFAtiles en su caso de uso."
    }), "\n", createVNode(_components.h2, {
      id: "s-principio-de-responsabilidad-\xFAnica-srp",
      children: "[S] Principio de responsabilidad \xFAnica (SRP)"
    }), "\n", createVNode(_components.p, {
      children: "El principio de responsabilidad \xFAnica establece que una clase debe tener una sola raz\xF3n para cambiar. En otras palabras, una clase debe tener una sola responsabilidad y no debe tener m\xE1s de una raz\xF3n para cambiar. Esto significa que una clase debe hacer una sola cosa y hacerla bien."
    }), "\n", createVNode(_components.h3, {
      id: "caso-de-aplicaci\xF3n",
      children: "Caso de aplicaci\xF3n"
    }), "\n", createVNode(_components.p, {
      children: ["Supongamos que tenemos una clase ", createVNode(_components.code, {
        children: "User"
      }), " que se encarga de manejar la l\xF3gica de un usuario en nuestra aplicaci\xF3n. Esta clase deber\xEDa tener una sola responsabilidad, como manejar la autenticaci\xF3n de un usuario o manejar la creaci\xF3n de un usuario. Si la clase ", createVNode(_components.code, {
        children: "User"
      }), " tiene m\xE1s de una responsabilidad, como manejar la autenticaci\xF3n y la creaci\xF3n de un usuario, entonces viola el principio de responsabilidad \xFAnica."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " String username;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " String password;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " authenticate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "password"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Autenticar al usuario"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " createUser"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "password"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Crear un nuevo usuario"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En el ejemplo anterior, la clase ", createVNode(_components.code, {
        children: "User"
      }), " tiene dos responsabilidades: autenticar al usuario y crear un nuevo usuario. Para cumplir con el principio de responsabilidad \xFAnica, deber\xEDamos dividir estas responsabilidades en dos clases separadas, como ", createVNode(_components.code, {
        children: "AuthenticationService"
      }), " y ", createVNode(_components.code, {
        children: "UserService"
      }), "."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AuthenticationService"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " authenticate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "password"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Autenticar al usuario"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserService"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " createUser"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "username"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", String "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "password"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Crear un nuevo usuario"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "cuando-aplicar-el-principio-de-responsabilidad-\xFAnica",
      children: "Cuando aplicar el principio de responsabilidad \xFAnica"
    }), "\n", createVNode(_components.p, {
      children: "Entendiendo que el principio de responsabilidad \xFAnica es subjetivo y puede variar seg\xFAn el contexto de la aplicaci\xF3n. Por lo tanto, es importante aplicar el sentido com\xFAn y no seguir ciegamente este principio. Si una clase tiene m\xE1s de una responsabilidad, pero es m\xE1s f\xE1cil de mantener y entender, entonces no hay necesidad de dividir la clase en dos. En \xFAltima instancia, el objetivo es escribir un c\xF3digo limpio y mantenible, no seguir ciegamente los principios SOLID. Aplique este principio solo si es demasiado obvio que la clase tiene m\xE1s de una responsabilidad y necesita ser dividida."
    }), "\n", createVNode(_components.h2, {
      id: "o-principio-de-abiertocerrado-ocp",
      children: "[O] Principio de abierto/cerrado (OCP)"
    }), "\n", createVNode(_components.p, {
      children: "El principio de abierto/cerrado establece que una clase debe estar abierta para la extensi\xF3n pero cerrada para la modificaci\xF3n. En otras palabras, una clase debe poder ser extendida para agregar nuevas funcionalidades sin modificar su c\xF3digo fuente."
    }), "\n", createVNode(_components.h3, {
      id: "caso-de-aplicaci\xF3n-1",
      children: "Caso de aplicaci\xF3n"
    }), "\n", createVNode(_components.p, {
      children: ["Supongamos que tenemos una clase ", createVNode(_components.code, {
        children: "Shape"
      }), " que representa una forma geom\xE9trica en nuestra aplicaci\xF3n. Esta clase tiene un m\xE9todo ", createVNode(_components.code, {
        children: "draw"
      }), " que dibuja la forma en la pantalla. Si queremos agregar una nueva forma geom\xE9trica, como un c\xEDrculo, deber\xEDamos poder hacerlo sin modificar la clase ", createVNode(_components.code, {
        children: "Shape"
      }), "."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo-1",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " abstract"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Shape"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " abstract"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " draw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Rectangle"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Shape"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Override"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " draw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Dibujar un rect\xE1ngulo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Circle"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Shape"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Override"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " draw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Dibujar un c\xEDrculo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En el ejemplo anterior, la clase ", createVNode(_components.code, {
        children: "Shape"
      }), " est\xE1 abierta para la extensi\xF3n pero cerrada para la modificaci\xF3n. Podemos agregar nuevas formas geom\xE9tricas, como un c\xEDrculo, sin modificar la clase ", createVNode(_components.code, {
        children: "Shape"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "cuando-aplicar-el-principio-de-abiertocerrado",
      children: "Cuando aplicar el principio de abierto/cerrado"
    }), "\n", createVNode(_components.p, {
      children: "El principio de abierto/cerrado es \xFAtil cuando se espera que una clase cambie con el tiempo y se necesite extender su funcionalidad. Sin embargo, si una clase no se espera que cambie con el tiempo y no se necesite extender su funcionalidad, entonces no hay necesidad de aplicar este principio. Aplique este principio solo si es probable que la clase cambie con el tiempo y necesite ser extendida."
    }), "\n", createVNode(_components.h2, {
      id: "l-principio-de-sustituci\xF3n-de-liskov-lsp",
      children: "[L] Principio de sustituci\xF3n de Liskov (LSP)"
    }), "\n", createVNode(_components.p, {
      children: "El principio de sustituci\xF3n de Liskov establece que los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin afectar el comportamiento del programa. En otras palabras, una clase derivada debe ser capaz de reemplazar a su clase base sin cambiar el comportamiento del programa."
    }), "\n", createVNode(_components.h3, {
      id: "caso-de-aplicaci\xF3n-2",
      children: "Caso de aplicaci\xF3n"
    }), "\n", createVNode(_components.p, {
      children: ["Supongamos que tenemos una clase ", createVNode(_components.code, {
        children: "Rectangle"
      }), " que representa un rect\xE1ngulo en nuestra aplicaci\xF3n. Esta clase tiene un m\xE9todo ", createVNode(_components.code, {
        children: "area"
      }), " que calcula el \xE1rea del rect\xE1ngulo. Si creamos una clase ", createVNode(_components.code, {
        children: "Square"
      }), " que hereda de la clase ", createVNode(_components.code, {
        children: "Rectangle"
      }), ", deber\xEDamos poder sustituir un objeto de la clase ", createVNode(_components.code, {
        children: "Square"
      }), " por un objeto de la clase ", createVNode(_components.code, {
        children: "Rectangle"
      }), " sin cambiar el comportamiento del programa."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo-2",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Rectangle"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " width;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " height;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " area"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " height;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Square"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Rectangle"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Override"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " width"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        super"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(width);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        super"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setHeight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(width);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Override"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setHeight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " height"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        super"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(height);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        super"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setHeight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(height);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En el ejemplo anterior, la clase ", createVNode(_components.code, {
        children: "Square"
      }), " hereda de la clase ", createVNode(_components.code, {
        children: "Rectangle"
      }), " y reemplaza los m\xE9todos ", createVNode(_components.code, {
        children: "setWidth"
      }), " y ", createVNode(_components.code, {
        children: "setHeight"
      }), " para garantizar que un objeto de la clase ", createVNode(_components.code, {
        children: "Square"
      }), " pueda sustituir a un objeto de la clase ", createVNode(_components.code, {
        children: "Rectangle"
      }), " sin cambiar el comportamiento del programa."]
    }), "\n", createVNode(_components.h3, {
      id: "cuando-aplicar-el-principio-de-sustituci\xF3n-de-liskov",
      children: "Cuando aplicar el principio de sustituci\xF3n de Liskov"
    }), "\n", createVNode(_components.p, {
      children: "El principio de sustituci\xF3n de Liskov es \xFAtil cuando se espera que una clase derivada reemplace a su clase base en el futuro. Sin embargo, si una clase derivada no se espera que reemplace a su clase base en el futuro, entonces no hay necesidad de aplicar este principio. Aplique este principio solo si es probable que una clase derivada reemplace a su clase base en el futuro."
    }), "\n", createVNode(_components.h2, {
      id: "i-principio-de-segregaci\xF3n-de-interfaces-isp",
      children: "[I] Principio de segregaci\xF3n de interfaces (ISP)"
    }), "\n", createVNode(_components.p, {
      children: "El principio de segregaci\xF3n de interfaces establece que una clase no debe depender de interfaces que no utiliza. En otras palabras, una clase no debe tener una dependencia innecesaria de interfaces que no necesita."
    }), "\n", createVNode(_components.h3, {
      id: "caso-de-aplicaci\xF3n-3",
      children: "Caso de aplicaci\xF3n"
    }), "\n", createVNode(_components.p, {
      children: ["Supongamos que tenemos una interfaz ", createVNode(_components.code, {
        children: "Shape"
      }), " que representa una forma geom\xE9trica en nuestra aplicaci\xF3n. Esta interfaz tiene un m\xE9todo ", createVNode(_components.code, {
        children: "draw"
      }), " que dibuja la forma en la pantalla. Si creamos una clase ", createVNode(_components.code, {
        children: "Rectangle"
      }), " que implementa la interfaz ", createVNode(_components.code, {
        children: "Shape"
      }), ", deber\xEDamos poder implementar solo los m\xE9todos que necesitamos y no tener que implementar todos los m\xE9todos de la interfaz."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo-3",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Shape"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " draw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Rectangle"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " implements"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Shape"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Override"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " draw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Dibujar un rect\xE1ngulo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En el ejemplo anterior, la clase ", createVNode(_components.code, {
        children: "Rectangle"
      }), " implementa la interfaz ", createVNode(_components.code, {
        children: "Shape"
      }), " y solo implementa el m\xE9todo ", createVNode(_components.code, {
        children: "draw"
      }), " que necesita. No tiene que implementar todos los m\xE9todos de la interfaz ", createVNode(_components.code, {
        children: "Shape"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "cuando-aplicar-el-principio-de-segregaci\xF3n-de-interfaces",
      children: "Cuando aplicar el principio de segregaci\xF3n de interfaces"
    }), "\n", createVNode(_components.p, {
      children: "El principio de segregaci\xF3n de interfaces es \xFAtil cuando se espera que una clase implemente m\xFAltiples interfaces y no necesite todos los m\xE9todos de las interfaces. Sin embargo, si una clase solo necesita implementar una interfaz y no necesita todos los m\xE9todos de la interfaz, entonces no hay necesidad de aplicar este principio. Aplique este principio solo si es probable que una clase implemente m\xFAltiples interfaces y no necesite todos los m\xE9todos de las interfaces."
    }), "\n", createVNode(_components.h2, {
      id: "d-principio-de-inversi\xF3n-de-dependencia-dip",
      children: "[D] Principio de inversi\xF3n de dependencia (DIP)"
    }), "\n", createVNode(_components.p, {
      children: "El principio de inversi\xF3n de dependencia establece que las clases de alto nivel no deben depender de las clases de bajo nivel. En su lugar, ambas clases deben depender de abstracciones. Adem\xE1s, las abstracciones no deben depender de los detalles. En su lugar, los detalles deben depender de las abstracciones."
    }), "\n", createVNode(_components.h3, {
      id: "caso-de-aplicaci\xF3n-4",
      children: "Caso de aplicaci\xF3n"
    }), "\n", createVNode(_components.p, {
      children: ["Supongamos que tenemos una clase ", createVNode(_components.code, {
        children: "UserService"
      }), " que depende de una clase ", createVNode(_components.code, {
        children: "UserRepository"
      }), " para obtener los datos de los usuarios en nuestra aplicaci\xF3n. En lugar de que la clase ", createVNode(_components.code, {
        children: "UserService"
      }), " dependa directamente de la clase ", createVNode(_components.code, {
        children: "UserRepository"
      }), ", deber\xEDamos introducir una interfaz ", createVNode(_components.code, {
        children: "UserRepository"
      }), " para abstraer la dependencia."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo-4",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserRepository"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    User "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "findById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(Long "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "id"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserService"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " final"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UserRepository userRepository;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserService"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(UserRepository "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "userRepository"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".userRepository "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " userRepository;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " User "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getUser"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(Long "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "id"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " userRepository."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "findById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(id);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserRepositoryImpl"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " implements"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserRepository"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Override"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " User "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "findById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(Long "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "id"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Obtener el usuario por ID"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En el ejemplo anterior, la clase ", createVNode(_components.code, {
        children: "UserService"
      }), " depende de la interfaz ", createVNode(_components.code, {
        children: "UserRepository"
      }), " en lugar de la clase ", createVNode(_components.code, {
        children: "UserRepository"
      }), ". Esto permite que la clase ", createVNode(_components.code, {
        children: "UserService"
      }), " dependa de abstracciones en lugar de detalles."]
    }), "\n", createVNode(_components.h3, {
      id: "cuando-aplicar-el-principio-de-inversi\xF3n-de-dependencia",
      children: "Cuando aplicar el principio de inversi\xF3n de dependencia"
    }), "\n", createVNode(_components.p, {
      children: "El principio de inversi\xF3n de dependencia es \xFAtil cuando se espera que una clase dependa de m\xFAltiples clases y necesite abstraer esas dependencias. Sin embargo, si una clase solo necesita depender de una clase y no necesita abstraer esa dependencia, entonces no hay necesidad de aplicar este principio. Aplique este principio solo si es probable que una clase dependa de m\xFAltiples clases y necesite abstraer esas dependencias."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/writing/principios-solid-para-novatos.mdx";
const file = "C:/Users/Omar/Documents/sazarsource/src/content/writing/principios-solid-para-novatos.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Omar/Documents/sazarsource/src/content/writing/principios-solid-para-novatos.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
