---
article: false
title: Entities
index: false
icon: code
tags:
  - backend
  - entity
category:
- contribution
toc: false
---

<!-- more -->
::: tip Inhaltsangabe
[[toc]]
:::

# Entities
In APProVe and also in Spring Boot, the term "entity" refers to a class that represents a JPA (Java Persistence API) entity.
A JPA entity is a Java object representation of a table in a relational database, in this case PostgreSQL.
The annotation ``@Entity`` is used in Spring Boot to indicate that a class is a JPA entity.

## Annotation
The ``@Entity`` annotation is placed over a class to indicate that it is a JPA entity.
This class is then used by a JPA provider, in this case Hibernate, to establish the connection between the class and a table in the database.

````java
@Entity
public class MyEntity {
    // Fields, Setter, Getter...
}

````

## Primary keys
Each JPA entity requires a primary key to uniquely identify each row in the associated database table.
This is normally achieved by the annotation ``@Id`` above a field.

````java
@Entity
public class MyEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private UUID id;
    
    // Fields, Setter, Getter...
}
````

## Table names
The name of the associated database table is specified by the ``@Table`` annotation.
If this annotation is omitted, the name of the table will correspond to the name of the entity class. In APProVe, an ``@Table`` annotation is always used.

````java 
@Entity
@Table(name = "my_entity_table")
public class MyEntity {
    // Fields, Setter, Getter...
}

````

## Fields and relations
The fields of the entity represent the columns of the database table.
Relationships between entities can be defined by annotations such as ``@OneToMany``, ``@ManyToOne``, etc. to define the relationship between different tables..

````java
@Entity
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    // Fields, Setter, Getter...
}

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;

    // Fields, Setter, Getter...
}

````

## JPA-Repository
Spring Boot offers JPA repositories for accessing and managing database entities.
A repository is a class that inherits from the JpaRepository interface and thus enables CRUD operations (Create, Read, Update, Delete) on entities.

````java
public interface MyEntityRepository extends JpaRepository<MyEntity, UUID> {
    // User-defined query methods can be added here
}

````

## Services
In Spring Boot, ``@Service`` classes can also be defined. The purpose is to encapsulate business logic and separate this logic from the controllers.
They can also be responsible for coordinating database access.

````java
@Service
public class MyService {
    @Autowired
    private MyRepository myRepository;

    // Geschäftslogik mit Datenbankinteraktion
}
````