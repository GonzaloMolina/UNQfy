FROM node:15
# Utiliza la imagen de node 15 como base.
# A partir de esta imagen se ejecutarán los comandos de abajo creando una nueva imagen.

# Configura variables de entorno necesariar para correr node
ENV NODE_ENV=development
ENV DEBUG=true

# Crea un directorio y nos movemos ahí
WORKDIR /home/node

ADD . / /home/node/

# Copia el package.json package-lock.json en /home/node/
COPY package.json .
COPY package-lock.json .

# Ejecuta npm install. Esto produce que se instalen todas las dependencias necearias para correr la aplicación
RUN ["npm", "install"]

# Expone el puerto 5000 donde corre la aplicación
EXPOSE 5000

# Le da permisos al usuario node para escribir en /home/node/my_node_app
# Como comentario, notar que el comando RUN nos permite ejecutar culquier comando bash valido.
RUN chown node:users /home/node/
RUN chmod -R 777 /home/node/

# Habilita el usuario node. Por defecto, los containers corren los comandos con el usuario root
USER node

VOLUME [ "/home/node/" ]
# Comando por defecto si no se provee uno al hacer docker run
# El comando corre el servicio
CMD [ "node", "RESTservice.js" ]

# LISTO!


# Para construir la imagen
# docker build -t imagen_unqfy .

# Para correr el container
# docker run -p 5000:5000 --name container_unqfy --user node imagen_unqfy