import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  json,
  useLoaderData,
  useCatch,
  ScrollRestoration,
  LoaderFunction,
  LinksFunction,
  MetaFunction
} from 'remix';
import type { MetaFunction } from 'remix';
import { ThemeProvider, useTheme, PreventFlashOnWrongTheme, Theme } from 'remix-themes';
import { themeSessionResolver } from './services/theme.server';
import { isDevelopment } from './utils/enviroment';

import styles from './styles/tailwind.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({ title: 'New Remix App' });

export type LoaderData = {
  requestInfo: {
    session: {
      theme: Theme | null;
    };
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  const data: LoaderData = {
    requestInfo: {
      session: {
        theme: getTheme()
      }
    }
  };

  return json(data);
};

function App() {
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  return (
    <html lang='en' className={theme ?? ''}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.requestInfo.session.theme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.requestInfo.session.theme} themeAction='action/set-theme'>
      <App />
    </ThemeProvider>
  );
}

// best effort, last ditch error boundary. This should only catch root errors
// all other errors should be caught by the index route which will include
// the footer and stuff, which is much better.
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html lang='en'>
      <head>
        <title>Oh no...</title>
        <Meta />
        <Links />
      </head>
      <body className='bg-primary'>
        {/* <ServerError error={error} /> */}
        500
      </body>
      <Scripts />
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  console.error('CatchBoundary', caught);
  if (caught.status === 404) {
    return (
      <html lang='en'>
        <head>
          <title>Oh no...</title>
          <Meta />
          <Links />
        </head>
        <body className='bg-primary'>
          {/*  */}
          404
        </body>
        <Scripts />
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
