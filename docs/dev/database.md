---
# This is the title of the article
title: Datenbanken
# This is the icon of the page
icon: operate
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2023-11-21
# A page can have multiple categories
category:
- Develop
# A page can have multiple tags
tag:
- database
- backend
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: false
# You can customize footer content
footer: Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)
# You can customize copyright content
copyright: false
toc: false
---

In APProVe werden drei Datenbanken verwendet. Eine relationale Datenbank für alle projektrelevanten Daten. Eine relationale Datenbank für Keycloak und eine nicht-relationale Datenbank für E-Mails, Kommentare und Automatisierungen.

<!-- more -->
::: tip Inhaltsangabe
[[toc]]
:::

## Projektfremde Datenbank (**MongoDB**)
Die drei **GoLang** basierten Microservices verwenden eine gemeinsame **MongoDB** Datenbank namens ``store``. Darin befinden sich standardmäßig 6 Collections:
1. `comments`: Kommentare die an einem Projekt hängen.
2. `email_template`: Falls Benachrichtigungen versendet werden sollen, kann hier eingestellt werden, wie die E-Mail aussehen soll.
3. `automated_process`: Projektautomatisierung wird hier gespeichert, zB. was soll wann passieren, wenn ein Projekt erstellt oder editiert wird.
4. `project_trigger`: Gehört zu `automated_process` und gibt an, wann die Automatisierung aktiviert werden soll (bisher nur ``Erstellen`` und ``Editieren``)
5. `trigger`: Gehört zu `automated_process` und gibt an, ob das Projekt bei Status- oder Schwerpunktänderung automatisch angepasst werden soll.
6. `trigger_options`: Gehört zu `automated_process` und gibt an, was passieren soll. Zum Beispiel ein Tag hinzufügen oder einer Kachel zuweisen.

Mehr zur Automatisierung erfahren sie unter: [Automatisierung](TODO)

Mehr zu den GoLang Services erfahren Sie unter: 
1. [Comment-Service](https://gitlab.ibdf-frankfurt.de/proskive/comment-service)
2. [Automation-Service](https://gitlab.ibdf-frankfurt.de/proskive/uct-automation-service)
3. [E-Mail-Service](https://gitlab.ibdf-frankfurt.de/proskive/uct-email-service)

## Projektbezogene Datenbank (**PostgreSQL**)
Die restlichen Spring Boot Services verwenden eine relationale PostgreSQL-Datenbank, die hier im Detail angesehen werden kann: [ER-Diagramm](architecture.md#datenbank-modell)

### Tabellen
1. actual_change_status
2. api_key
3. appointment_title
4. biobank_date
5. change_status
6. clinic
7. dashboard_link
8. data_privacy
9. draft
10. draft_mainfocus
11. flyway_schema_history
12. global_settings
13. help
14. imprint
15. jv_commit
16. jv_commit_property
17. jv_global_id
18. jv_snapshot
19. keycloak_roles
20. keycloak_roles_realms
21. keycloak_roles_tiles
22. kind_of_inquiry
23. kind_of_material
24. locales
25. main_focus
26. main_focus_tiles
27. multilingual_translations
28. patient_data_item
29. patient_data_set
30. patient_data_set_group
31. patient_data_set_group_type
32. patient_data_set_group_types
33. patient_data_set_groups
34. patient_data_set_items
35. person
36. person_roles
37. person_todo
38. policy
39. project
40. project_contact_doc
41. project_contact_lab
42. project_financing
43. project_mainfocus
44. project_participants
45. project_patient_data
46. project_reference
47. project_requests
48. project_roles
49. project_services
50. project_tags
51. project_tiles
52. project_view_log
53. publication
54. realm
55. realm_focus
56. realm_focus_main_focus
57. realm_patient_data_set_group
58. realm_patient_data_set_group_groups
59. realm_sample_type
60. realm_sample_type_sample_types
61. realm_service
62. realm_service_services
63. reference
64. request
65. sample
66. sample_container
67. sample_container_sample_types
68. sample_type
69. samples_sample_container
70. schema_version
71. secondary_id
72. secondary_id_project
73. services
74. shared_with
75. status_code_tiles
76. status_codes
77. tag_tiles
78. tags
79. terms_of_use
80. tiles
81. todos
82. unit
83. votum


## Keycloak-Datenbank (**PostgreSQL**)
Da in APProVe eine **PostgreSQL** Datenbank für projektbezogene Daten verwendet wird, wird auch Keycloak in PostgreSQL verwaltet. Die beiden Datenbanken sind jedoch voneinander getrennt.
Bei der [Installation](../install/install.md) von APProVe wird automatisch die ``.env`` ausgelesen und dementpsrechend eine Datenbank für Keycloak erstellt und angelegt. Sie müssen dazu nichts weiter beachten.





