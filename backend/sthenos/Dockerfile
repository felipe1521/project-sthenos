FROM openjdk:21

COPY target/sthenos-0.0.1-SNAPSHOT.jar sthenos-1.0.0.jar

#Creando tablas
COPY src/main/resources/schema.sql /docker-entrypoint-initdb.d/
#Cargando tablas
COPY src/main/resources/data.sql /docker-entrypoint-initdb.d/

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "sthenos-1.0.0.jar"]