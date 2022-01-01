import { Links, LiveReload, Meta, Outlet, Scripts, json, useLoaderData, useCatch, ScrollRestoration } from 'remix';
import type { LoaderFunction, LinksFunction, MetaFunction, MetaFunction } from 'remix';
import { ThemeProvider, useTheme, PreventFlashOnWrongTheme, type Theme } from 'remix-themes';
import cls from 'classnames';
import { themeSessionResolver } from './services/theme.server';

import ThemeToggle from '~/components/navbar/theme-toggle';
import LocaleToggle from './components/navbar/locale-toggle';
import Logo from './components/navbar/logo';

import styles from './styles/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'shortcut icon', href: '/favicon.ico' },
  { rel: 'stylesheet', href: styles }
];

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
  const [theme = 'dark'] = useTheme();

  return (
    <html lang='en' className={cls(theme)} data-theme={theme === 'light' ? 'retro' : 'cyberpunk'}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.requestInfo.session.theme)} />
        <Links />
      </head>
      <body>
        <div id='background' className='dark:dark-bg'></div>
        <div id='app' className='pt-8 px-8 w-full max-w-5xl mx-auto backdrop-blur-sm rounded-lg'>
          <nav className='flex justify-between items-center w-full mx-auto'>
            <div>
              <Logo />
              <a href='#'>#####</a>
              <a href='#'>#####</a>
              <a href='#'>#####</a>
              <a href='#'>#####</a>
            </div>
            <div>
              <ThemeToggle />
              <LocaleToggle />
            </div>
          </nav>

          <main id='skip' className='py-8'>
            <div className='badge'>neutral</div>
            <div className='badge badge-primary'>primary</div>
            <div className='badge badge-secondary'>secondary</div>
            <div className='badge badge-accent'>accent</div>
            <div className='badge badge-ghost'>ghost</div>

            <Outlet />
          </main>
        </div>

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
