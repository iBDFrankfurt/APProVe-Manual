---
# This is the title of the article
title: VueJS-Frontend anpassen
# This is the icon of the page
icon: operate
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2023-02-14
# A page can have multiple categories
category:
- Develop
# A page can have multiple tags
tag:
- VueJS
- Frontend
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

Diese Übersicht soll erläutern, wie neue Komponenten oder Seiten in APProVe erstellt werden können.

<!-- more -->
::: tip Inhaltsangabe
[[toc]]
:::
# Aufbau einer VueJs-Datei
VueJs-Dateien sind grundsätzlich immer so aufgebaut:

````vue
<template>
  ...
</template>
<script>
export default {
  name: "Name",  // Name der Komponente, wird unter anderen in den VueJS-dev-Tools im Broser angezeigt
  components: {}, // Externe Komponenten können hier importiert werden
  props: {}, // Übergebene Werte, die in dieser Komponente angezeigt werden sollen
  data() {
    return {} // Globale variablen, können mit this. referenziert werden. zB this.data
  },
  mounted() {}, // Wird ausgeführt, sobald die Komponente gerendert wird.
  created() {}, // Wird ausgeführt, sobald die Komponente in der DOM erstellt wird.
  computed: {}, // Eine Variable kann als Funktion übergeben werden, zB um sortierte Listen on demand zu erstellen
  watch: {}, // Variablen können überprüft werden, ob sie sich ändern.
  methods: {}, // Methoden die aufgerufen werden sollen.
}
</script>
````

# Tabellen und Modals
APProVe zeigt die meisten Daten des Systems in Tabellen an und stellt Daten genauer über Modal Screens (folgend nur noch Modal genannt) dar. Ein Modal ist ein Bereich, der sich im Vordergrund einer Webseite öffnet und deren Zustand (»mode« = Modus) ändert. 
Daher ist es wichtig zu wissen, wie neue Listen generiert und über Modals näher angezeigt werden können.

Zur Erstellung von Tabellen und Modals können dazu einige Templates verwendet werden, die diese automatisch erstellen können.

## Templates zur Erstellung von Tabellen

### TableTemplate
Generiert eine Tabelle mitsamt FilterBar, ListSettingsModal und erzeugt automatisch Modals für mode=view und mode=delete.
Die Tabelle spricht eine API an, die API muss folgende Bedingungen erfüllen:

**Pagination**
- sort,desc = Nach welchem Attribut sortiert werden soll
- page = Aktuelle Seite der Tabelle
- per_page = Anzahl an Items, die die Tabelle anzeigen soll
- filter = Suchparameter

::: danger Bitte beachten
Die Modals für mode=add und mode=edit müssen selbst erstellt werden!
:::


| Komponente  	| Beinhaltet folgende Komponenten 	                                           | 
|---	|-----------------------------------------------------------------------------|
| \src\components\template\tableTemplate.vue 	| ListSettingsModal, FilterBar, ModalObjectViewAndDeleteTemplate, csvImport |

#### Properties
- modalId = Alle Komponenten innerhalb der Tabelle erhalten eine eindeutige ID, 
- mode = add, view, delete, edit geben an, was das Modal tun soll, 
- api = api die das backend ansprechen soll, 
- fields = die Tabellenspalten, die über die API bezogen und angezeigt werden sollen, 
- labels = die Tabellenspalten der exportierten CSV, mit Übersetzung, 
- csvFields = Tabellenspalten der exportierten CSV, 
- fileName = name der exportierten Datei, 
- sortBy = Attribut über das initial sortiert werden soll, 
- recordsPerPage = Anzahl der Items in der Tabelle, 
- modalData = beim Aufruf über mode={add, view, delete, edit} muss die Information der Tabellenspalte übergeben werden, 
- modalItems = Informationen, die im ViewModal angezeigt werden sollen. Es handelt sich um ein Object: { name, property, formatter }, 
- modalInfos = Wenn an dem Object aus der Tabelle weitere Objekte hängen, können diese hier angegeben werden, zB Project.participants. Es handelt sich um ein Array: [ {text, propertyName, highlightFilter, sortParam, itemNames, sortDirection, sortProperty} ], 
- needsInfo = if modalInfos should be displayed should be displayed in the view modal, 
- needsResource = if createdAt, createdBy and so on, should be displayed in the view modal 	

### ListSettingsModal
Diese Komponenten beinhaltet alle Einstellungsmöglichkeiten einer Tabelle (Anzahl der Zeilen, angezeigte Spalten, Spaltensuche), sowie die Option, eine Tabelle in ein CSV zu exportieren

| Komponente 	| Beinhaltet folgende Komponenten 	|
|---	|---	|
| \src\components\template\ListSettingsModal2 	| download-csv 	|

#### Properties
- total = Anzahl aller Items in der pagination
- perPage = Items pro Seite
- fields = Tabellenspalten
- canExportCentraxx = sollen die Daten in einer CentraXX-XML Struktur heruntergeladen werden. **BISHER NUR PROJEKTE**
- canExport = ob die Exportfunktion angezeigt werden soll oder nicht
- canExportcsv = ob ein CSV-Export ermöglicht werden soll
- csvData = Daten für den Export
- csvFields = Tabellenspalten für das CSV mit Übersetung
- csvLabels = Attribute der csvData
- exportFileName = Name der exportierten Datei

### FilterBar
Die Suchleiste über den Tabellen, übergibt das Suchwort an tableTemplate.

| Komponente 	                         | Beinhaltet folgende Komponenten 	 |
|--------------------------------------|-----------------------------------|
| \src\components\List\FilterBar.vue 	 | -	                                |

#### Properties
- tooltip = Wird als Tooltip bei der Suche angezeigt

### csvImport

| Komponente 	                             | Beinhaltet folgende Komponenten 	 |
|------------------------------------------|-----------------------------------|
| \src\components\template\csvImport.vue 	 | -	                                |

#### Properties
- addMultipleUrl = API Endpunkt für den Batch-Import im Backend
- tableHeaders = Spaltenname der import tabelle
- itemProperties = Spalten in der CSV die importiert werden sollen
- helpText = can be displayed before importing
- showHelp = display help text or not
- showImport = render this component or not, some tables should not import data, i.e. projects

## Implementierung der Templates anhand eines Beispiels
In der Administration gibt es eine Menge Tabellen und Modals. Zurzeit sind die meisten noch in den veralteten Komponenten und müssen Stück für Stück mithilfe der Templates überführt werden.
Diese Anleitung dient dazu, die alten Teile zu ersetzen oder neue erstellen zu können.

Die folgende Komponente wird erstellt, bzw erneuert: AdminAppointmentTitle in der Administration unter Termine und Termintitel



### 1. **Schritt: Lokalisierung**

Dazu starten wir mit einer Überschrift und einer Beschreibung.
**$t** kommt von der i18n in VueJs und dient als Übersetzung.
Die Settings zu VueI18n können in der **i18n.js** und **main.js** nachgelesen werden.
Die Lokalisierungen liegen in ``\src\locales\de.json bzw en.json``
````vue
<template>
  <div>
    <div class="row mt-2">
      <div class="col-md-12">
        <h3>
          {{ $t("appointmentTitle.header") }}
        </h3>
        <p>
          {{ $t("appointmentTitle.description") }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from "../../i18n";
export default {
  props: {  // Wir übergeben eine prop namens locale. Diese ist ein String und kann entweder `de` oder `en` sein.
    locale: {
      type: String
    }
  },
  mounted() {
    i18n.locale = this.locale;  // Wir setzen die locale initial auf unser prop
  },
  watch: { // Der watcher überprüft, ob sich die locale zur Laufzeit ändert und aktualisiert wiederum unser i18n.locale
    locale: function (val) {
      i18n.locale = val;
    }
  }
}
</script>
````

### 2. **Schritt: Templates einbauen**

````vue
<template>
  <div>
    <div class="row mt-2">
      <div class="col-md-12">
        <h3>
          {{ $t("appointmentTitle.header") }}
        </h3>
        <p>
          {{ $t("appointmentTitle.description") }}
        </p>
      </div>
    </div>
    <!--  Falls CSV-Importe gewünscht sind, muss die Komponente csv-import eingebunden werden  -->
    <csv-import
        :item-properties=""
        :table-headers=""
        :add-multiple-url=""
        :locale=""
        @refresh=""
        help-text=""
        show-import
        :show-help=""
        :authorization-header=""
        component-name=""
        token-based
    ></csv-import>
    <div class="col-sm-12">
      <table-template
          ref=""
          component-name=""
          :authorization-header=""
          token-based
          :locale=""
          :fields=""
          :api=""
          @table-loaded=""
          @open-modal=""
          :labels=""
          :csv-fields=""
          :file-name=""
          sort-by=""
          :records-per-page=""
          :modal-id=""
          :modal-data=""
          :mode=""
          :modal-items=""
          :modal-infos=""
          :needs-info=""
          :needs-resource=""
      ></table-template>
    </div>
  </div>
</template>
<script>
import i18n from "../../i18n";
import CsvImport from "../template/csvImport.vue";
import TableTemplate from "../template/tableTemplate.vue";
export default {
  name: "AdminAppointmentTitle",
  components: { // Beide eingebundenen Komponenten müssen über components importiert werden.
    CsvImport,
    TableTemplate
  },
  props: {  // Wir übergeben eine prop namens locale. Diese ist ein String und kann entweder `de` oder `en` sein.
    locale: {
      type: String
    }
  },
  mounted() {
    i18n.locale = this.locale;  // Wir setzen die locale initial auf unser prop
  },
  watch: { // Der watcher überprüft, ob sich die locale zur Laufzeit ändert und aktualisiert wiederum unser i18n.locale
    locale: function (val) {
      i18n.locale = val;
    }
  }
}
</script>
````

### 3. **Schritt: Template Properties für csv-import befüllen**

````vue
<template>
  <div>
    <div class="row mt-2">
      <div class="col-md-12">
        <h3>
          {{ $t("appointmentTitle.header") }}
        </h3>
        <p>
          {{ $t("appointmentTitle.description") }}
        </p>
      </div>
    </div>
    <!--  Falls CSV-Importe gewünscht sind, muss die Komponente csv-import eingebunden werden  -->
    <csv-import
        :item-properties="itemProperties"  <!-- 1 -->
        :table-headers="csvTableHeaders" <!-- 2 -->
        :add-multiple-url="badgeApi" <!-- 3 -->
        :locale="locale" Wir erhalten eine locale bereits über die props, diese kann hier wieder verwendet werden
        @refresh="refreshTable" <!-- 4  Wir erstellen eine Methode, die die Tabelle nach dem importieren neu läd -->
        show-import <!-- 5 Wir erlauben einen Import der Termintitel -->
        :show-help="false" <!-- 5 Wir benötigen keinen Text als Hilfe -->
        help-text=""
        :authorization-header="authorizationHeader" <!-- 6 Die Abfrage benötigt ein Bearer token -->
        token-based
        component-name="csv-import-appointment-title" <!-- 7 Aussagekräftiger Name, wird für ID's verwendet -->
    ></csv-import>
    <div class="col-sm-12">
      <table-template
          ref="appointmentTable" <!-- 4 ref erstellen, um auf die Methoden der Tabelle zugreifen zu können -->
          component-name=""
          :authorization-header=""
          token-based
          :locale=""
          :fields=""
          :api=""
          @table-loaded=""
          @open-modal=""
          :labels=""
          :csv-fields=""
          :file-name=""
          sort-by=""
          :records-per-page=""
          :modal-id=""
          :modal-data=""
          :mode=""
          :modal-items=""
          :modal-infos=""
          :needs-info=""
          :needs-resource=""
      ></table-template>
    </div>
  </div>
</template>
<script>
import i18n from "../../i18n";
import CsvImport from "../template/csvImport.vue";
import TableTemplate from "../template/tableTemplate.vue";
export default {
  name: "AdminAppointmentTitle",
  components: {
    CsvImport,
    TableTemplate
  },
  props: { 
    locale: {
      type: String
    },
    api: {          // 3
      type: String,
      required: true
    },
    authorizationHeader: {   // 6
      type: String,
      required: false,
      default: null
    },
    tokenBased: {     // 6
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      itemProperties: ['title', 'description'], // Die Klasse AppointmentTitle.java aus dem backend kann hier nachgeschaut werden, wir interessieren uns für title und description
      csvTableHeaders: [$t("appointmentTitle.title"), $t("appointmentTitle.descriptionAppointment")] // Übersetzungen der Tabellenspalte, die angezeigt werden sollen
      badgeApi: this.api+"/batch" // Backend url of batch upload (post)
    }
  },
  mounted() {
    i18n.locale = this.locale; 
  },
  watch: {
    locale: function (val) {
      i18n.locale = val;
    }
  },
  methods: {
  // 4 Diese Methode ruft `loadData()` aus der tableTemplate.vue auf
    refreshTable() { 
      this.$refs.appointmentTable.loadData();
    }
  }
}
</script>
````

Schritte:
1. Wir müssen der Komponente sagen, welche Felder aus der CSV-Datei in eine JSON-Datei extrahiert werden sollen. Das können wir über eine Variable in `data()` lösen.
2. Der CSV-Import zeigt eine Tabelle an, wir können hier die Überschrift festlegen.
3. Wir benötigen einen Endpunkt, um unsere Termintitel hochladen zu können. Normalerweise ist dies die Standard-API mit ``/batch``. 
4. Es wird eine Methode erstellt, die die Tabelle neu laden soll. Refresh wird getriggert, sobald der Upload der CSV-Datei erfolgreich war. Wir können hier die Methode ``loadData()`` aus dem ``tableTemplate`` nutzen. **WICHTIG!**: ``ref`` in ``<table-template>`` nicht vergessen!
5. Die Hilfetexte werden als b-collapse dargestellt und erscheinen, bevor die Datei importiert werden soll. Als Text kann wieder ein i18n verwendet werden.
6. token-based und authorization token werden bentötigt. Diese können von Keycloak über cURL oder Postman bezogen werden (zB .../realms/UCT/protocol/openid-connect/token). Endpunkt ist die im backend hinterlegte ``keycloak.auth-server-url``.