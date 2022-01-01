var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/v0/Sites/poc/my-remix-app/demo/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => AppWithProviders,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_remix_themes3 = __toModule(require("remix-themes"));
var import_classnames = __toModule(require("classnames"));

// app/services/theme.server.ts
init_react();
var import_remix2 = __toModule(require_remix());
var import_remix_themes = __toModule(require("remix-themes"));
var themeSessionResolver = (0, import_remix_themes.createThemeSessionResolver)((0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "willin_theme",
    secure: true,
    sameSite: "lax",
    secrets: ["wi11inw2n9"],
    path: "/",
    expires: new Date(new Date().getTime() + 864e5 * 36500),
    httpOnly: true
  }
}));

// app/components/navbar/theme-toggle.tsx
init_react();
var import_react = __toModule(require("react"));
var import_remix_themes2 = __toModule(require("remix-themes"));

// app/components/navbar/svg.tsx
init_react();
var import_framer_motion = __toModule(require("framer-motion"));
var transition = {
  type: "spring",
  stiffness: 200,
  damping: 10
};
var whileTap = {
  scale: 0.95,
  rotate: 15
};
var MoonIcon = () => {
  const variants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0, transition },
    whileTap
  };
  return /* @__PURE__ */ React.createElement(import_framer_motion.motion.svg, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 50 50",
    key: "moon"
  }, /* @__PURE__ */ React.createElement(import_framer_motion.motion.path, {
    d: "M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",
    fill: "currentColor",
    initial: "initial",
    animate: "animate",
    whileTap: "whileTap",
    variants
  }));
};
var SunIcon = () => {
  const raysVariants = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition }
  };
  const coreVariants = {
    initial: { scale: 1.5 },
    animate: { scale: 1, transition }
  };
  return /* @__PURE__ */ React.createElement(import_framer_motion.motion.svg, {
    key: "sun",
    width: "1em",
    height: "1em",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    whileTap,
    style: { originX: "50%", originY: "50%" }
  }, /* @__PURE__ */ React.createElement(import_framer_motion.motion.circle, {
    cx: "25",
    cy: "25",
    r: "12",
    fill: "currentColor",
    initial: "initial",
    animate: "animate",
    variants: coreVariants
  }), /* @__PURE__ */ React.createElement(import_framer_motion.motion.g, {
    initial: "initial",
    animate: "animate",
    variants: raysVariants
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "6.437125",
    cy: "14.2813",
    r: "3.5655",
    transform: "rotate(-60 6.437125 14.2813)",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "6.438125",
    cy: "35.7158",
    r: "3.5655",
    transform: "rotate(-120 6.438125 35.7158)",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "25",
    cy: "46.4335",
    r: "3.5655",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "43.5627",
    cy: "35.7158",
    r: "3.5655",
    transform: "rotate(-60 43.5627 35.7158)",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "43.5627",
    cy: "14.2823",
    r: "3.5655",
    transform: "rotate(-120 43.5627 14.2823)",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "25",
    cy: "3.5655",
    r: "3.5655",
    fill: "currentColor"
  })));
};

// app/components/navbar/theme-toggle.tsx
var useLoaded = () => {
  const [loaded, setLoaded] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => setLoaded(true), []);
  return loaded;
};
function ThemeToggle() {
  const [theme, setTheme] = (0, import_remix_themes2.useTheme)();
  const loaded = useLoaded();
  return /* @__PURE__ */ React.createElement("button", {
    "aria-label": "Toggle Theme",
    type: "button",
    title: "Toggle Theme",
    onClick: () => setTheme(theme === import_remix_themes2.Theme.DARK ? import_remix_themes2.Theme.LIGHT : import_remix_themes2.Theme.DARK)
  }, theme === import_remix_themes2.Theme.DARK && loaded && /* @__PURE__ */ React.createElement(SunIcon, null), theme === import_remix_themes2.Theme.LIGHT && loaded && /* @__PURE__ */ React.createElement(MoonIcon, null));
}

// app/components/navbar/locale-toggle.tsx
init_react();
function LocaleToggle() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null));
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IGRBCY6P.css";

// route-module:/Users/v0/Sites/poc/my-remix-app/demo/app/root.tsx
var links = () => [
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({ title: "New Remix App" });
var loader = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  const data = {
    requestInfo: {
      session: {
        theme: getTheme()
      }
    }
  };
  return (0, import_remix3.json)(data);
};
function App() {
  const data = (0, import_remix3.useLoaderData)();
  const [theme = "dark"] = (0, import_remix_themes3.useTheme)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: (0, import_classnames.default)(theme),
    "data-theme": theme === "light" ? "bumblebee" : "cyberpunk"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix_themes3.PreventFlashOnWrongTheme, {
    ssrTheme: Boolean(data.requestInfo.session.theme)
  }), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    id: "background",
    className: "dark:dark-bg"
  }), /* @__PURE__ */ React.createElement("div", {
    id: "app",
    className: "pt-8 px-8 w-full max-w-5xl mx-auto backdrop-blur-sm rounded-lg"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-between items-center w-full mx-auto"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "#####"), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "#####"), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "#####"), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "#####")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ThemeToggle, null), /* @__PURE__ */ React.createElement(LocaleToggle, null))), /* @__PURE__ */ React.createElement("main", {
    id: "skip",
    className: "py-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "badge"
  }, "neutral"), /* @__PURE__ */ React.createElement("div", {
    className: "badge badge-primary"
  }, "primary"), /* @__PURE__ */ React.createElement("div", {
    className: "badge badge-secondary"
  }, "secondary"), /* @__PURE__ */ React.createElement("div", {
    className: "badge badge-accent"
  }, "accent"), /* @__PURE__ */ React.createElement("div", {
    className: "badge badge-ghost"
  }, "ghost"), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null))), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), false));
}
function AppWithProviders() {
  const data = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_remix_themes3.ThemeProvider, {
    specifiedTheme: data.requestInfo.session.theme,
    themeAction: "action/set-theme"
  }, /* @__PURE__ */ React.createElement(App, null));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no..."), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-primary"
  }, "500"), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null));
}
function CatchBoundary() {
  const caught = (0, import_remix3.useCatch)();
  console.error("CatchBoundary", caught);
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("html", {
      lang: "en"
    }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no..."), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
      className: "bg-primary"
    }, "404"), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null));
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

// route-module:/Users/v0/Sites/poc/my-remix-app/demo/app/routes/action/set-theme.tsx
var set_theme_exports = {};
__export(set_theme_exports, {
  action: () => action
});
init_react();
var import_remix_themes4 = __toModule(require("remix-themes"));
var action = (0, import_remix_themes4.createThemeAction)(themeSessionResolver);

// route-module:/Users/v0/Sites/poc/my-remix-app/demo/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/services/blog.server.ts
init_react();
var import_promises = __toModule(require("fs/promises"));
var import_path = __toModule(require("path"));
async function getPostsList({ locale, type }) {
  const contentDir = (0, import_path.resolve)("content", type);
  const postDirs = await (0, import_promises.readdir)(contentDir);
  const posts = [];
  for (const postDir of postDirs) {
    const contentPath = (0, import_path.join)(contentDir, postDir);
    const postPath = (0, import_path.join)(contentPath, `${locale}.mdx`);
    const source = await (0, import_promises.readFile)(postPath, { encoding: "utf-8" });
    posts.push({ title: source });
  }
  return posts;
}

// route-module:/Users/v0/Sites/poc/my-remix-app/demo/app/routes/blog/index.tsx
var loader2 = async () => {
  const posts = await getPostsList({
    locale: "cn",
    type: "blog"
  });
  console.log(posts);
  return (0, import_remix4.json)({ posts });
};
function Index() {
  const { posts } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.title
  }, post.title)));
}

// route-module:/Users/v0/Sites/poc/my-remix-app/demo/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement(ThemeToggle, null), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/action/set-theme": {
    id: "routes/action/set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: set_theme_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
