import { createCookieSessionStorage } from 'remix';
import { createThemeSessionResolver } from 'remix-themes';
import { env, isProduction } from '~/utils/enviroment';

export const themeSessionResolver = createThemeSessionResolver(
  createCookieSessionStorage({
    cookie: {
      name: 'willin_theme',
      secure: isProduction(),
      sameSite: 'lax',
      secrets: [env('SESSION_SECRET', 'willinwang')],
      path: '/',
      expires: new Date(new Date().getTime() + 86400000 * 36500),
      httpOnly: true
    }
  })
);
