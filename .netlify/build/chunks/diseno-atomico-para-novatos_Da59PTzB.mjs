import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro/server_DNwvyA0O.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_1m1W4OeF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dise\xF1o at\xF3mico para novatos",
  "description": "Aprende a utilizar el dise\xF1o at\xF3mico",
  "pubDate": "01 Oct 2024"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\xE1tomos",
    "text": "\xC1tomos"
  }, {
    "depth": 3,
    "slug": "ejemplo-de-\xE1tomos",
    "text": "Ejemplo de \xE1tomos"
  }, {
    "depth": 2,
    "slug": "mol\xE9culas",
    "text": "Mol\xE9culas"
  }, {
    "depth": 3,
    "slug": "ejemplo-de-mol\xE9culas",
    "text": "Ejemplo de mol\xE9culas"
  }, {
    "depth": 2,
    "slug": "organismos",
    "text": "Organismos"
  }, {
    "depth": 3,
    "slug": "ejemplo-de-organismos",
    "text": "Ejemplo de organismos"
  }, {
    "depth": 4,
    "slug": "drawertsx",
    "text": "Drawer.tsx"
  }, {
    "depth": 2,
    "slug": "plantillas",
    "text": "Plantillas"
  }, {
    "depth": 3,
    "slug": "ejemplo-de-plantillas",
    "text": "Ejemplo de plantillas"
  }, {
    "depth": 4,
    "slug": "profilelayouttsx",
    "text": "ProfileLayout.tsx"
  }, {
    "depth": 2,
    "slug": "p\xE1ginas",
    "text": "P\xE1ginas"
  }, {
    "depth": 3,
    "slug": "ejemplo-de-p\xE1ginas",
    "text": "Ejemplo de p\xE1ginas"
  }, {
    "depth": 4,
    "slug": "profilepagetsx",
    "text": "ProfilePage.tsx"
  }, {
    "depth": 2,
    "slug": "referencias",
    "text": "Referencias"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "El dise\xF1o at\xF3mico es una metodolog\xEDa de dise\xF1o que se basa en la creaci\xF3n de componentes de interfaz de usuario. Estos componentes se dividen en cinco categor\xEDas: \xE1tomos, mol\xE9culas, organismos, plantillas y p\xE1ginas. Cada una de estas categor\xEDas representa un nivel de complejidad creciente."
    }), "\n", createVNode(_components.p, {
      children: "Considere que este patr\xF3n de arquitectura solo se aplica en la creaci\xF3n de componentes, no en la arquitectura de carpetas, aunque puede nombrar las carpetas de la misma forma que los componentes o con la categoria que le corresponda seg\xFAn el componente a desarrollar en el dise\xF1o at\xF3mico."
    }), "\n", createVNode(_components.h2, {
      id: "\xE1tomos",
      children: "\xC1tomos"
    }), "\n", createVNode(_components.p, {
      children: "Los \xE1tomos son los componentes m\xE1s b\xE1sicos de la interfaz de usuario. Estos componentes son indivisibles y no pueden descomponerse en partes m\xE1s peque\xF1as. Algunos ejemplos de \xE1tomos son los botones, los campos de texto y las etiquetas."
    }), "\n", createVNode(_components.p, {
      children: "Capte que los \xE1tomos no tienen l\xF3gica de negocio, solo presentan informaci\xF3n. Por lo tanto, los \xE1tomos no deben contener l\xF3gica de negocio. No deben realizar llamadas a la API, ni manejar el estado de la aplicaci\xF3n. Son componentes puramente visuales y deben ser reutilizables en cualquier parte de la aplicaci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Un componente de tipo \xE1tomo debe ser agn\xF3stico a la l\xF3gica de negocio, y debe ser reutilizable en cualquier parte de la aplicaci\xF3n. No utilice nombres de clases que hagan referencia a la l\xF3gica de negocio, ni nombres de clases que hagan referencia a la ubicaci\xF3n del componente en la aplicaci\xF3n. Deben ser nombres completamente gen\xE9ricos, f\xE1ciles de entender, recordar y extremadamente obvios en su uso."
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-de-\xE1tomos",
      children: "Ejemplo de \xE1tomos"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "tsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " React "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " = {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    label"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    children"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " React"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ReactNode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Button"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{onClick}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {label}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {children}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En este ejemplo el componente ", createVNode(_components.code, {
        children: "Button"
      }), " es un \xE1tomo, ya que es un componente b\xE1sico que no puede descomponerse en partes m\xE1s peque\xF1as. El componente ", createVNode(_components.code, {
        children: "Button"
      }), " recibe tres propiedades: ", createVNode(_components.code, {
        children: "label"
      }), ", ", createVNode(_components.code, {
        children: "onClick"
      }), " y ", createVNode(_components.code, {
        children: "children"
      }), ". La propiedad ", createVNode(_components.code, {
        children: "label"
      }), " es el texto que se mostrar\xE1 en el bot\xF3n, la propiedad ", createVNode(_components.code, {
        children: "onClick"
      }), " es la funci\xF3n que se ejecutar\xE1 cuando se haga clic en el bot\xF3n y la propiedad ", createVNode(_components.code, {
        children: "children"
      }), " es el contenido que se mostrar\xE1 dentro del bot\xF3n. El componente ", createVNode(_components.code, {
        children: "Button"
      }), " no tiene l\xF3gica de negocio, solo presenta informaci\xF3n. N\xF3tese ademas que su nombre es completamente generico y no hace referencia a la l\xF3gica de negocio, ni a la ubicaci\xF3n del componente en la aplicaci\xF3n."]
    }), "\n", createVNode(_components.h2, {
      id: "mol\xE9culas",
      children: "Mol\xE9culas"
    }), "\n", createVNode(_components.p, {
      children: "Las mol\xE9culas son componentes que se componen de uno o m\xE1s \xE1tomos. Estos componentes son m\xE1s complejos que los \xE1tomos, pero siguen siendo componentes b\xE1sicos que no pueden descomponerse en partes m\xE1s peque\xF1as. Algunos ejemplos de mol\xE9culas son los formularios, las tarjetas y los men\xFAs."
    }), "\n", createVNode(_components.p, {
      children: "Capte que las mol\xE9culas no tienen l\xF3gica de negocio, solo presentan informaci\xF3n. Por lo tanto, las mol\xE9culas no deben contener l\xF3gica de negocio. No deben realizar llamadas a la API, ni manejar el estado de la aplicaci\xF3n. Son componentes puramente visuales y deben ser reutilizables en cualquier parte de la aplicaci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Un componente de tipo mol\xE9cula debe ser agn\xF3stico a la l\xF3gica de negocio, y debe ser reutilizable en cualquier parte de la aplicaci\xF3n. No utilice nombres de clases que hagan referencia a la l\xF3gica de negocio, ni nombres de clases que hagan referencia a la ubicaci\xF3n del componente en la aplicaci\xF3n. Deben ser nombres completamente gen\xE9ricos, f\xE1ciles de entender, recordar y extremadamente obvios en su uso."
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-de-mol\xE9culas",
      children: "Ejemplo de mol\xE9culas"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "tsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " React "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " = {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    children"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " React"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ReactNode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Card"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">{title}</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {children}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En este ejemplo el componente ", createVNode(_components.code, {
        children: "Card"
      }), " es una mol\xE9cula, ya que es un componente que se compone de uno o m\xE1s \xE1tomos. El componente ", createVNode(_components.code, {
        children: "Card"
      }), " recibe dos propiedades: ", createVNode(_components.code, {
        children: "title"
      }), " y ", createVNode(_components.code, {
        children: "children"
      }), ". La propiedad ", createVNode(_components.code, {
        children: "title"
      }), " es el t\xEDtulo que se mostrar\xE1 en la tarjeta y la propiedad ", createVNode(_components.code, {
        children: "children"
      }), " es el contenido que se mostrar\xE1 dentro de la tarjeta. El componente ", createVNode(_components.code, {
        children: "Card"
      }), " no tiene l\xF3gica de negocio, solo presenta informaci\xF3n. N\xF3tese ademas que su nombre es completamente generico y no hace referencia a la l\xF3gica de negocio, ni a la ubicaci\xF3n del componente en la aplicaci\xF3n."]
    }), "\n", createVNode(_components.h2, {
      id: "organismos",
      children: "Organismos"
    }), "\n", createVNode(_components.p, {
      children: "Los organismos son componentes que se componen de uno o m\xE1s \xE1tomos y mol\xE9culas. Estos componentes son m\xE1s complejos que los \xE1tomos y las mol\xE9culas, ya que pueden descomponerse en partes m\xE1s peque\xF1as. Algunos ejemplos de organismos son los encabezados, los pies de p\xE1gina y los men\xFAs de navegaci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Capte que los organismos puede llegar a tener l\xF3gica de negocio, ya que pueden manejar el estado de la aplicaci\xF3n y realizar llamadas a la API."
    }), "\n", createVNode(_components.p, {
      children: ["Para este punto debe notar que un ", createVNode(_components.code, {
        children: "Organismo"
      }), " puede llegar a ser el ", createVNode(_components.code, {
        children: "Appbar"
      }), " de su aplicacion o el ", createVNode(_components.code, {
        children: "Drawer"
      }), " puede verse sumamente tentado a colocar la l\xF3gica de negocio en estos componentes, pero es recomendable delegar la l\xF3gica de negocio a los contenedores, sea cuidadoso, ya que es donde mas errores puede cometer. Pero entiendase que el dise\xF1o at\xF3mico busca en todo momento estar debilmente acoplado en cualquier momento y no depender de ningun otro. Si el dia de mana\xF1a se decide cambiar la l\xF3gica de negocio, no deberia afectar en nada a los componentes de la aplicaci\xF3n."]
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-de-organismos",
      children: "Ejemplo de organismos"
    }), "\n", createVNode(_components.h4, {
      id: "drawertsx",
      children: createVNode(_components.code, {
        children: "Drawer.tsx"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "tsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " React "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " = {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    open"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    onClose"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    children"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " React"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ReactNode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Drawer"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "onClose"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " style"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{{ display: open "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'block'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'none'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{onClose}>Cerrar</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {children}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En este ejemplo el componente ", createVNode(_components.code, {
        children: "Drawer"
      }), " es un organismo, ya que es un componente que se compone de uno o m\xE1s \xE1tomos y mol\xE9culas. El componente ", createVNode(_components.code, {
        children: "Drawer"
      }), " recibe tres propiedades: ", createVNode(_components.code, {
        children: "open"
      }), ", ", createVNode(_components.code, {
        children: "onClose"
      }), " y ", createVNode(_components.code, {
        children: "children"
      }), ". La propiedad ", createVNode(_components.code, {
        children: "open"
      }), " es un booleano que indica si el caj\xF3n est\xE1 abierto o cerrado, la propiedad ", createVNode(_components.code, {
        children: "onClose"
      }), " es la funci\xF3n que se ejecutar\xE1 cuando se cierre el caj\xF3n y la propiedad ", createVNode(_components.code, {
        children: "children"
      }), " es el contenido que se mostrar\xE1 dentro del caj\xF3n. El componente ", createVNode(_components.code, {
        children: "Drawer"
      }), " puede tener l\xF3gica de negocio, ya que puede manejar el estado de la aplicaci\xF3n y realizar llamadas a la API. Pero\r\nintente a toda costa mantenerlo afuera de este componente."]
    }), "\n", createVNode(_components.h2, {
      id: "plantillas",
      children: "Plantillas"
    }), "\n", createVNode(_components.p, {
      children: "Las plantillas son componentes que se componen de uno o m\xE1s \xE1tomos, mol\xE9culas y organismos. Algunos ejemplos de plantillas son las p\xE1ginas de inicio, las p\xE1ginas de perfil y las p\xE1ginas de configuraci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: ["Se da la confusion normalmente entre ", createVNode(_components.code, {
        children: "Molecula"
      }), " y ", createVNode(_components.code, {
        children: "Plantilla"
      }), ", ya que en teoria suenan similares. Pero es importante que note la diferencia entre ambas. No intente sobreanalizar o sobrecomplicar las cosas, si un componente se compone de uno o m\xE1s ", createVNode(_components.code, {
        children: "Moleculas"
      }), " y ", createVNode(_components.code, {
        children: "Organismos"
      }), ", entonces es una ", createVNode(_components.code, {
        children: "Plantilla"
      }), ". Si un componente se compone de uno o m\xE1s ", createVNode(_components.code, {
        children: "Atomos"
      }), " y ", createVNode(_components.code, {
        children: "Moleculas"
      }), ", entonces es una ", createVNode(_components.code, {
        children: "Molecula"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-de-plantillas",
      children: "Ejemplo de plantillas"
    }), "\n", createVNode(_components.h4, {
      id: "profilelayouttsx",
      children: createVNode(_components.code, {
        children: "ProfileLayout.tsx"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "tsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " React "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'react'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Header "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " './Header'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Card "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " './Card'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Button "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " './Button'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " = {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "    children"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " React"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ReactNode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProfileLayout"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Props"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{title} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Card"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Perfil"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            {children}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Card"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En este ejemplo el componente ", createVNode(_components.code, {
        children: "ProfileLayout"
      }), " es una plantilla, ya que es un componente que se compone de uno o m\xE1s \xE1tomos, mol\xE9culas y organismos. El componente ", createVNode(_components.code, {
        children: "ProfileLayout"
      }), " recibe dos propiedades: ", createVNode(_components.code, {
        children: "title"
      }), " y ", createVNode(_components.code, {
        children: "children"
      }), ". La propiedad ", createVNode(_components.code, {
        children: "title"
      }), " es el t\xEDtulo que se mostrar\xE1 en la p\xE1gina de perfil y la propiedad ", createVNode(_components.code, {
        children: "children"
      }), " es el contenido que se mostrar\xE1 dentro de la p\xE1gina de perfil. El componente ", createVNode(_components.code, {
        children: "ProfileLayout"
      }), " puede tener l\xF3gica de negocio, ya que puede manejar el estado de la aplicaci\xF3n y realizar llamadas a la API. Pero repitiendo de nuevo, aunque este tentado a colocar la l\xF3gica de negocio en este componente, se recomienda delegar la l\xF3gica de negocio a los contenedores, debido que mientras mas limpio y agn\xF3stico mantenga la plantilla, mas veces se podra reutilizar en la aplicaci\xF3n."]
    }), "\n", createVNode(_components.p, {
      children: "Por favor, sea cuidadoso en el nivel de plantilla, ya que es el nivel donde mas errores puede cometer. Si el dia de mana\xF1a se decide cambiar la l\xF3gica de negocio, no deberia afectar en nada a los componentes de la aplicaci\xF3n."
    }), "\n", createVNode(_components.h2, {
      id: "p\xE1ginas",
      children: "P\xE1ginas"
    }), "\n", createVNode(_components.p, {
      children: "Las p\xE1ginas son mucho mas f\xE1ciles de entender, debido a que es explicitamente lo que el usuario entiende como una p\xE1gina. La pagina es el nivel mas alto de la jerarquia de componentes, y aqui es donde se hace el cloromerado de todos los componentes que se han creado en los niveles anteriores."
    }), "\n", createVNode(_components.p, {
      children: "Aqui puede ignorar la regla de no colocar l\xF3gica de negocio en los componentes, ya que en este nivel es donde se debe colocar toda la l\xF3gica de negocio de la aplicaci\xF3n. Aqui es donde se debe manejar el estado de la aplicaci\xF3n y realizar llamadas a la API."
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-de-p\xE1ginas",
      children: "Ejemplo de p\xE1ginas"
    }), "\n", createVNode(_components.h4, {
      id: "profilepagetsx",
      children: createVNode(_components.code, {
        children: "ProfilePage.tsx"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "tsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " React "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "react"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ProfileLayout "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "./ProfileLayout"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ProfilePage"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ProfileLayout"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Perfil"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "form"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Nombre</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"text"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Apellido</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "label"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "input"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"text"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Button"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " label"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Guardar"'
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Guardar"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "form"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ProfileLayout"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "referencias",
      children: "Referencias"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://atomicdesign.bradfrost.com/chapter-2/?source=post_page-----2bb4d9ca5f97--------------------------------",
          children: "Atomic Design Methodology"
        })
      }), "\n"]
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
const url = "src/content/writing/diseno-atomico-para-novatos.mdx";
const file = "C:/Users/Omar/Documents/sazarsource/src/content/writing/diseno-atomico-para-novatos.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Omar/Documents/sazarsource/src/content/writing/diseno-atomico-para-novatos.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
