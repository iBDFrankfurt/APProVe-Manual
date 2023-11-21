---
article: false
title: Create new Entity
index: false
icon: code
tags:
  - backend
  - entity
category:
- contribution
---

You can add new Domain/Entity-Objects or alter the ones present. It really depends on what you want to do, so the following is more like a FAQ.

Spring Boot follows a layered architecture in which each layer communicates with the layer directly below or above (hierarchical structure) it.
You can read more about it [here](https://www.javatpoint.com/spring-boot-architecture).

Also, please refer to this in the APProVe context: [Entities](entity.md)

<!-- more -->
::: tip Inhaltsangabe
[[toc]]
:::

## Creating a new Domain/entity-Object
Say we want to add a new property which is dependent of our Project.class. How can we do that?
For example, we want to add a new Object named Annotation.
With this we could annotate a Project. The first step would be to add a migration.

### Adding a new migration
We will write a new sql-File in the **\src\main\resources\db\migration** Folder. One convention we took was to add only one job per migration.
This is easier to debug later and understand the versioning of the database.
The following could be the table.

````sql
create table annotation(
  id uuid primary key,
  comment text,
  project_id uuid references project(id)
);
````
- Line 1: Every table should have a primary key, in this case a UUID
- Line 2: Our actual comment or annotation
- Line 3: A foreign key that saves the project we annotated

After adding the migration we can run Flyway with the command

```shell
$ mvn flyway:migrate
```
This will add the migration to the database and add the new table **annotation**.

### Altering a migration
Let's say we do not want to add a new table. We could also alter the project table and add a **annotation**.
This doesn't make that much sense, because a project could have only one annotation, but for the sake of
completion, we look at a possible migration.

````sql
ALTER TABLE project ADD COLUMN annotation text;
````

After that run Flyway again
```shell
$ mvn flyway:migrate
```


After adding or altering a table, we have to add an entity object. This way Spring Boot connects
a database table with an actual object.

### Adding an entity object
Adding a new entity is fairly easy. The folder **entity** has all present entities.
The first thing should be adding the **@Entity** annotation telling Spring Boot this is a database object.

````java
@Entity
public class Annotation {
  ...
}
````

Next we will add the table properties we added in the migration earlier.

````java
import javax.persistence.Entity;
@Entity
public class Annotation {
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  private UUID id;

  @Column(name = "comment")
  private String comment;

  @OneToOne()
  @JoinColumn(name = "project_id", referencedColumnName = "id")
  Project project;
}
````
Let us break this down
- ID: The ID will be created by Spring Boot automatically by indicating it with @Id, @GeneratedValue and @GenericGenerator
- Comment: By indicating a @Column we tell Spring Boot to map this property to a table row. You can even change the name here.
- Project: Because we want to use an Object (in this case Project) and not an ID (project_id) we have to link the two tables.

We chose @OneToOne because one annotation is exactly on one project and a project has one annotation. Other types are @ManyToOne, @OneToMany or @ManyToMany.
You could use a @OneToMany as well, if you want to add multiple Annotations to a project.

The ``@JoinColumn`` indicates this is the parent and owner of the linkage via the **project_id** on this side and the **id** of the project.

This way you could list all Annotations and see their annotated Projects. BNut what if we want to see the Annotations when listing the projects?

We simply have to add the Annotation to the ``Project.class``

````java
import javax.persistence.Entity;

@Entity
public class Project {
  ...
  @OneToOne(mappedBy = "project")
  private Annotation annotation;
}
````
The **mappedBy** indicates this is the child side.

With this addition, we can view every annotation a project has.

If you want to learn more about relations you can check [Baeldung](https://www.baeldung.com), for example
[OneToOne](https://www.baeldung.com/jpa-one-to-one).

#### Additional Annotations
If you look at other created Entities you will come across multiple different annotations. Here we will explain a few more.

- @JsonView: A JsonView can customize the JSON output to serialize/deserialize objects. [More](https://www.baeldung.com/jackson-json-view-annotation)
- @JsonIgnoreProperties: Ignore specific properties in JSON of an object when serializing it. [More](https://fasterxml.github.io/jackson-annotations/javadoc/2.6/com/fasterxml/jackson/annotation/JsonIgnoreProperties.html)
- @Schema: Defines a Schema in Swagger. [More](https://docs.swagger.io/swagger-core/v2.0.0-RC3/apidocs/io/swagger/v3/oas/annotations/media/Schema.html)
- @JoinTable: Bidirectional; tables join two primary keys.
- @OrderColumn: annotation specifies a column that should maintain the persistent order of a list.[More](https://docs.jboss.org/hibernate/jpa/2.1/api/javax/persistence/OrderColumn.html)

### Creating the Repository
After creating a **migration** for the database and the linkage to the **entity** we have to tell Spring Boot how to retrieve the Objects from the database and serialize them.
We can do this with repositories in Spring Boot using the [Spring Boot Flow Architecture](https://www.javatpoint.com/spring-boot-architecture).
Head over to the /repository folder to create a new **repository**:
This is where our CRUD-operations are performed. To create a new repository you have to add **@JaversSpringDataAuditable** above the class as annotation.
This tells Javers to audit every change of the database.

````java
@JaversSpringDataAuditable
public interface AnnotationRepository extends JpaRepository<BiobankDate, UUID>, PagingAndSortingRepository<Annotation, UUID> {
  
}
````
We have to extend our Repository from JpaRepository (basic CRUD methods like create or delete) and, if you want a pagination, from PagingAndSortingRepository.
This would work with saving, updating, listing or deleting. So at this point we are already done.

### Creating the Service
After creating the **repository** to retrieve or update your Entity from the database, we have to create a **@Service** telling Spring Boot were to put the business logic.
It also performs **authorization** and **validation**.
In our case we shifted the authorization to the @Controller, but more about this later.

To create a Service you can implement a predefined interface **IService** located in /interfaces/service.
You can choose to create and implement an interface for the repository.

````java
import de.ibdf_frankfurt.approve.project.interfaces.service.IService;

@Service
public class AnnotationService implements IService<Annotation> {
  
  // Add the repository and autowire it in order to use it
  private final AnnotationRepository annotationRepository;

  @Autowired
  /**
   * <p>Constructor for AppointmentTitleService.</p>
   *
   * @param annotationRepository a {@link de.ibdf_frankfurt.approve.project.repository.AnnotationRepository} object.
   */
  public AnnotationService(AnnotationRepository annotationRepository) {
    this.annotationRepository = annotationRepository;
  }
  ...

  // Retrieves a single Object from the repository by Id of Annotation
  @Override
  public Annotation findOne(UUID id) {
    return annotationRepository.findById(id).orElse(null);
  }
  ...
}
````

If you want to, you can add more (business) logic in the Service, for example checking if a ressource exists before retrieving it

````java
public Annotation findOne(UUID id) {
    if(annotationRepository.existsById(id)) {
      return annotationRepository.findById(id).orElse(null);
    }
  }

````

### Creating the RestController
Everything we did before, was to retrieve Data we specified from the database and serialize it into an entity. But what if we need to retrieve this data from another microservice like the frontend?

We simply create a @RestController in /controller/entity like this:

````java

@RestController
public class RestAnnotationController {
  
  // Add the service and autowire it
  private final AnnotationService annotationService;

  @Autowired
  /**
   * <p>Constructor for RestAppointmentTitleController.</p>
   *
   * @param annotationService a {@link de.ibdf_frankfurt.approve.project.service.AnnotationService} object.
   */
  public RestAppointmentTitleController(AnnotationService annotationService) {
    this.annotationService = annotationService;
  }
}
````
You can choose to create and implement an interface for the service.

#### Retrieve an Object from the Database
After that we want to use our **findOne** Method from the *@Service** in our @RestController to retrieve the data from the database, serialize it into json and use it
in another microservice.

````java
// @RequestMapping exposes an API-Endpoint. {id} means it serializes this parameter to a String or, in this case, a UUID.
// we will return a ResponseEntity<?< in order to return HttpStatus as well as a body.
@RequestMapping(value = "/annotation/{id}", method = RequestMethod.GET)
  public ResponseEntity<?> getOne(@Parameter(description = "id of Annotation to be retrieved") @PathVariable UUID id) {
    // Simply call our service created before.
    return new ResponseEntity<>(appointmentTitleService.findOne(id), HttpStatus.OK);
  }
````

#### Create an Object via Rest
Not only can we retrieve data through our RestController -> Service -> Repository, we can also store new data with it.

````java
// Create an API-Endpoint and use a POST Method
@RequestMapping(
      value = "/annotation",
      method = RequestMethod.POST
    )
    public ResponseEntity<?> createOne(@Parameter(description = "JSON of Annotation") @RequestBody String annotation) {
        try {
            Annotation annotation = new Gson().fromJson(annotation, Annotation.class);
            return new ResponseEntity<>(annotationService.create(annotation), HttpStatus.CREATED);
        } catch (Exception e) {
            log.error("", e);
            return new ResponseEntity<>(String.valueOf(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
````
To deserialize and serialize objects we use Gson, in this example we receive an annotation as Json in the RequestBody and we will deserialize it into an
Annotation object
````java
Annotation annotation = new Gson().fromJson(annotation, Annotation.class);
````
After that we simply return the created object and the HttpStatus 201
````java
return new ResponseEntity<>(annotationService.create(annotation), HttpStatus.CREATED);
````

Our Json would look like this (see [entity](#adding-an-entity-object)):
````json
{
  "comment": "My first annotation",
  "project": "2a729881-8872-483f-8815-62f63e0a7a05"
}
````
Spring will create this object and create an id itself. If you would retrieve this object via our **findOne** method, it would look like this

````json
{
  "comment": "My first annotation",
  "project": {
    "id": "2a729881-8872-483f-8815-62f63e0a7a05",
    "projectName": "Name of project",
    "projectNumber": "UCT-1-2022",
    ...
  }
}
````
Please notice that Spring Boot will deserialize the project as object because we linked it in the entity! This could lead to circular dependencies, so always double-check your json and
annotate it with a View or @JsonIgnoreProperties

#### Update an Object via Rest
To update an object via our API we first have to find our object in the database, change it and then save it again.
We do this much like the [create](#create-an-object-via-rest) method.

````java
// Update an API-Endpoint and use a PATCH Method
@RequestMapping(
      value = "/annotation/{id}",
      method = RequestMethod.PATCH
    )
    public ResponseEntity<?> patchOne(@PathVariable UUID id, @Parameter(description = "JSON of Annotation") @RequestBody String annotation) {
        try {
            if (annotationService.existsById(id)) {
              Annotation fromDatabase = annotationService.findOne(id);
              Annotation newAnnotation = new Gson().fromJson(annotation, Annotation.class);
              fromDatabase.setComment(newAnnotation.getComment());
              fromDatabase.setProject(newAnnotation.getProject());
              return new ResponseEntity<>(annotationService.create(annotation), HttpStatus.CREATED);
            } else {
              return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            log.error("", e);
            return new ResponseEntity<>(String.valueOf(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
````
We first check, if the annotation we want to edit exists in the database, after that we retrieve it.
Because we do not want to save a new Annotation we have to update our annotation from the database with the new changes. Because we use a PATCH method, we will receive the whole
new object through the @RequestBody and update everything, because we never know, what changed.


## APProVe Domain DTO
In order to display data by the backend in the uct-frontend-service you have to add all new entity changes in the APProVe Domain DTO!
See more at [APProVe Domain DTO](https://gitlab.ibdf-frankfurt.de/uct/proskive-dto)