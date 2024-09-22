import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro/server_DNwvyA0O.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_1m1W4OeF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Arquitectura VIPER para programadores en React",
  "description": "VIPER es un patr\xF3n de arquitectura de software que se utiliza en el dise\xF1o de aplicaciones m\xF3viles para separar las responsabilidades y mejorar la modularidad y la escalabilidad del c\xF3digo.",
  "pubDate": "12 Oct 2024"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "v---view",
    "text": "V - View"
  }, {
    "depth": 2,
    "slug": "i---interactor",
    "text": "I - Interactor"
  }, {
    "depth": 2,
    "slug": "p---presenter",
    "text": "P - Presenter"
  }, {
    "depth": 2,
    "slug": "e---entity",
    "text": "E - Entity"
  }, {
    "depth": 2,
    "slug": "r---router",
    "text": "R - Router"
  }, {
    "depth": 2,
    "slug": "caso-de-uso",
    "text": "Caso de uso"
  }, {
    "depth": 2,
    "slug": "ejemplo-de-estructura-de-carpetas",
    "text": "Ejemplo de estructura de carpetas"
  }, {
    "depth": 2,
    "slug": "aplicacion-teorica",
    "text": "Aplicacion teorica"
  }, {
    "depth": 2,
    "slug": "aplicacion-practica",
    "text": "Aplicacion practica"
  }, {
    "depth": 3,
    "slug": "view",
    "text": "View"
  }, {
    "depth": 4,
    "slug": "userviewtsx",
    "text": "UserView.tsx"
  }, {
    "depth": 3,
    "slug": "interactor",
    "text": "Interactor"
  }, {
    "depth": 4,
    "slug": "userinteractorts",
    "text": "UserInteractor.ts"
  }, {
    "depth": 3,
    "slug": "presenter",
    "text": "Presenter"
  }, {
    "depth": 4,
    "slug": "userpresenterts",
    "text": "UserPresenter.ts"
  }, {
    "depth": 3,
    "slug": "entity",
    "text": "Entity"
  }, {
    "depth": 4,
    "slug": "userentityts",
    "text": "UserEntity.ts"
  }, {
    "depth": 3,
    "slug": "router",
    "text": "Router"
  }, {
    "depth": 4,
    "slug": "userrouterts",
    "text": "UserRouter.ts"
  }, {
    "depth": 2,
    "slug": "cuando-aplicar-viper",
    "text": "Cuando aplicar VIPER"
  }, {
    "depth": 2,
    "slug": "cuando-no-aplicar-viper",
    "text": "Cuando no aplicar VIPER"
  }, {
    "depth": 2,
    "slug": "consejos",
    "text": "Consejos"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "VIPER"
      }), " es un patr\xF3n de ", createVNode(_components.em, {
        children: "arquitectura de software"
      }), " que se utiliza en el dise\xF1o de aplicaciones m\xF3viles para separar las responsabilidades y mejorar la modularidad y la escalabilidad del c\xF3digo. ", createVNode(_components.strong, {
        children: "VIPER"
      }), " es un acr\xF3nimo que significa ", createVNode(_components.strong, {
        children: "View, Interactor, Presenter, Entity, Router"
      }), " y se basa en los principios de la ", createVNode(_components.em, {
        children: "arquitectura limpia"
      }), " y el ", createVNode(_components.em, {
        children: "dise\xF1o orientado a objetos"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["El patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), " es una evoluci\xF3n del patr\xF3n ", createVNode(_components.strong, {
        children: "MVC"
      }), " (Model-View-Controller) y se utiliza principalmente en el desarrollo de ", createVNode(_components.em, {
        children: "aplicaciones m\xF3viles"
      }), " para iOS y Android. ", createVNode(_components.strong, {
        children: "VIPER"
      }), " se basa en la idea de ", createVNode(_components.code, {
        children: "separar las responsabilidades"
      }), " de las diferentes capas de la aplicaci\xF3n y de utilizar interfaces para comunicar entre ellas. Esto permite que el c\xF3digo sea m\xE1s ", createVNode(_components.code, {
        children: "modular"
      }), ", ", createVNode(_components.code, {
        children: "reutilizable"
      }), " y ", createVNode(_components.code, {
        children: "f\xE1cil de mantener"
      }), ". Ademas de que facilita la ", createVNode(_components.code, {
        children: "escritura de pruebas unitarias"
      }), " y la ", createVNode(_components.code, {
        children: "escalabilidad"
      }), " del c\xF3digo. E incluso permite que diferentes equipos de desarrollo trabajen en paralelo en diferentes partes de la aplicaci\xF3n."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "VIPER"
      }), " es una excelente opci\xF3n para aplicaciones que requieren ", createVNode(_components.code, {
        children: "trabajo en equipo"
      }), ", ", createVNode(_components.code, {
        children: "aplicaciones grandes"
      }), " y ", createVNode(_components.code, {
        children: "complejas"
      }), ", aplicaciones que necesitan ser ", createVNode(_components.code, {
        children: "escalables"
      }), " y aplicaciones que necesitan ser ", createVNode(_components.code, {
        children: "f\xE1ciles de mantener"
      }), " y de ", createVNode(_components.code, {
        children: "probar"
      }), ", ademas de ser ", createVNode(_components.code, {
        children: "altamente flexible"
      }), ", ", createVNode(_components.code, {
        children: "modular"
      }), " y ", createVNode(_components.code, {
        children: "reutilizable"
      }), " en cualquier punto de la aplicaci\xF3n."]
    }), "\n", createVNode(_components.h2, {
      id: "v---view",
      children: "V - View"
    }), "\n", createVNode(_components.p, {
      children: ["La capa de ", createVNode(_components.strong, {
        children: "View"
      }), " es la encargada de la ", createVNode(_components.code, {
        children: "interfaz de usuario"
      }), " de la aplicaci\xF3n. En esta capa se encuentran las clases que se encargan de mostrar la informaci\xF3n al usuario y de recibir las interacciones del usuario. La capa de ", createVNode(_components.strong, {
        children: "View"
      }), " es la capa m\xE1s ", createVNode(_components.code, {
        children: "externa"
      }), " de la aplicaci\xF3n y es la que se comunica con el usuario."]
    }), "\n", createVNode(_components.p, {
      children: ["La capa de ", createVNode(_components.strong, {
        children: "View"
      }), " es la encargada de ", createVNode(_components.code, {
        children: "renderizar"
      }), " la interfaz de usuario, de ", createVNode(_components.code, {
        children: "mostrar"
      }), " los datos al usuario y de ", createVNode(_components.code, {
        children: "recibir"
      }), " las interacciones del usuario."]
    }), "\n", createVNode(_components.h2, {
      id: "i---interactor",
      children: "I - Interactor"
    }), "\n", createVNode(_components.p, {
      children: ["La capa de ", createVNode(_components.strong, {
        children: "Interactor"
      }), " es la encargada de ", createVNode(_components.code, {
        children: "contener la l\xF3gica de negocio"
      }), " de la aplicaci\xF3n. En esta capa se encuentran las clases que se encargan de ", createVNode(_components.code, {
        children: "realizar las operaciones"
      }), " y de ", createVNode(_components.code, {
        children: "manipular los datos"
      }), " de la aplicaci\xF3n. La capa de ", createVNode(_components.strong, {
        children: "Interactor"
      }), " es la capa m\xE1s ", createVNode(_components.code, {
        children: "interna"
      }), " de la aplicaci\xF3n y es la que se comunica con la capa de ", createVNode(_components.strong, {
        children: "Presenter"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "p---presenter",
      children: "P - Presenter"
    }), "\n", createVNode(_components.p, {
      children: ["La capa de ", createVNode(_components.strong, {
        children: "Presenter"
      }), " es la encargada de ", createVNode(_components.code, {
        children: "contener la l\xF3gica de presentaci\xF3n"
      }), " de la aplicaci\xF3n. En esta capa se encuentran las clases que se encargan de ", createVNode(_components.code, {
        children: "preparar los datos"
      }), " para ser mostrados en la capa de ", createVNode(_components.strong, {
        children: "View"
      }), " y de ", createVNode(_components.code, {
        children: "manejar las interacciones"
      }), " del usuario. La capa de ", createVNode(_components.strong, {
        children: "Presenter"
      }), " es la capa que se encarga de ", createVNode(_components.code, {
        children: "comunicar"
      }), " la capa de ", createVNode(_components.strong, {
        children: "View"
      }), " con la capa de ", createVNode(_components.strong, {
        children: "Interactor"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "e---entity",
      children: "E - Entity"
    }), "\n", createVNode(_components.p, {
      children: ["La capa de ", createVNode(_components.strong, {
        children: "Entity"
      }), " es la encargada de ", createVNode(_components.code, {
        children: "contener los datos"
      }), " de la aplicaci\xF3n. En esta capa se encuentran las clases que se encargan de ", createVNode(_components.code, {
        children: "representar los datos"
      }), " de la aplicaci\xF3n y de ", createVNode(_components.code, {
        children: "manipular los datos"
      }), " de la aplicaci\xF3n. La capa de ", createVNode(_components.strong, {
        children: "Entity"
      }), " es la capa m\xE1s ", createVNode(_components.code, {
        children: "interna"
      }), " de la aplicaci\xF3n y es la que se comunica con la capa de ", createVNode(_components.strong, {
        children: "Interactor"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "r---router",
      children: "R - Router"
    }), "\n", createVNode(_components.p, {
      children: ["La capa de ", createVNode(_components.strong, {
        children: "Router"
      }), " es la encargada de ", createVNode(_components.code, {
        children: "contener la l\xF3gica de navegaci\xF3n"
      }), " de la aplicaci\xF3n. En esta capa se encuentran las clases que se encargan de ", createVNode(_components.code, {
        children: "navegar"
      }), " entre las diferentes pantallas de la aplicaci\xF3n y de ", createVNode(_components.code, {
        children: "comunicar"
      }), " las diferentes capas de la aplicaci\xF3n. La capa de ", createVNode(_components.strong, {
        children: "Router"
      }), " es la capa m\xE1s ", createVNode(_components.code, {
        children: "externa"
      }), " de la aplicaci\xF3n y es la que se comunica con la capa de ", createVNode(_components.strong, {
        children: "Presenter"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "caso-de-uso",
      children: "Caso de uso"
    }), "\n", createVNode(_components.p, {
      children: ["Supongamos el caso donde necesitamos hacer una aplicaci\xF3n web con muchos m\xF3dulos y funcionalidades, como podr\xEDa ser un sistema de gesti\xF3n de inventario para una tienda en l\xEDnea. En este caso, se podr\xEDa aplicar el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), " debido a ciertos problemas t\xE9cnicos y de dise\xF1o que se pueden presentar en el desarrollo de la aplicaci\xF3n, visualicemos los problemas t\xE9cnicos en este caso de uso como lo ser\xEDan:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de escalabilidad"
        }), ": La aplicaci\xF3n necesita ser escalable para poder soportar un gran n\xFAmero"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de mantenimiento"
        }), ": La aplicaci\xF3n necesita ser f\xE1cil de mantener y de probar"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de modularidad"
        }), ": La aplicaci\xF3n necesita ser modular para poder ser reutilizable en diferentes partes de la aplicaci\xF3n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de trabajo en equipo"
        }), ": La aplicaci\xF3n necesita ser f\xE1cil de trabajar en equipo y de colaborar con otros desarrolladores"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de complejidad"
        }), ": La aplicaci\xF3n necesita ser f\xE1cil de entender y de depurar"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de rendimiento"
        }), ": La aplicaci\xF3n necesita ser eficiente y r\xE1pida"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de seguridad"
        }), ": La aplicaci\xF3n necesita ser segura y protegida contra ataques"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Problemas de usabilidad"
        }), ": La aplicaci\xF3n necesita ser f\xE1cil de usar y de entender"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Aplicacion que requieren multiples capas de seguridad, y que cada capa, m\xF3dulo y funcion sea testeable es donde ", createVNode(_components.code, {
        children: "VIPER"
      }), " brillara por su arquitectura limpia y modular. Debido a que ", createVNode(_components.code, {
        children: "VIPER"
      }), " es un patr\xF3n de arquitectura de software que se utiliza en el dise\xF1o de aplicaciones m\xF3viles para separar las responsabilidades y mejorar la modularidad y la escalabilidad del c\xF3digo."]
    }), "\n", createVNode(_components.h2, {
      id: "ejemplo-de-estructura-de-carpetas",
      children: "Ejemplo de estructura de carpetas"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u251C\u2500\u2500 app"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u251C\u2500\u2500 modules"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u251C\u2500\u2500 module1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 view"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 interactor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 presenter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 entity"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 router"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u251C\u2500\u2500 module2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 view"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 interactor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 presenter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 entity"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u2502   \u251C\u2500\u2500 router"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u251C\u2500\u2500 shared"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u251C\u2500\u2500 view"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u251C\u2500\u2500 interactor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u251C\u2500\u2500 presenter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u251C\u2500\u2500 entity"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\u2502   \u2502   \u251C\u2500\u2500 router"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En este ejemplo, se puede ver la estructura de carpetas de una aplicaci\xF3n que utiliza el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), ". La carpeta ", createVNode(_components.code, {
        children: "app"
      }), " contiene los m\xF3dulos de la aplicaci\xF3n, cada m\xF3dulo tiene una carpeta con las capas de ", createVNode(_components.strong, {
        children: "View"
      }), ", ", createVNode(_components.strong, {
        children: "Interactor"
      }), ", ", createVNode(_components.strong, {
        children: "Presenter"
      }), ", ", createVNode(_components.strong, {
        children: "Entity"
      }), " y ", createVNode(_components.strong, {
        children: "Router"
      }), ". La carpeta ", createVNode(_components.code, {
        children: "shared"
      }), " contiene las capas compartidas de la aplicaci\xF3n, que pueden ser utilizadas por varios m\xF3dulos."]
    }), "\n", createVNode(_components.p, {
      children: ["Tener en cuenta que la estructura de carpetas puede variar dependiendo de la aplicaci\xF3n y de las necesidades del proyecto, pero en general se recomienda seguir una estructura similar a la mostrada en este ejemplo para mantener el c\xF3digo organizado y f\xE1cil de mantener. No siga la estructura de carpetas a rajatabla, sino que adapte la estructura a las necesidades de su proyecto, esta solo es una idea de como podr\xEDa ser la estructura de carpetas de una aplicaci\xF3n que utiliza el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), ", pero visualice mas a ", createVNode(_components.strong, {
        children: "VIPER"
      }), " como una gu\xEDa que le ayudar\xE1 a tomar decisiones m\xE1s acertadas en el dise\xF1o de software con los componentes de ", createVNode(_components.strong, {
        children: "View"
      }), ", ", createVNode(_components.strong, {
        children: "Interactor"
      }), ", ", createVNode(_components.strong, {
        children: "Presenter"
      }), ", ", createVNode(_components.strong, {
        children: "Entity"
      }), " y ", createVNode(_components.strong, {
        children: "Router"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "aplicacion-teorica",
      children: "Aplicacion teorica"
    }), "\n", createVNode(_components.p, {
      children: ["Supongamos que deseamos dise\xF1ar una aplicaci\xF3n de tipo ", createVNode(_components.code, {
        children: "red social"
      }), " donde los usuarios puedan ", createVNode(_components.code, {
        children: "publicar mensajes"
      }), ", ", createVNode(_components.code, {
        children: "compartir fotos"
      }), ", ", createVNode(_components.code, {
        children: "comentar publicaciones"
      }), ", ", createVNode(_components.code, {
        children: "dar me gusta a publicaciones"
      }), ", ", createVNode(_components.code, {
        children: "seguir a otros usuarios"
      }), ", ", createVNode(_components.code, {
        children: "enviar mensajes privados"
      }), ", ", createVNode(_components.code, {
        children: "crear grupos"
      }), ", ", createVNode(_components.code, {
        children: "crear eventos"
      }), ", ", createVNode(_components.code, {
        children: "crear encuestas"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Antes de arrancar al c\xF3digo, intente visualizar que conjuntos se arman en la solicitud de requerimientos, analice previamente lo solicitado, y analicemos juntos."
    }), "\n", createVNode(_components.p, {
      children: "Para realizar una abstracci\xF3n de la aplicaci\xF3n, podemos dividir la aplicaci\xF3n en diferentes m\xF3dulos, como por ejemplo:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "M\xF3dulo de Usuarios"
        }), ": Este m\xF3dulo se encargar\xEDa de gestionar los usuarios de la aplicaci\xF3n, como el registro de nuevos usuarios, el inicio de sesi\xF3n, la edici\xF3n de perfil, la b\xFAsqueda de usuarios, la lista de seguidores, la lista de seguidos, la lista de amigos, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "M\xF3dulo de Publicaciones"
        }), ": Este m\xF3dulo se encargar\xEDa de gestionar las publicaciones de los usuarios, como la creaci\xF3n de publicaciones, la edici\xF3n de publicaciones, la eliminaci\xF3n de publicaciones, la lista de publicaciones, la lista de publicaciones de un usuario, la lista de publicaciones de un grupo, la lista de publicaciones de un evento, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "M\xF3dulo de Mensajes"
        }), ": Este m\xF3dulo se encargar\xEDa de gestionar los mensajes de los usuarios, como el env\xEDo de mensajes, la recepci\xF3n de mensajes, la lista de mensajes, la lista de mensajes de un usuario, la lista de mensajes de un grupo, la lista de mensajes de un evento, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "M\xF3dulo de Grupos"
        }), ": Este m\xF3dulo se encargar\xEDa de gestionar los grupos de la aplicaci\xF3n, como la creaci\xF3n de grupos, la edici\xF3n de grupos, la eliminaci\xF3n de grupos, la lista de grupos, la lista de miembros de un grupo, la lista de publicaciones de un grupo, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "M\xF3dulo de Eventos"
        }), ": Este m\xF3dulo se encargar\xEDa de gestionar los eventos de la aplicaci\xF3n, como la creaci\xF3n de eventos, la edici\xF3n de eventos, la eliminaci\xF3n de eventos, la lista de eventos, la lista de asistentes a un evento, la lista de publicaciones de un evento, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "M\xF3dulo de Encuestas"
        }), ": Este m\xF3dulo se encargar\xEDa de gestionar las encuestas de la aplicaci\xF3n, como la creaci\xF3n de encuestas, la edici\xF3n de encuestas, la eliminaci\xF3n de encuestas, la lista de encuestas, la lista de respuestas a una encuesta, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "M\xF3dulo de Notificaciones"
        }), ": Este m\xF3dulo se encargar\xEDa de gestionar las notificaciones de la aplicaci\xF3n, como el env\xEDo de notificaciones, la recepci\xF3n de notificaciones, la lista de notificaciones, la lista de notificaciones de un usuario, etc."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Cada m\xF3dulo se puede implementar utilizando el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), ", donde cada m\xF3dulo tendr\xEDa las capas de ", createVNode(_components.strong, {
        children: "View"
      }), ", ", createVNode(_components.strong, {
        children: "Interactor"
      }), ", ", createVNode(_components.strong, {
        children: "Presenter"
      }), ", ", createVNode(_components.strong, {
        children: "Entity"
      }), " y ", createVNode(_components.strong, {
        children: "Router"
      }), ". De esta forma, se puede separar las responsabilidades de cada m\xF3dulo y mejorar la modularidad y la escalabilidad del c\xF3digo."]
    }), "\n", createVNode(_components.h2, {
      id: "aplicacion-practica",
      children: "Aplicacion practica"
    }), "\n", createVNode(_components.p, {
      children: ["Sigamos la aplicaci\xF3n teorica anteriormente vista, donde ya establecimos los m\xF3dulos de la aplicaci\xF3n, ahora vamos a implementar el m\xF3dulo de ", createVNode(_components.strong, {
        children: "Usuarios"
      }), " utilizando el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["En el ejemplo vamos a utilizar ", createVNode(_components.code, {
        children: "React"
      }), " + ", createVNode(_components.code, {
        children: "TypeScript"
      }), " para implementar el m\xF3dulo de ", createVNode(_components.strong, {
        children: "Usuarios"
      }), " utilizando el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), ". Vamos a crear las capas de ", createVNode(_components.strong, {
        children: "View"
      }), ", ", createVNode(_components.strong, {
        children: "Interactor"
      }), ", ", createVNode(_components.strong, {
        children: "Presenter"
      }), ", ", createVNode(_components.strong, {
        children: "Entity"
      }), " y ", createVNode(_components.strong, {
        children: "Router"
      }), " para el m\xF3dulo de ", createVNode(_components.strong, {
        children: "Usuarios"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "view",
      children: "View"
    }), "\n", createVNode(_components.h4, {
      id: "userviewtsx",
      children: createVNode(_components.code, {
        children: "UserView.tsx"
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
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserViewProps"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  users"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  onUserClick"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "user"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserView"
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
            children: "FC"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "UserViewProps"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "users"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "onUserClick"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
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
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Users</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "h1"
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
            children: "ul"
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
            children: "        {users."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "user"
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
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " key"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{user.id} "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "onClick"
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
              color: "#B392F0"
            },
            children: " onUserClick"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(user)}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            {user.name}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "li"
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
            children: "        ))}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "ul"
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
            children: "  );"
          })
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UserView;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "interactor",
      children: "Interactor"
    }), "\n", createVNode(_components.h4, {
      id: "userinteractorts",
      children: createVNode(_components.code, {
        children: "UserInteractor.ts"
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
            children: " { User } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "./UserEntity"'
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserInteractor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  getUsers"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[] {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Get users from API"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UserInteractor;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "presenter",
      children: "Presenter"
    }), "\n", createVNode(_components.h4, {
      id: "userpresenterts",
      children: createVNode(_components.code, {
        children: "UserPresenter.ts"
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
            children: " UserInteractor "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "./UserInteractor"'
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserPresenter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  private"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " interactor"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserInteractor"
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
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "interactor"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserInteractor"
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
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".interactor "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " interactor;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  getUsers"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[] {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".interactor."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getUsers"
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
            children: "  }"
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UserPresenter;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "entity",
      children: "Entity"
    }), "\n", createVNode(_components.h4, {
      id: "userentityts",
      children: createVNode(_components.code, {
        children: "UserEntity.ts"
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " interface"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  id"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " number"
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
            children: "  name"
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
            children: "  email"
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
      id: "router",
      children: "Router"
    }), "\n", createVNode(_components.h4, {
      id: "userrouterts",
      children: createVNode(_components.code, {
        children: "UserRouter.ts"
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
            children: " UserPresenter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "./UserPresenter"'
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserRouter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  private"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " presenter"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserPresenter"
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
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "presenter"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " UserPresenter"
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
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".presenter "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " presenter;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  getUsers"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " User"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[] {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".presenter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getUsers"
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
            children: "  }"
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UserRouter;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["En este ejemplo, se puede ver la implementaci\xF3n del m\xF3dulo de ", createVNode(_components.strong, {
        children: "Usuarios"
      }), " utilizando el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), ". La capa de ", createVNode(_components.strong, {
        children: "View"
      }), " se encarga de renderizar la interfaz de usuario y de recibir las interacciones del usuario. La capa de ", createVNode(_components.strong, {
        children: "Interactor"
      }), " se encarga de contener la l\xF3gica de negocio y de manipular los datos. La capa de ", createVNode(_components.strong, {
        children: "Presenter"
      }), " se encarga de preparar los datos para ser mostrados en la capa de ", createVNode(_components.strong, {
        children: "View"
      }), " y de manejar las interacciones del usuario. La capa de ", createVNode(_components.strong, {
        children: "Entity"
      }), " se encarga de contener los datos de la aplicaci\xF3n. La capa de ", createVNode(_components.strong, {
        children: "Router"
      }), " se encarga de contener la l\xF3gica de navegaci\xF3n de la aplicaci\xF3n."]
    }), "\n", createVNode(_components.h2, {
      id: "cuando-aplicar-viper",
      children: "Cuando aplicar VIPER"
    }), "\n", createVNode(_components.p, {
      children: ["Por favor, no aplique de forma bruta y sin sentido ", createVNode(_components.strong, {
        children: "VIPER"
      }), ", para aplicarlo correctamente al proyecto, requiere pasar previamente por un an\xE1lisis de requerimientos, y visualizar que capas se pueden separar y que capas se pueden unir, reutilizar, escalar, mantener, probar, depurar, auditar, mejorar, colaborar, entender."]
    }), "\n", createVNode(_components.p, {
      children: ["Antes de emocionarse y aplicar ", createVNode(_components.strong, {
        children: "VIPER"
      }), " a su proyecto, analice previamente si puede separar las responsabilidades de las diferentes capas de la aplicaci\xF3n y de utilizar interfaces para comunicar entre ellas, esto permitir\xE1 que el c\xF3digo sea m\xE1s modular, reutilizable y f\xE1cil de mantener, adem\xE1s de que facilitar\xE1 la escritura de pruebas unitarias y la escalabilidad del c\xF3digo."]
    }), "\n", createVNode(_components.p, {
      children: ["Debido a que una de las mayores desventajas de ", createVNode(_components.strong, {
        children: "VIPER"
      }), " es que si no se define previamente un m\xF3dulo puede ser una tarea tediosa estar reimplementando el patr\xF3n ", createVNode(_components.strong, {
        children: "VIPER"
      }), " en cada m\xF3dulo y estar separando algo que desde un inicio debio ser separado, para ello use el sentido com\xFAn y aplique ", createVNode(_components.strong, {
        children: "VIPER"
      }), " en los m\xF3dulos que realmente lo necesiten."]
    }), "\n", createVNode(_components.h2, {
      id: "cuando-no-aplicar-viper",
      children: "Cuando no aplicar VIPER"
    }), "\n", createVNode(_components.p, {
      children: ["No aplique ", createVNode(_components.strong, {
        children: "VIPER"
      }), " a su proyecto si no necesita separar las responsabilidades de las diferentes capas de la aplicaci\xF3n y de utilizar interfaces para comunicar entre ellas, esto solo complicar\xE1 el dise\xF1o de la aplicaci\xF3n y har\xE1 que el c\xF3digo sea m\xE1s dif\xEDcil de mantener y de entender."]
    }), "\n", createVNode(_components.p, {
      children: ["No aplique ", createVNode(_components.strong, {
        children: "VIPER"
      }), " a su proyecto si no necesita que el c\xF3digo sea m\xE1s modular, reutilizable y f\xE1cil de mantener, ya que esto solo agregar\xE1 complejidad innecesaria al dise\xF1o de la aplicaci\xF3n y har\xE1 que el c\xF3digo sea m\xE1s dif\xEDcil de entender y de depurar."]
    }), "\n", createVNode(_components.p, {
      children: ["No aplique ", createVNode(_components.strong, {
        children: "VIPER"
      }), " a su proyecto si no necesita facilitar la escritura de pruebas unitarias y la escalabilidad del c\xF3digo, ya que esto solo agregar\xE1 complejidad innecesaria al dise\xF1o de la aplicaci\xF3n y har\xE1 que el c\xF3digo sea m\xE1s dif\xEDcil de probar y de auditar."]
    }), "\n", createVNode(_components.p, {
      children: ["No aplique ", createVNode(_components.strong, {
        children: "VIPER"
      }), " a su proyecto si no necesita que diferentes equipos de desarrollo trabajen en paralelo en diferentes partes de la aplicaci\xF3n, ya que esto solo agregar\xE1 complejidad innecesaria al dise\xF1o de la aplicaci\xF3n y har\xE1 que el c\xF3digo sea m\xE1s dif\xEDcil de colaborar y de entender."]
    }), "\n", createVNode(_components.h2, {
      id: "consejos",
      children: "Consejos"
    }), "\n", createVNode(_components.p, {
      children: ["Como programadores es facil e incluso tentativo empezar a crear carpetas, archivo y codigo, pero con ", createVNode(_components.strong, {
        children: "VIPER"
      }), " es importante primero visualizar y analizar los requerimientos, y luego empezar a crear las carpetas, archivos y codigo. No se apresure, t\xF3mese su tiempo para analizar los requerimientos y para dise\xF1ar la arquitectura de la aplicaci\xF3n, esto le ayudar\xE1 a tomar decisiones m\xE1s acertadas y a evitar problemas en el futuro. Sea anal\xEDtico, visualice, piense, analice, dise\xF1e, cree, pruebe, depure, audite, mejore, colabore, entienda."]
    }), "\n", createVNode(_components.p, {
      children: ["Arrancar con ", createVNode(_components.strong, {
        children: "VIPER"
      }), " puede ser un poco complicado al principio, e incluso tomar mucho tiempo, (el cual es una ventaja y desventaja), pero gracias al tiempo que invierta en el dise\xF1o de la arquitectura de la aplicaci\xF3n, le permitir\xE1 tener un c\xF3digo m\xE1s modular, reutilizable y f\xE1cil de mantener, ademas de que facilitar\xE1 la escritura de pruebas unitarias y la escalabilidad del c\xF3digo. Asi que no caiga en el error de que por prisas o por querer terminar r\xE1pido, no analice y no dise\xF1e correctamente la arquitectura de la aplicaci\xF3n, es importante arrancar correctamente ya que son los pilares de la aplicaci\xF3n, todos estar\xE1n basados en la arquitectura de la aplicaci\xF3n, asi que sea cuidadoso y anal\xEDtico."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Piense en equipo"
        }), ", ", createVNode(_components.strong, {
          children: "piense en la comunidad"
        }), ", ", createVNode(_components.strong, {
          children: "piense en el futuro"
        }), "."]
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
const url = "src/content/writing/arquitectura-viper-para-programadores-en-react.mdx";
const file = "C:/Users/Omar/Documents/sazarsource/src/content/writing/arquitectura-viper-para-programadores-en-react.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Omar/Documents/sazarsource/src/content/writing/arquitectura-viper-para-programadores-en-react.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
