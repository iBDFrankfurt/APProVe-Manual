---
article: false
title: Entwicklerleitfaden
index: false
icon: code
category:
- Develop
---


## APProVe erweitern und individualisieren
APProVe wird als **Open-Source-Projekt** auf [GitHub](https://github.com/iBDFrankfurt/APProVe) bereitgestellt. 
Ihnen stehen somit alle auf der Welt programmatischen Optionen zur Verfügung, um APProVe auf Ihre Bedürfnisse anzupassen oder zu erweitern.
Durch die Microservice-Architektur wird die Erweiterung von APProVe erleichtert.

Dieser Guide ist derzeit noch in Arbeit. Wir bitten um Ihr Verständnis.

## Überblick
- [Einführung](introduction.md)
- [Architektur](architecture.md)
- [Datenbank](database.md)

## Services
APProVe wurde als Microservice-Architektur umgesetzt und besteht aus folgenden Komponenten:
1. uct-config-service (Spring Boot)
2. uct-eureka-service (Spring Boot)
3. uct-frontend-service (Spring Boot)
4. uct-project-service (Spring Boot)
5. uct-draft-service (Spring Boot)
6. uct-project-import-service (Spring Boot)
7. uct-user-service (Spring Boot)
8. uct-manual-service (VuePress)
9. uct-email-service (GoLang)
10. uct-automation-service (GoLang)
11. uct-comment-service (GoLang)
12. VueJs-frontend (VueJS)
13. CentraXX-Java-Schema (DTO)
14. APProVe Domain (DTO)
15. Keycloak
