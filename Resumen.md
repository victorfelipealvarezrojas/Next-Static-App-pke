
## Notas Curso :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

## NEXT
                        Contenido estatico y generado del lado del servidor.
                        trabaja con dos tipos principales de generacion (Static Generated Server-Side Rendering ) y luego 
                        otras variantes.

                        Cambia el paradigma de SPA(single page application), los SPA no son SEO Friendly:
                            - SSR: server-side rendering
                            - SSG: static-site generation
                            - CSR: client side rendering (CLI pyt react clasicos SPA)
                            - ISR: incremental static regeneration (parecido a SSG) - estatica por un periodo de tiempo
                            - DR : dynamic routing (rutas como codigo al hacer el build de mi app)

                        SEO Friendly (Search Engine Optimization) Importancia:
                            - Ayudan a los bot de los buscadores 
                            - Impacto de la app en la web para los buscadores
                            


## Static Generated        
                        (Default) en el momento de construccion del sitio y siempre servira el mismo contenido creado ahi,
                        cuando mi pagina no cambiara es el recomandado y el ejemplo que se vera en este proyecto junto con 
                        sus variantes.


## Server-Side Rendering  
                        Cuando el cliente realiza una solicitud, no estatica


## Notas Fin :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

## Proyecto Actual :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    Esta sección es sumamente importante para comprender cómo podemos crear de forma estática páginas aunque tengan argumentos dinámicos.

    Caracteristicas a tratar:
                           - Multiples componentes de NextUI
                           - Flex Layout
                           - Temas de NextUI
                           - Next _document
                           - Navegación
                           - Parámetros por URL
                           - Parámetros estáticos
                           - Next - GetStaticProps
                                                    >Los datos necesarios para representar la página están disponibles en el momento de la compilación antes de la solicitud.
                                                    >Los datos provienen de un CMS sin cabeza.
                                                    >Los datos se pueden almacenar en caché públicamente (no específicos del usuario).
                                                    >La página debe estar pre-renderizada (para SEO) y ser muy rápida: getStaticProps genera archivos HTML y JSON, los cuales
                                                     pueden ser almacenados en caché por una CDN para el rendimiento.
                                                    >sólo una vez se va a ejecutar y luego ya no se vuelve a llamar en prod, no asi en dev
                                                    >Solo corre del lado del servidor

                           - Next - getStaticPaths -> https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
                                                    > Debe usar getStaticPaths si está pre-renderizando estáticamente páginas que usan rutas dinámicas como en [id].tsx
                                                      seran creadas de forma estatica en el build de mi app
                                                    >sólo una vez se va a ejecutar y luego ya no se vuelve a llamar en prod, no asi en dev
                                                    >Solo corre del lado del servidor
                                                    >Id dinamicos para rutas

                           - Generar 151 páginas de forma estática en tiempo de construcción (build time)

## Proyecto Fin :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

## Estructura de directorios ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

   - .next  -> despliega la app en dev & prod y se crea con  "npm" "run "build" segun pk.json

   - pages   -> como sera manejado el sistema de rutas de la app y toma el index como raiz de cada directorio
        --app.js elemento principal      

   - next.config.js -> cambios especificos de como funcionara next