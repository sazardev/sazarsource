import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro/server_DNwvyA0O.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_1m1W4OeF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Arquitectura Limpia para programadores",
  "description": "Facil de entender",
  "pubDate": "18 Oct 2024"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "capas-de-la-arquitectura-limpia",
    "text": "Capas de la Arquitectura Limpia"
  }, {
    "depth": 3,
    "slug": "capa-de-entidades",
    "text": "Capa de Entidades"
  }, {
    "depth": 4,
    "slug": "ejemplo",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "capa-de-casos-de-uso",
    "text": "Capa de Casos de Uso"
  }, {
    "depth": 4,
    "slug": "ejemplo-1",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "capa-de-controladores",
    "text": "Capa de Controladores"
  }, {
    "depth": 4,
    "slug": "ejemplo-2",
    "text": "Ejemplo"
  }, {
    "depth": 3,
    "slug": "capa-de-interfaces",
    "text": "Capa de Interfaces"
  }, {
    "depth": 4,
    "slug": "ejemplo-3",
    "text": "Ejemplo"
  }, {
    "depth": 2,
    "slug": "reflexiones",
    "text": "Reflexiones"
  }, {
    "depth": 3,
    "slug": "ventajas",
    "text": "Ventajas"
  }, {
    "depth": 3,
    "slug": "desventajas",
    "text": "Desventajas"
  }, {
    "depth": 3,
    "slug": "recomendaciones",
    "text": "Recomendaciones"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["La ", createVNode(_components.code, {
        children: "Arquitectura Limpia"
      }), " es la mas famosa de las arquitecturas en la actualidad, debido a la longevidad que ha sostenido en el tiempo y la cantidad de aplicaciones que han sido desarrolladas bajo este paradigma. La ", createVNode(_components.code, {
        children: "Arquitectura Limpia"
      }), " es una arquitectura que se enfoca en la separaci\xF3n de responsabilidades y la facilidad de mantenimiento del c\xF3digo."]
    }), "\n", createVNode(_components.p, {
      children: "Aunque la arquitectura limpia en cierto punto es mas una filosof\xEDa que una arquitectura en si, en esta gu\xEDa se tomar\xE1 una idea de como se estructura una aplicaci\xF3n bajo este paradigma."
    }), "\n", createVNode(_components.p, {
      children: "Los puntos claves para entender la arquitectura limpia y diferenciarla del resto, es que debe visualizar la aplicaci\xF3n como una serie de capas, donde cada capa tiene una responsabilidad espec\xEDfica y no puede interactuar con las capas adyacentes. Que quiere decir esto? Visualicemos la siguiente imagen:"
    }), "\n", createVNode(_components.p, {
      children: ["No se sienta abrumado en este momento en entender cada concepto que existe en cada capa de la ", createVNode(_components.code, {
        children: "Arquitectura Limpia"
      }), ", opte mejor por visualizar la ", createVNode(_components.code, {
        children: "Arquitectura Limpia"
      }), " como una cebolla, donde cada capa es una capa de la cebolla, y supongamos que desea remover una capa de la cebolla, al removerlo no afecto a las demas capaz, incluso si usted esta demente, puede ponerle la capa de otra cebolla y seguir\xEDa siendo una cebolla cubierto por otra capa. En teor\xEDa, este ejemplo es una analog\xEDa de como se debe comportar una aplicaci\xF3n bajo la ", createVNode(_components.code, {
        children: "Arquitectura Limpia"
      }), ", donde no importa si remueves una capa de la aplicaci\xF3n, la aplicaci\xF3n sigue siendo funcional, siempre y cuando se respeten las capas dentro de s\xED."]
    }), "\n", createVNode(_components.p, {
      children: ["Entonces, mientras este leyendo sobre la funcionalidad y proposito de cada capa, se le solicita que visualice a esto como una ", createVNode(_components.strong, {
        children: "cebolla"
      }), " y que si quiere quitarle el centro a la cebolla, entonces tendr\xE1 que remover todas las capas."]
    }), "\n", createVNode(_components.h2, {
      id: "capas-de-la-arquitectura-limpia",
      children: "Capas de la Arquitectura Limpia"
    }), "\n", createVNode(_components.p, {
      children: ["Visualizando entonces la imagen previamente mostrada, se explicara cada capa de la ", createVNode(_components.code, {
        children: "Arquitectura Limpia"
      }), " desde su nucleo para comprender cada una, y que distintos prop\xF3sitos cumplen cada capa de nuestra ", createVNode(_components.code, {
        children: "cebolla"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "capa-de-entidades",
      children: "Capa de Entidades"
    }), "\n", createVNode(_components.p, {
      children: ["La capa de entidades (donde entidades podermos entender como modelos de datos o incluso un objeto) es la capa m\xE1s interna de la ", createVNode(_components.code, {
        children: "Arquitectura Limpia"
      }), ", y es la capa que contiene los modelos de datos que se utilizan en la aplicaci\xF3n. Estos modelos de datos son los que se utilizan para representar los datos que se almacenan en la base de datos, y son los que se utilizan para representar los datos en nuestra aplicacion."]
    }), "\n", createVNode(_components.p, {
      children: "Por ejemplo, si se tiene una aplicaci\xF3n de carrito de compras, la capa de entidades es la que contiene los modelos de datos que se utilizan para representar los productos que se venden en la aplicaci\xF3n, los usuarios que utilizan la aplicaci\xF3n, etc."
    }), "\n", createVNode(_components.p, {
      children: ["Es la capa inicial, y la que cimienta las bases de la aplicaci\xF3n, por lo que es importante que esta capa sea lo m\xE1s independiente posible de las dem\xE1s capas de la aplicaci\xF3n, pero a su vez, hay que tener muchisimo cuidado, aunque suena contraproducente, en la ", createVNode(_components.code, {
        children: "CAPA DE ENTIDADES NO DEBE EXISTIR LA LOGICA DE NEGOCIO"
      }), ", ya que esta capa es la que se encarga de representar los datos de la aplicaci\xF3n, y no de realizar operaciones con ellos."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Nota:"
        }), " La razon del porque no debe existir l\xF3gica de negocio en la capa de entidades, es porque si se tiene l\xF3gica de negocio en la capa de entidades, se estar\xEDa mezclando la l\xF3gica de negocio con la representaci\xF3n de los datos, esto puede resultar fatal en el futuro, ya que si se desea cambiar la l\xF3gica de negocio, se tendr\xEDa que cambiar la representaci\xF3n de los datos, y viceversa. ", createVNode(_components.code, {
          children: "Y como muchos sabemos, cambiar el BackEnd es mas costoso que hacerlo desde 0"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo",
      children: "Ejemplo"
    }), "\n", createVNode(_components.p, {
      children: ["A un programador le pidieron que creara una aplicaci\xF3n de carrito de compras, y el programador decidi\xF3 crear una clase ", createVNode(_components.code, {
        children: "Producto"
      }), " que representara los productos que se venden en la aplicaci\xF3n. Esta clase es un ejemplo de una entidad, y a su vez es lo suficientemente generica para que pueda ser utilizada en cualquier aplicaci\xF3n de carrito de compras, y esa es ", createVNode(_components.code, {
        children: "exactamente la idea de la capa de entidades"
      }), ", mantener los modelos de datos lo m\xE1s generico posible para que puedan ser utilizados en cualquier aplicaci\xF3n, en cualquier momento."]
    }), "\n", createVNode(_components.h3, {
      id: "capa-de-casos-de-uso",
      children: "Capa de Casos de Uso"
    }), "\n", createVNode(_components.p, {
      children: ["La capa de casos de uso es la capa que contiene la logica de negocio de la aplicaci\xF3n. Esta capa es la que se encarga de orquestar las acciones que se deben realizar en la aplicaci\xF3n. Por ejemplo, si se tiene una aplicaci\xF3n de carrito de compras, la capa de casos de uso es la que se encarga de ", createVNode(_components.code, {
        children: "orquestar"
      }), " las acciones de agregar un producto al carrito, eliminar un producto del carrito, etc."]
    }), "\n", createVNode(_components.p, {
      children: ["Es una capa un tanto dificil de comprender, pero expliquemos punto por punto de la explicacion anterior. Al referirnos con ", createVNode(_components.code, {
        children: "Orquestar"
      }), ", es digamos, el encargado de mandar a las demas capas, a esta capa le gusta tener totalmente separado a todos para que no se hablen entre si, pero a el le gusta hablarle a los demas y a su vez es como el recadero de la aplicaci\xF3n, si se quiere realizar una acci\xF3n, se le pide a esta capa que lo haga, y esta capa se encargara de mandarle la orden a la capa que corresponda."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo-1",
      children: "Ejemplo"
    }), "\n", createVNode(_components.p, {
      children: "Siguiendo con el ejemplo de la aplicaci\xF3n de carrito de compras, si se desea agregar un producto al carrito, la capa de casos de uso es la que se encarga de orquestar esta acci\xF3n. Esta capa se encargar\xE1 de verificar si el producto que se desea agregar al carrito existe, si el producto est\xE1 disponible, si el usuario tiene permiso para agregar el producto al carrito, etc."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Nota:"
        }), " Para un programador entiende cuando se le dice ", createVNode(_components.code, {
          children: "requerimientos"
        }), ", ", createVNode(_components.code, {
          children: "peticion"
        }), ", pero cuando se habla de ", createVNode(_components.code, {
          children: "logica de negocio"
        }), ", no se abrume, es exactamente lo mismo. Si tu superior solicita por ejemplo en el caso de ejemplo: \u201CCuando se agregue un producto al carrito de compras, debe enviar una notificacion X usuario que lo agrego\u201D, quiza hasta lo vea innecesario, pero eso es exactamente la ", createVNode(_components.code, {
          children: "logica de negocio"
        }), ", peticiones precisas de la aplicacion."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "capa-de-controladores",
      children: "Capa de Controladores"
    }), "\n", createVNode(_components.p, {
      children: "La capa de controladores es la capa que se encarga de recibir las peticiones del usuario y de enviar las respuestas al usuario. Vealo como la capa que se encarga de manejar la comunicaci\xF3n entre el usuario y la aplicaci\xF3n. Por ejemplo, si se tiene una aplicaci\xF3n de carrito de compras, la capa de controladores es la que se encarga de recibir las peticiones del usuario para agregar un producto al carrito, eliminar un producto del carrito, etc."
    }), "\n", createVNode(_components.p, {
      children: ["Quiza este confuso en este punto, debido a que puede sonar muy similar con la ", createVNode(_components.code, {
        children: "Capa de Casos de Uso"
      }), ", pero la diferencia radica en que la ", createVNode(_components.code, {
        children: "Capa de Controladores"
      }), " es la que se encarga de recibir las peticiones del usuario, y la ", createVNode(_components.code, {
        children: "Capa de Casos de Uso"
      }), " es la que se encarga de orquestar las acciones que se deben realizar en la aplicaci\xF3n. No se preocupe si aun no entiende esto mismo, ", createVNode(_components.code, {
        children: "Clean Architecture"
      }), " esta mas pensado para un ", createVNode(_components.strong, {
        children: "Project Manager"
      }), " que para un programador, asi que veamos un ejemplo para entenderlo mejor a nivel desarrollador."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo-2",
      children: "Ejemplo"
    }), "\n", createVNode(_components.p, {
      children: "Siguiendo con el ejemplo de la aplicaci\xF3n de carrito de compras, si se desea agregar un producto al carrito, la capa de controladores es la que se encarga de recibir la petici\xF3n del usuario para agregar un producto al carrito. Esta capa se encargar\xE1 de verificar si el producto que se desea agregar al carrito existe, si el producto est\xE1 disponible, si el usuario tiene permiso para agregar el producto al carrito, etc."
    }), "\n", createVNode(_components.p, {
      children: ["Vea la ", createVNode(_components.code, {
        children: "Capa de Controladores"
      }), " como nuestra barrera de seguridad ante el usuario, ya que si tenemos un sistema de autenticaci\xF3n, la ", createVNode(_components.code, {
        children: "Capa de Controladores"
      }), " es la que se encarga de verificar si el usuario esta autenticado, si tiene permisos para realizar la acci\xF3n que desea realizar, etc. Mientras que la ", createVNode(_components.code, {
        children: "Capa de Casos de Uso"
      }), " es la que se encarga que el producto ", createVNode(_components.strong, {
        children: "CUMPLA"
      }), " con las reglas del negocio."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Usted pensara y se cuestionara: \u201CPero si la ", createVNode(_components.code, {
          children: "Capa de Controladores"
        }), " se encarga de verificar si el usuario esta autenticado, \xBFPor qu\xE9 no lo hace la ", createVNode(_components.code, {
          children: "Capa de Casos de Uso"
        }), "?\u201D, y la respuesta es simple, la ", createVNode(_components.code, {
          children: "Capa de Controladores"
        }), " es la que ", createVNode(_components.code, {
          children: "CONTROLA"
        }), " la aplicacion, pero la ", createVNode(_components.code, {
          children: "Capa de Casos de Uso"
        }), " es la que se encarga de verificar si se ", createVNode(_components.code, {
          children: "RESPETA"
        }), " la regla del negocio. Asi que anote: ", createVNode(_components.code, {
          children: "Capa de Controladores"
        }), " = ", createVNode(_components.code, {
          children: "Casos genericos CRUD"
        }), ", ", createVNode(_components.code, {
          children: "Capa de Casos de Uso"
        }), " = ", createVNode(_components.code, {
          children: "Reglas de Negocio"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "capa-de-interfaces",
      children: "Capa de Interfaces"
    }), "\n", createVNode(_components.p, {
      children: "La capa de interfaces es la capa que se encarga de comunicarse con el exterior de la aplicaci\xF3n. Esta capa es la que se encarga de recibir las peticiones del usuario y de enviar las respuestas al usuario. Por ejemplo, si se tiene una aplicaci\xF3n de carrito de compras, la capa de interfaces es la que se encarga de recibir las peticiones del usuario para agregar un producto al carrito, eliminar un producto del carrito, etc."
    }), "\n", createVNode(_components.p, {
      children: ["Esta es la capa mas sencilla e intuitiva de entender, ya que es la encargada de literalmente, la interaccion final con el usuario. Si se tiene una aplicaci\xF3n web, la ", createVNode(_components.code, {
        children: "Capa de Interfaces"
      }), " es la que se encarga de recibir las peticiones del usuario a traves de la web, y de enviar las respuestas al usuario a traves de la web. Pero debe tomar en cuenta algunas consideraciones en esta capa que no debe pasar por alto."]
    }), "\n", createVNode(_components.p, {
      children: ["Para ", createVNode(_components.code, {
        children: "Clean Architecture"
      }), ", la ", createVNode(_components.code, {
        children: "Capa de Interfaces"
      }), " debe ser lo m\xE1s independiente posible de las dem\xE1s capas de la aplicaci\xF3n, es decir, la ", createVNode(_components.code, {
        children: "UI"
      }), " debe ser completamente agnostico de todo lo que hay debajo de ella, debe centrarse ", createVNode(_components.code, {
        children: "UNICAMENTE"
      }), " en lo que compete que es la interaccion, gestionar el estado de la aplicacion, etc. Pero no debe preocuparse por la logica de negocio, ni por la representacion de los datos, ni por la orquestacion de las acciones, etc. Las demas capas lo haran para el, asi que quiza sea la mas dificil de seguir, porque en esta fase se suele mezclar todo, sea sumamente cuidadoso en esta capa ya que es la que mas problemas puede traer en el futuro si se aplica mal."]
    }), "\n", createVNode(_components.h4, {
      id: "ejemplo-3",
      children: "Ejemplo"
    }), "\n", createVNode(_components.p, {
      children: ["Siguiendo con el ejemplo de la aplicaci\xF3n de carrito de compras, si se desea agregar un producto al carrito, la capa de interfaces es la que se encarga de recibir la petici\xF3n del usuario para agregar un producto al carrito, donde le hablara a la ", createVNode(_components.code, {
        children: "Capa de Controladores"
      }), " para que se encargue de verificar si el producto que se desea agregar al carrito existe, en caso de que no el controlador debe responder a la ", createVNode(_components.code, {
        children: "Capa de Interfaces"
      }), " que el producto no existe, y la ", createVNode(_components.code, {
        children: "Capa de Interfaces"
      }), " se encargara de mostrarle al usuario que el producto no existe."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Visualice a la ", createVNode(_components.code, {
          children: "Capa de Interfaces"
        }), " como un mesero, un mesero no sabe como se cocina la comida, ni como se prepara, ni como se sirve, ni como se paga, el mesero solo se encarga de llevar la comida al cliente, y de llevar el pedido del cliente al cocinero, y de llevar la cuenta al cliente. En esta capa si la implementas, imagina que eres un mesero: ", createVNode(_components.code, {
          children: "No se preocupe por lo que pasa en la cocina, ni por lo que pasa en la caja, solo preoc\xFApese por llevar la comida al cliente, y llevar el pedido del cliente al cocinero"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "reflexiones",
      children: "Reflexiones"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "Clean Architecture"
      }), " es una poderosa arquitectura que se enfoca en la separaci\xF3n de responsabilidades y la facilidad de mantenimiento del c\xF3digo. Pero no se sienta abrumado si no entiende completamente la arquitectura, ya que es una arquitectura que se enfoca m\xE1s en la filosof\xEDa que en la implementaci\xF3n, y es una arquitectura que se enfoca m\xE1s en el ", createVNode(_components.code, {
        children: "Project Manager"
      }), " que en el ", createVNode(_components.code, {
        children: "Programador"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "ventajas",
      children: "Ventajas"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Facilidad de mantenimiento del c\xF3digo."
      }), "\n", createVNode(_components.li, {
        children: "Separaci\xF3n de responsabilidades."
      }), "\n", createVNode(_components.li, {
        children: "Escalabilidad de la aplicaci\xF3n."
      }), "\n", createVNode(_components.li, {
        children: "Facilidad de pruebas unitarias."
      }), "\n", createVNode(_components.li, {
        children: "Facilidad de pruebas de integraci\xF3n."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "desventajas",
      children: "Desventajas"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Curva de aprendizaje."
      }), "\n", createVNode(_components.li, {
        children: "Dificultad de implementaci\xF3n."
      }), "\n", createVNode(_components.li, {
        children: "Dificultad de mantenimiento."
      }), "\n", createVNode(_components.li, {
        children: "Se requiere de un equipo de desarrollo experimentado."
      }), "\n", createVNode(_components.li, {
        children: ["Se necesita de un ", createVNode(_components.code, {
          children: "Project Manager"
        }), " experimentado."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "recomendaciones",
      children: "Recomendaciones"
    }), "\n", createVNode(_components.p, {
      children: ["Opte por esta arquitectura si su aplicaci\xF3n es de gran escala, y si su aplicaci\xF3n requiere de una alta escalabilidad. Pero si su aplicaci\xF3n es de peque\xF1a escala, y si su aplicaci\xF3n no requiere de una alta escalabilidad, opte por una arquitectura m\xE1s sencilla, como ", createVNode(_components.code, {
        children: "MVC"
      }), ". Pero como saber si su aplicaci\xF3n es de gran escala o de peque\xF1a escala? Si de paso ya esta visualizando que existiran multiples modulos, pero ", createVNode(_components.code, {
        children: "ADEMAS"
      }), " si la aplicacion necesita o se pensara tener a un ", createVNode(_components.code, {
        children: "EQUIPO"
      }), " grande de desarrollo, entonces definitivamente opte por ", createVNode(_components.code, {
        children: "Clean Architecture"
      }), "."]
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
const url = "src/content/writing/arquitectura-limpia-para-programadores.mdx";
const file = "C:/Users/Omar/Documents/sazarsource/src/content/writing/arquitectura-limpia-para-programadores.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Omar/Documents/sazarsource/src/content/writing/arquitectura-limpia-para-programadores.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
