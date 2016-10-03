# Pasae Cors Web side example
Frontend para probar cors con la app https://github.com/fedeotaran/pasae/tree/basic-oauth.

Requerimientos
--------------
Es necesario para poder ejecutar la aplicación las siguientes herramientas:
* Java 8
* [Maven](https://maven.apache.org/)

Ejecutar
--------
Luego de clonar, ejecutar mvn package
```
Para correr la app (en un puerto aleatorio):
```bash
mvn spring-boot:run
```
Para correr la app (en un puerto preseleccionado, ej 9000):
```bash
mvn spring-boot:run -Dserver.port=9000
```
Es necesario obtener un token como se indica en https://github.com/fedeotaran/pasae/tree/basic-oauth para completar el campo "token"