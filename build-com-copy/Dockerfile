FROM nginx:latest
LABEL maintainer 'Axel kjellin'

RUN echo '<h1> sem conteúdo</h1>' > /usr/share/nginx/html/conteudo.html

#*.html qualquer arquivo que esteja na pasta local vai ser copiada para a pasta destino
COPY *.html /usr/share/nginx/html/