# Art Theme

Beautiful blog template with Astro.

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/npmrun/art-theme)

## Demo

https://art-theme.netlify.app/

## Development

```
node: 16.15.0
npm: 8.5.5
```

## CHANGLOG

### 2023-03-13

1. Upgrade all dependencies to newest
2. Fix known bugs
3. Change flowchat.js to mermaid, support flow and sequence
4. Change LaTeX to MathJax
5. Change default article theme to github theme
6. Default hidden TOC
7. disable astro-icon
8. disable hack code
9. Change npm to pnpm

### Secuencia adecuada de implementación

-   Cuando hayas realizado cambios, ejecuta `npm run dev` para iniciar el servidor local y verificar los cambios en tiempo real. Una vez que hayas revisado los cambios y estés satisfecho, detén el servidor local con Ctrl + C.
-   Luego, utiliza `git add .` para agregar los cambios al área de preparación.
-   Realiza un commit de los cambios en el repositorio local con `git commit -m "x"`.
-   Después de confirmar los cambios, ejecuta `npm run build` para compilar y preparar el sitio para producción.
-   A continuación, inicia el servidor de producción con `npm start` para asegurarte de que todo funcione correctamente en el entorno de producción; si va bien, entonces detén el servidor local con Ctrl + C.
-   Si todo está bien, procede con `git push` para enviar los cambios al repositorio remoto.
