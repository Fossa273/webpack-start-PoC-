const path = require('path'); // Importa el módulo 'path' de Node.js para manejar rutas de archivos y directorios

module.exports = {
  mode: 'development',          // Establece el modo de compilación en 'development' para obtener un bundle más legible y con herramientas de depuración. Otra opcion es 'production' para optimizar el bundle final. 
  entry: './src/index.js',      // Punto de entrada de la aplicación. Webpack comenzará a construir el grafo de dependencias desde este archivo.
  output: {
    filename: 'main.js',        // Nombre del archivo de salida que contendrá el bundle generado por Webpack.
    path: path.resolve(__dirname, 'dist'),        // Directorio de salida donde se guardará el bundle. 'path.resolve' asegura que la ruta sea absoluta, combinando el directorio actual (__dirname) con 'dist'.
  },
  // Configuración del servidor de desarrollo
  devServer: {         // Configuración del servidor de desarrollo proporcionado por webpack-dev-server
    static: {
      directory: path.join(__dirname, 'dist'), // Dónde buscar los archivos estáticos (como tu index.html)
    },
    compress: true, // Habilita la compresión gzip 
    port: 9000,     // Puerto donde correrá el servidor (http://localhost:9000)
    hot: true,      // Habilita Hot Module Replacement (recarga inteligente sin refrescar toda la página)
    open: true,     // Abre el navegador automáticamente al iniciar
  },
};
