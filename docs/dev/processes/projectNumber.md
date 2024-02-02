---
# This is the title of the article
title: Automatische Erstellung der Projektnummern
# This control sidebar order
order: 3
# Set author
author: Timo Schneider
# Set writing time
date: 2024-02-02
# A page can have multiple categories
category: Process
# A page can have multiple tags
tag:
- Process
- Development
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

Einblicke in die Generierung von Projektnummern im System.

<!-- more -->

# Generierung von Projektnummern
APProVe erstellt zurzeit zwei verschiedene Projektnummern automatisch. Die [Projektnummer](#projektnummer) und die [Realm-Projektnummer](#realm-projektnummer).
In diesem Artikel geht es um eine Erläuterung der Erstellung der Projektnummern.

::: tip Inhaltsangabe
[[toc]]
:::

## Projektnummer
Die Projektnummer identifiziert eindeutig ein Projekt. Sie ist abhängig vom aktuellen Jahr und der Anzahl an Projekten pro Jahr in einem Schwerpunkt.

````java 
@Query(value = "SELECT count(p) FROM Project p " +
            "WHERE " +
            "p.shortcut = :shortcut AND " +
            "p.projectNumber LIKE CONCAT('%',:year) ")
    Long countByShortcutAndYear(@Param("shortcut") String shortcut, @Param("year") int year);
````

::: warning Beispiel
Im Jahr 2024 wird das erste Projekt im Schwerpunkt ``SDO`` eingereicht, was zur Berechnung der Projektnummer ``SDO-1-2024`` führt. 
Wenn daraufhin ein weiteres Projekt eingereicht wird, erhält es die Projektnummer ``SDO-2-2024``.
:::

## Realm-Projektnummer
Zusätzlich zur Projektnummer wird auch eine Realm-Projektnummer geführt. Diese zählt, ebenso wie die Projektnummer, eine Nummer hoch. 
Diese ist jedoch abhängig vom ``Kürzel des Realms`` in dem das Projekt eingereicht wurde.

````java 
@Query(value = "SELECT count(p) FROM Project p " +
        "join p.realm r " +
        "WHERE " +
        "r.shortcut = :shortcut AND " +
        "p.realmProjectNumber LIKE CONCAT('%',:year) ")
    Long countByShortcutAndYear(@Param("shortcut") String shortcut, @Param("year") int year);
````

::: warning Beispiel
Im Jahr 2024 wird das erste Projekt im Schwerpunkt SDO im Realm ``UCT`` eingereicht. Gemäß der Realm-Zuordnung erhält das Projekt die Projektnummer 'SDO-1-2024', 
wobei der Name des Realms (``UCT``) für die Projektnummer verantwortlich ist. Dies bedeutet, dass das Projekt als 'SDO-1-2024' nummeriert wäre, 
jedoch die Realm-Projektnummer ``UCT-1-2024`` erhält.
:::

## Kontext in APProVe
Die Generierung der Projektnummern erfolgt dabei lediglich beim ``Erstellen des Projekts`` im Backend. Bevor das Projekt in der Datenbank abgespeichert werden kann muss eine Projektnummer und eine Realm-Projektnummer
vergeben worden sein.

## Generierung der Projektnummern im Code
Da die Projektnummer vor dem Speichern im System gesetzt sein muss, muss diese davor generiert werden!

Dazu wird für die Projektnummer zunächst das ``Kürzel des Schwerpunkts`` anhand der ausgewählten ``Schwerpunkte`` ermittelt. Zum Beispiel bei ``Gmeinschaftlicher Schwerpunkt`` ist das ``UCT``.

````java
// Get main focus from set
MainFocus mf = mainFocusRepository.findByShortcutOrderByShortcutDesc(mainFocusSet.iterator().next().getShortcut());
newProject.setShortcut(mf.getShortcut());
````

Anschließend wird anhand des Kürzels ermittelt, wie viele andere Projekte eine Projektnummer mit dieser Kombination haben. Dazu nutzen wir die Projektnummern der anderen Projekte.
Zur Erinnerung: Die Projektnummern bestehen immer aus dem aktuellen Jahr, zB UCT-23-2023.
````java
// The database saves the amounts per year, but only updates them AFTER a project is created
// when creating a new project in a new year, it would have a higher number than expected
return mainFocusRepository.countByShortcutAndYear(mf.getShortcut(), year);

/**
* Counts the number of projects based on the shortcut and year for the project number.
*
* @param shortcut The shortcut of the project.
* @param year     The year for the project number.
* @return The number of projects matching the shortcut and year.
*/
@Query(value = "SELECT count(p) FROM Project p " +
        "WHERE " +
        "p.shortcut = :shortcut AND " +
        "p.projectNumber LIKE CONCAT('%',:year) ")
Long countByShortcutAndYear(@Param("shortcut") String shortcut, @Param("year") int year);
````

Sollte mehr als ein Schwerpunkt gewählt werden, so wird das Kürzel auf den ``Gemeinschaftliches Schwerpunkt`` gesetzt. Diesen können Sie in der ``Verwaltung -> Schwerpunkte`` einsehen

Anhand dieser Nummer wird die Projektnummer generiert. Es kann jedoch in seltenen Fällen vorkommen, dass die automatisch gewählte Projektnummer bereits vergeben ist. Das geschieht beispielsweise, wenn sie bei der Projektbearbeitung selbst eine Projektnummer nachträglich vergeben.

Da die Projektnummer jedoch eindeutig sein muss, prüft das System zusätzlich, ob diese bereits vorhanden ist.

````java
// Check and adjust the project number if necessary
String checkedProjectNumber = mainFocusService.checkAndAdjustProjectNumber(
        projectNumber,
        newProject.getShortcut(),
        errorDTO,
        mainFocusCounter,
        false,
        year);
````

Diese Methode überprüft, ob die aktuell generierte Projektnummer bereits vorhanden ist. Da es sich nur um einen Zähler handelt, wird dieser um eins erhöht, falls es einen Treffer gab.

````java
StringBuilder projectNumberGenerator = generateProjectNumberString(shortcut, counter, year);
// Determine which service method to use based on the isRealmNumber flag
boolean checkingProjectNumber = isRealmNumber ?
        projectService.existsByRealmProjectNumber(projectNumber) :
        projectService.existsByProjectNumber(projectNumber);
// Continue adjusting the project number until it's unique
while (checkingProjectNumber) {
    counter++;
    projectNumberGenerator = generateProjectNumberString(shortcut, counter, year);
    checkingProjectNumber = isRealmNumber ?
            projectService.existsByRealmProjectNumber(projectNumberGenerator.toString()) :
            projectService.existsByProjectNumber(projectNumberGenerator.toString());
}
````

## Generierung der Realm-Projektnummern im Code

Für die Realm-Projektnummer erfolgt die Berechnung ähnlich, allerdings wird hier der ``Kürzel des Realms`` zur Berechnung verwendet.

````java
@Query(value = "SELECT count(p) FROM Project p " +
        "join p.realm r " +
        "WHERE " +
        "r.shortcut = :shortcut AND " +
        "p.realmProjectNumber LIKE CONCAT('%',:year) ")
    Long countByShortcutAndYear(@Param("shortcut") String shortcut, @Param("year") int year);
````


## Kompletter Code

- CreateProjectController.java

````java
// Calculate current year
int year = Year.now().getValue();
// Set Project number
newProject = buildProjectService.setProjectNumber(
        newProject,
        projectDTO.getMainFocus(),
        errorDTO,
        year
);

// Set realm project number
newProject = buildProjectService.setRealmProjectNumber(
        newProject,
        errorDTO,
        year
);
````

- BuildProjectService.java

````java
/**
 * Sets the project number for a new project based on the provided CreateProjectDTO.
 * This method calculates the project number using the project's main focus and year.
 * It sets the project number in the provided Project entity, and checks if the project
 * number is already allocated. If so, it adjusts the project number accordingly.
 *
 * @param newProject   The Project entity to set the project number for.
 * @param mainFocusIds String array of all ids of main focus.
 * @param errorDTO     A list to collect any error messages during the process.
 */
@Override
public Project setProjectNumber(Project newProject, String[] mainFocusIds, List<ErrorDTO> errorDTO, int year) {
    try {
        // Retrieve the MainFocus entities based on the provided main focus IDs
        Set<MainFocus> mainFocusSet = mainFocusService.findByIdList(List.of(mainFocusIds));
        // Determine the main focus counter based on the number of main focuses
        Long mainFocusCounter = mainFocusService.determineMainFocusCounter(mainFocusSet, year, newProject);
        // Generate the project number
        String projectNumber = String.valueOf(mainFocusService.generateProjectNumberString(newProject.getShortcut(), mainFocusCounter, year));
        // Check and adjust the project number if necessary
        String checkedProjectNumber = mainFocusService.checkAndAdjustProjectNumber(
                projectNumber,
                newProject.getShortcut(),
                errorDTO,
                mainFocusCounter,
                false,
                year);
        String number = checkedProjectNumber != null && !checkedProjectNumber.isEmpty() ? checkedProjectNumber : projectNumber;
        log.info("ProjectNumber: " + number);
        return newProject.toBuilder()
                .mainFocuses(mainFocusSet)
                .projectNumber(number)
                .build();
    } catch (Exception e) {
        log.error("ErrorMessage while setting project number:", e);
        errorDTO.add(new ErrorDTO("Could not set project number", ErrorMessage.Severity.CRITICAL));
        return newProject;
    }
}

/**
 * Sets the realm project number for a new project based on the realm of the project.
 * This method calculates the realm project number using the project's realm and year.
 * It sets the realm project number in the provided Project entity, and checks if the realm project
 * number is already allocated. If so, it adjusts the realm project number accordingly.
 *
 * @param newProject The Project entity to set the project number for.
 * @param errorDTO   A list to collect any error messages during the process.
 */
@Override
public Project setRealmProjectNumber(Project newProject, List<ErrorDTO> errorDTO, int year) {
    try {
        if (newProject.getRealm() != null) {
            // The database saves the amounts per year, but only updates them AFTER a project is created
            // when creating a new projects in a new year it would have a higher number than expected
            Long realmFocusCounter = realmService.countByRealmShortcutAndYear(
                    newProject.getRealm().getShortcut(), year);
            String realmProjectNumber = String.valueOf(
                    mainFocusService.generateProjectNumberString(
                            newProject.getRealm().getShortcut(),
                            realmFocusCounter,
                            year)
            );

            String checkedRealmProjectNumber = mainFocusService.checkAndAdjustProjectNumber(
                    realmProjectNumber,
                    newProject.getRealm().getShortcut(),
                    errorDTO,
                    realmFocusCounter,
                    true,
                    year);
            String number = checkedRealmProjectNumber != null && !checkedRealmProjectNumber.isEmpty() ? checkedRealmProjectNumber : realmProjectNumber;
            log.info("Realm ProjectNumber: " + number);
            return newProject.toBuilder().realmProjectNumber(number).build();
        }
        return newProject;
    } catch (Exception e) {
        log.error("ErrorMessage while setting realm project number:", e);
        errorDTO.add(new ErrorDTO("Could not set realm project number", ErrorMessage.Severity.WARNING));
        return newProject;
    }
}

/**
 * Determine the main focus counter based on the number of main focuses.
 * If a project contains 2 main-focus it will be assigned to a "common focus"
 *
 * @param mainFocusSet The set of MainFocus entities.
 * @param year         The current year.
 * @param newProject   The Project entity.
 * @return The main focus counter.
 */
@Override
public Long determineMainFocusCounter(Set<MainFocus> mainFocusSet, int year, Project newProject) {
    if (mainFocusSet.size() < 2) {
        // Get main focus from set
        MainFocus mf = mainFocusRepository.findByShortcutOrderByShortcutDesc(mainFocusSet.iterator().next().getShortcut());
        newProject.setShortcut(mf.getShortcut());
        // The database saves the amounts per year, but only updates them AFTER a project is created
        // when creating a new project in a new year, it would have a higher number than expected
        return mainFocusRepository.countByShortcutAndYear(mf.getShortcut(), year);
    } else {
        MainFocus commonFocus = mainFocusRepository.findByCommonFocusTrue();

        // Get the first focus if there is no common focus in the system
        if (commonFocus == null) {
            commonFocus = mainFocusSet.iterator().next();
        }
        newProject.setShortcut(commonFocus.getShortcut());

        return mainFocusRepository.countByShortcutAndYear(commonFocus.getShortcut(), year);
    }
}

/**
 * Generate the project number based on the provided parameters.
 *
 * @param shortcut        The project's shortcut.
 * @param mainFocusCounter The main focus counter.
 * @param year            The current year.
 * @return The generated project number.
 */
@Override
public StringBuilder generateProjectNumberString(String shortcut, Long mainFocusCounter, int year) {
    return new StringBuilder()
            .append(shortcut)
            .append("-")
            .append(mainFocusCounter + 1L)
            .append("-")
            .append(year);
}

/**
 * Check and adjust the project number if it already exists.
 * This method is used for realm-project-numbers as well.
 *
 * @param projectNumber The project number to check.
 * @param shortcut      The project's shortcut.
 * @param errorDTO      A list to collect any error messages during the process.
 * @param isRealmNumber A flag indicating whether it's a realm project number.
 * @return The adjusted project number.
 */
@Override
public String checkAndAdjustProjectNumber(String projectNumber, String shortcut, List<ErrorDTO> errorDTO, Long counter, boolean isRealmNumber, int year) {
    try {
        StringBuilder projectNumberGenerator = generateProjectNumberString(shortcut, counter, year);
        // Determine which service method to use based on the isRealmNumber flag
        boolean checkingProjectNumber = isRealmNumber ?
                projectService.existsByRealmProjectNumber(projectNumber) :
                projectService.existsByProjectNumber(projectNumber);
        // Continue adjusting the project number until it's unique
        while (checkingProjectNumber) {
            counter++;
            projectNumberGenerator = generateProjectNumberString(shortcut, counter, year);
            checkingProjectNumber = isRealmNumber ?
                    projectService.existsByRealmProjectNumber(projectNumberGenerator.toString()) :
                    projectService.existsByProjectNumber(projectNumberGenerator.toString());
        }

        return projectNumberGenerator.toString();
    } catch (Exception e) {
        log.error("ErrorMessage while checking and adjusting project number", e);
        errorDTO.add(new ErrorDTO(e.getMessage(), ErrorMessage.Severity.CRITICAL));
        return null;
    }
}
````