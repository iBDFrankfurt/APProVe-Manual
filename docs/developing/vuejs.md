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
          :csv-labels=""
          :csv-fields=""
          :file-name=""
          sort-by=""
          :records-per-page=""
          @open-modal=""
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
  ...
    <!--  Falls CSV-Importe gewünscht sind, muss die Komponente csv-import eingebunden werden  -->
    <csv-import
        :item-properties="itemProperties"  <!-- 1 Variable in data() -->
        :table-headers="csvTableHeaders" <!-- 2 Variable in data() -->
        :add-multiple-url="badgeApi" <!-- 3 Variable in data() -->
        :locale="locale" <!-- Wir erhalten eine locale bereits über die props, diese kann hier wieder verwendet werden-->
        @refresh="refreshTable" <!-- 4  Wir erstellen eine Methode, die die Tabelle nach dem importieren neu läd -->
        show-import <!-- 5 Wir erlauben einen Import der Termintitel -->
        :show-help="false" <!-- 5 Wir benötigen keinen Text als Hilfe -->
        help-text=""
        :authorization-header="authorizationHeader" <!-- 6 Die Abfrage benötigt ein Bearer token -->
        token-based
        :component-name="componentName" <!-- 7 Aussagekräftiger Name, wird für ID's verwendet -->
    ></csv-import>
    ...
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
      csvTableHeaders: [$t("appointmentTitle.title"), $t("appointmentTitle.descriptionAppointment")], // Übersetzungen der Tabellenspalte, die angezeigt werden sollen
      badgeApi: this.api+"/batch", // Backend url of batch upload (post)
      componentName: "csv-import-appointment-title" // 7
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

#### Schritte
1. Wir müssen der Komponente sagen, welche Felder aus der CSV-Datei in eine JSON-Datei extrahiert werden sollen. Das können wir über eine Variable in `data()` lösen.
2. Der CSV-Import zeigt eine Tabelle an, wir können hier die Überschrift festlegen.
3. Wir benötigen einen Endpunkt, um unsere Termintitel hochladen zu können. Normalerweise ist dies die Standard-API mit ``/batch``. 
4. Es wird eine Methode erstellt, die die Tabelle neu laden soll. Refresh wird getriggert, sobald der Upload der CSV-Datei erfolgreich war. Wir können hier die Methode ``loadData()`` aus dem ``tableTemplate`` nutzen. **WICHTIG!**: ``ref`` in ``<table-template>`` nicht vergessen!
5. Die Hilfetexte werden als b-collapse dargestellt und erscheinen, bevor die Datei importiert werden soll. Als Text kann wieder ein i18n verwendet werden.
6. token-based und authorization token werden benötigt. Diese können von Keycloak über cURL oder Postman bezogen werden (zB .../realms/UCT/protocol/openid-connect/token). Endpunkt ist die im backend hinterlegte ``keycloak.auth-server-url``.


### 4. **Schritt: Template Properties für table-template befüllen**

````vue
<template>
    ...
    <div class="col-sm-12">
      <table-template
          ref="appointmentTable"
          :component-name="componentName-'table'"
          :authorization-header="authorizationHeader"
          token-based
          :locale="locale"
          :fields="fields" <!-- 1 Variable in data() Welche Felder in der Tabelle angezeigt werden sollen. Kann in AppointmentTitle.java im backend nachgeschaut werden. -->
          :api="api" <!-- 2 Backend Aufruf, die Such und Sortierparameter werden automatisch erzeugt -->
          @table-loaded="tableLoaded" <!-- 3 Hier kann eine Funktion angegeben werden, die ausgeführt wird, wenn die Tabelle geladen wurde -->
          :csv-labels="csvLabels" <!-- 4 --> 
          :csv-fields="csvFields" <!-- 4 -->
          :file-name="fileName" <!-- 4 -->
          sort-by="title" <!-- 5 Nach welchem Attribut die Tabelle initial sortiert werden soll -->
          :records-per-page="10" <!-- 5 Wieviele Items pro Seite in der Tabelle angezeigt werden -->
          @open-modal=""
          :modal-id=""
          :modal-data=""
          :mode=""
          :modal-items=""
          :modal-infos=""
          :needs-info=""
          :needs-resource=""
      ></table-template>
    </div>
    <div v-if="tableLoaded">  <!-- 3 Zum Beispiel eine weitere Komponente, die darauf wartet, dass die Tabelle geladen ist -->
      Table Loaded!
    </div>
  ...
</template>
<script>
import i18n from "../../i18n";
import CsvImport from "../template/csvImport.vue";
import TableTemplate from "../template/tableTemplate.vue";
import TableUtilities from "../../utils/TableUtilities"; // 1
import moment from "moment"; // 4
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
    api: {          
      type: String,
      required: true
    },
    authorizationHeader: {   
      type: String,
      required: false,
      default: null
    },
    tokenBased: {     
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
     ...
      componentName: "import-appointment-title",
      fields: [ // 1 
        {
          key: "id",
          label: this.$t("samples.id"),
          sortField: "id",
          visible: false,
          sortable: true
        },
        {
          key: "title",
          label: this.$t("appointmentTitle.title"),
          sortField: "title",
          formatter: (value) => {
            return TableUtilities.getBadgeLabelColor(value, "info", null);
          },
          visible: true,
          sortable: true
        },
        {
          key: "description",
          label: this.$t("appointmentTitle.descriptionAppointment"),
          sortField: "description",
          visible: true,
          sortable: true
        },
        {
          key: "createdAt",
          label: this.$t("projectSubmission.services.createdAt"),
          sortField: "createdAt",
          formatter: (value) => {
            return TableUtilities.formatDate(value);
          },
          visible: true,
          sortable: true
        },
        {
          key: "updatedAt",
          label: this.$t("projectSubmission.services.updatedAt"),
          sortField: "updatedAt",
          formatter: (value) => {
            return TableUtilities.formatDate(value);
          },
          visible: true,
          sortable: true
        },
        {
          key: "__slot:actions",
          label: this.$t("projectSubmission.services.actions"),
          visible: true
        }
      ],
      tableLoaded: false, // 3,
      csvLabels: {      // 4
          id: "id",
          title: "title",
          description: "description",
          createdAt: "createdAt",
          updatedAt: "updatedAt"
       },
       csvFields: ["id", "title", "description", "createdAt", "updatedAt"], // 4
       fileName: "exported_appointment_titles_" + moment().format("DD.MM.YYYY HH:mm") + ".csv",  // 4
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
    refreshTable() { 
      this.$refs.appointmentTable.loadData();
    },
    // 3
    tableLoaded() {
      this.tableLoaded = true;
    }
  }
}
</script>
````

#### Schritte
1. Die Tabelle benötigt Felder, die das im Backend aufgerufene Object anzeigt. Die Felder sind dabei die Attribute der ``@Entity``-Class im Backend. Die Felder bestehen aus folgenden Attributen :
   1. ``key``: Attribut im Java-Object, zB Id oder description
   2. ``label``: Spaltenüberschrift im Header
   3. ``sortField``: nach welchem Attribut im Java-Object gesucht werden soll. 
   4. ``sortable``: ob das Attribut suchbar sein soll.
   5. ``visible``: ob das Attribut in der Tabelle angezeigt werden soll. Dies kann in den Einstellungn über der Tabelle (ListSettings) ein und ausgeschaltet werden.
   6. ``formatter``: Eine Funktion, die ein Attribut anpassen kann, wird ausgeführt bevor die Spalte angezeigt wird. Zum Beispiel ein Datum umwandeln. Vorgefertigte Funktionen können in ``TableUtilities.js`` verwendet werden.
2. Wir können die ``api`` aud den Props verwendent. Die Table Komponente erstellt die Such und Sortierparameter (`sort, per_page, page, filter`) automatisch.
3. Die Tabelle gibt ein Feedback zurück, sobald diese geladen wurde. Wir verwenden in diesem einfachen Beispiel eine Variable die darauf überprüft, ob die Tabelle fertig geladen wurde. Es kann aber auch für Charts verwendet werden.
4. Ähnlich wie beim ``csvImport`` wird hier der CSV-Export erzeugt. Es kann abgegeben werden, welche Attribute exportiert werden sollen, und wie die Spalten heißen. **!WICHTIG!** Die Spaltennamen müssen gleich heißen, wie im Import. Siehe [3.1](#3-schritt-template-properties-für-csv-import-befüllen)
   1. ``csv-fields``: Felder innerhalb des Json-Objekts, das Sie exportieren möchten. Wenn keine Angabe gemacht wird, werden alle Eigenschaften des Json-Objekts exportiert. Verwenden Sie die Funktion, um die Daten zu filtern und nur die gewünschten Eigenschaften zu erhalten.
   2. ``csv-labels``: Legen Sie die Beschriftung für die Tabellenspalten fest.
   3. ``file-name``: Name der exportierten CSV-Datei
5. Sie können angeben, nach welcher ``sortable`` Spalte initial sortiert werden soll und wie viele Items angezeigt werden sollen in der Tabelle.

### 5. **Schritt: Modal für View und Delete Mode erstellen**

````vue
<template>
  ...
    <div class="col-sm-12">
      <table-template
          ref="appointmentTable"
          :component-name="componentName-'table'"
          :authorization-header="authorizationHeader"
          token-based
          :locale="locale"
          :fields="fields"
          :api="api"
          @table-loaded="tableLoaded"
          :csv-labels="csvLabels" 
          :csv-fields="csvFields" 
          :file-name="fileName" 
          sort-by="title"
          :records-per-page="10"
          @open-modal=""
          :modal-id="viewAndDeleteModalId" <!-- 1 -->
          :modal-data="data" <!-- 1 -->
          :mode="mode" <!-- 1 -->
          :modal-resources="modalResources" <!-- 2 -->
          :modal-infos="" 
          :needs-info="true"  <!-- 2 -->
          :needs-resource="true" <!-- 2 -->
      ></table-template>
    </div>
...
</template>
<script>
...
import { MODE } from "../../utils/tableMode"; // 1
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
    api: {          
      type: String,
      required: true
    },
    authorizationHeader: {   
      type: String,
      required: false,
      default: null
    },
    tokenBased: {     
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      ... 
       data: {}, // 1
       viewAndDeleteModalId: this.componentName + "-view-modal",  // 1
       modalItems: [      // 2
        {
           key: 'id',
           label: this.$t('list.id'),
           formatter: 'badge-info'
        },
        {
           key: 'title',
           label: this.$t('appointmentTitle.title')
        },
        {
           key: 'description',
           label: this.$t('appointmentTitle.descriptionAppointment')
        }
       ], 
       modalResources: [
         {
           text: this.$t("projectSubmission.clinics.connectedPersons"),
           propertyName: "clinicPersons",
           highlightFilter: ['name', 'description'],
           sortParams: ['name', 'description'],
           itemNames: [this.$t('realmAdministration.connectedService'), 'Beschreibung'],
           sortDirection: "asc",
           sortProperty: "name"
         }
     ]
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
    ...
    // 1
    showModal(mode, data) {
      if (data !== null) {
        this.data = Object.assign(data, {}); // Kopiert die Daten der angeklickten Spalte
      }
      this.mode = mode;
      // 1
      if(this.mode === MODE.VIEW || this.mode === MODE.DELETE) {
        this.$bvModal.show(this.viewAndDeleteModalId);
      }
    }
  }
}
</script>
````

#### Schritte
1. Ein View und Delete Modal wird automatisch erstellt, dafür müssen einige Dinge vorher definiert werden.
   1. ``modal-id``: gibt die id des modals an zum Anschauen und Löschen von Objekten
   2. ``data``: Gibt die Daten der angeklickten Spalte an das Modal über ``this.data = Object.assign(data, {});``
   3. ``mode``: view oder delete
2. Die Ansicht für das View/Delete-Modal benötigt die Objekt-Attribute aus der ``AppointmentTitle.class`` im Backend.
   1. modalItems = Besteht aus einem Object Array mit den Feldern:
      1. ``key``: Wie bei den `fields` in der Tabelle. Beschreibt die Attribute  der ``AppointmentTitle.class``
      2. ``label``: Wie bei den `fields` in der Tabelle. Beschreibt die Überschrift.
      3. ``formatter``: Gibt an, wie die Zeile angezeigt werden soll. Bisher implementiert sind:
         - ``badge-info``: Ruft die Funktion TableUtilities.getBadgeLabelColor(property, "info") auf
         - ``date``: Ruft die Funktion TableUtilities.formatDate(property) auf
         - ``icon``: Ruft die Funktion TableUtilities.getBadgeLabelColor(property, "info", property+' fa-2') auf
   2. ``needs-info``: Gibt an, ob ``createdAt``, ``createdBy``, ``updatedAt`` und ``lastModifiedBy`` angezeigt werden sollen.
   3. ``needs-resource``: Gibt an, ob das Object aus dem Backend verknüpfte Elemente hat. Zum Beispiel die participants in project.
   4. ``modal-resources``: Verknüpfte Elemente des Objects aus dem Backend. Benötigt folgende Informationen
      1. ``text``: Angezeigter Text für die verknüpften Elemente im Modal.
      2. ``propertyName``: Object.property. Zum Beispiel ``participants`` in Project.class
      3. ``highlightFilter``: Die Verknüpften Elemente werden als Tabelle angezeigt, hier kann festgelegt werden, welche Items in der Tabelle hervorgehoben werden sollen.
      4. ``sortParams``: Legen Sie fest, welche Properties durchsuchbar sein sollen. Zum Beispiel ``firstName`` bei den ``participants``.
      5. ``itemNames``: Tabellenüberschriften
      6. ``sortDirection`` : Initiale Sortierung ``asc`` oder ``desc``
      7. ``sortProperty``: Welche Spalte initial sortiert werden soll

### 6. **Schritt: Modal für Add und Edit Mode erstellen**
Da diese beiden Modals eine eigene Validierung benötigen, sollten diese Modals per Hand selbst erstellt werden.

````vue
<template>
  ...
    <div class="col-sm-12">
      <table-template
         ...
      ></table-template>
    </div>
      <appointment-title-modal
           modal-size="xl"
           :modal-id="addAndEditModalId"
           :data="data"
           :title="$tc('biobankDates.addHeader')"
           :description="$tc('biobankDates.addDescription')"
           :mode="mode"
           :authorization-header="authorizationHeader"
           token-based
           @submit-data="submit"
      ></appointment-title-modal>
</template>
<script>
...
import { MODE } from "../../utils/tableMode";
import AppointmentTitleModal from "../modals/AppointmentTitleModal"; // 1
export default {
  name: "AdminAppointmentTitle",
  components: {
    CsvImport,
    TableTemplate,
    AppointmentTitleModal // 1
  },
  props: { 
    locale: {
      type: String
    },
    api: {          
      type: String,
      required: true
    },
    authorizationHeader: {   
      type: String,
      required: false,
      default: null
    },
    tokenBased: {     
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      ... 
       data: {},
       viewAndDeleteModalId: this.componentName + "-view-modal",
       addAndEditModalId: this.componentName + "-add-modal" // 1
     
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
    ...
    // 1
    showModal(mode, data) {
      if (data !== null) {
        this.data = Object.assign(data, {}); // Kopiert die Daten der angeklickten Spalte
      }
      this.mode = mode;
      if(this.mode === MODE.VIEW || this.mode === MODE.DELETE) {
        this.$bvModal.show(this.viewAndDeleteModalId);
      }
      // 1 
      if(this.mode === MODE.EDIT || this.mode === MODE.ADD) {
         this.$bvModal.show(this.addAndEditModalId);
      }
    }
  }
}
</script>
````

#### Schritte
1. Das Modal ``AppointmentTitleModal`` muss zunächst selbst erstellt werden, hierfür kann bei bereits vorhandenen Modals nachgeschaut werden. Zum Beispiel ``modals/AdminBiobankDateModal.vue``.
   1. Anschließend importieren wir das Modal in den components und fügen es im ``<template>`` ein. jetzt gilt es, die props auszufüllen. Dazu können bereits vorhandene Daten benutzt werden, zB ``data`` oder ``token-based``.
   2. In der ``showModal`` Methode wird ein weitere Aufruf hinzugefügt ``this.$bvModal.show(this.addAndEditModalId);`` um das Modal zu öffnen.


### Komplettes Beispiel

````vue
<template>
  <div id="biobankDates">
    <div class=" pt-3">
      <div class="" id="appointment" role="tabpanel" aria-labelledby="appointment-home-tab">
        <div class="row mt-2">
          <div class="col-md-12">
            <h3>
              {{ $t("biobankDates.header") }}
            </h3>
            <p>
              {{ $t('biobankDates.description') }}
            </p>
          </div>
        </div>
        <csv-import
          :item-properties="['date', 'title', 'remark', 'icon']"
          :table-headers="[$t('biobankDates.date'),$t('biobankDates.title'),$t('biobankDates.remark'), 'Icon']"
          :add-multiple-url="biobankDatesApi+'/batch'"
          :locale="locale"
          @refresh=""
          help-text=""
          show-import
          :show-help="false"
          :authorization-header="authorizationHeader"
          component-name="admin-biobank-dates"
          token-based
        ></csv-import>
        <div class="col-sm-12">
          <table-template
            ref="biobankDatesTable"
            component-name="admin-biobank-dates"
            :authorization-header="authorizationHeader"
            token-based
            :locale="locale"
            :fields="fieldsDates"
            :api="biobankDatesApi"
            @table-loaded="transform"
            @open-modal="showModal"
            :csv-labels="csvLabels"
            :csv-fields="csvFields"
            :file-name="fileName"
            sort-by="date"
            :records-per-page="10"
            :modal-id="viewAndDeleteModalId"
            :modal-data="data"
            :mode="mode"
            :modal-items="modalItems"
            :modal-resources="modalResources"
            :needs-info="false"
            :needs-resource="true"
          ></table-template>
          <admin-biobank-date-modal
            modal-size="xl"
            :modal-id="addAndEditModalId"
            :data="data"
            :title="$tc('biobankDates.addHeader')"
            :description="$tc('biobankDates.addDescription')"
            :mode="mode"
            :appointment-url="listAppointmentTitleUrl"
            :authorization-header="authorizationHeader"
            token-based
            @submit-data="submit"
          ></admin-biobank-date-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminBiobankDateModal from "../modals/AdminBiobankDateModal";
import { tableHttpService } from "../../services/TableHttpService";
import { MODE } from "../../utils/tableMode";
import i18n from "../../i18n";
import moment from "moment";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
import TableUtilities from "../../utils/TableUtilities";
import CsvImport from "../template/csvImport2.vue";
import TableTemplate from "../template/tableTemplate.vue";
import ModalObjectViewAndDeleteTemplate from "../modals/template/ModalObjectViewAndDeleteTemplate.vue";
import Http from "../../utils/Http";
export default {
  name: "BiobankDates",
  components: {
    ModalObjectViewAndDeleteTemplate,
    AdminBiobankDateModal,
    CsvImport,
    TableTemplate,
    PieChart,
    BarChart
  },
  props: {
    biobankDatesApi: {
      type: String,
      required: true
    },
    listAppointmentTitleUrl: {
      type: Object,
      required: false
    },
    locale: {
      type: String,
      required: false
    },
    authorizationHeader: {
      type: String,
      required: false,
      default: null
    },
    tokenBased: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    i18n.locale = this.lang;
  },
  async created() {
    // Moment Locale
    moment.locale("de");
  },

  data() {
    return {
      lang: this.locale,
      mode: MODE.SEARCH,
      biobankDates: [],
      csvLabels: {
        id: "id",
        date: "date",
        title: "title",
        remark: "remark",
        icon: "icon",
        createdAt: "createdAt",
        updatedAt: "updatedAt"
      },
      csvFields: ["id", "date", "title", "remark", "icon", "createdAt", "updatedAt"],
      fileName: "exported_biobank_dates_" + moment().format("DD.MM.YYYY HH:mm") + ".csv",
      fieldsDates: [
        {
          key: "action",
          label: this.$t("projectSubmission.services.actions"),
          visible: true
        },
        {
          key: "id",
          label: this.$t("samples.id"),
          sortField: "id",
          visible: false,
          sortable: true
        },
        {
          key: "date",
          label: this.$t("biobankDates.date"),
          sortField: "date",
          visible: true,
          sortable: true,
          formatter: (value) => {
            return TableUtilities.formatDate(value);
          }
        },
        {
          key: "title",
          label: this.$t("biobankDates.title"),
          sortField: "title",
          visible: true,
          sortable: true
        },
        {
          key: "remark",
          label: this.$t("biobankDates.remark"),
          sortField: "remark",
          visible: true,
          sortable: true
        },
        {
          key: "icon",
          label: "Icon",
          sortField: "icon",
          formatter: (value) => {
            return TableUtilities.getBadgeLabelColor(value, "info", value);
          },
          visible: true,
          sortable: true
        },
        {
          key: "createdAt",
          label: this.$t("projectSubmission.services.createdAt"),
          sortField: "createdAt",
          formatter: (value) => {
            return TableUtilities.formatDate(value);
          },
          visible: true,
          sortable: true
        },
        {
          key: "updatedAt",
          label: this.$t("projectSubmission.services.updatedAt"),
          sortField: "updatedAt",
          formatter: (value) => {
            return TableUtilities.formatDate(value);
          },
          visible: true,
          sortable: true
        }
      ],
      biobanksLoaded: false,
      filter: "",
      modalResources: [
        // {
        //   text: this.$t("projectSubmission.clinics.connectedPersons"),
        //   propertyName: "clinicPersons",
        //   highlightFilter: ['name', 'description'],
        //   sortParams: ['name', 'description'],
        //   itemNames: [this.$t('realmAdministration.connectedService'), 'Beschreibung'],
        //   sortDirection: "asc",
        //   sortProperty: "name"
        // }
      ],
      modalItems: [
        {
          key: 'title',
          label: this.$t('biobankDates.title'),
          formatter: 'badge-info'
        },
        {
          key: 'date',
          label: this.$t('biobankDates.date'),
          formatter: 'date'
        },
        {
          key: 'remark',
          label: this.$t('biobankDates.remark')
        },
        {
          key: 'icon',
          label: 'Icon',
          formatter: 'icon'
        }
      ],
      data: {},
      viewAndDeleteModalId: "admin-biobank-dates-view-modal",
      addAndEditModalId: "admin-biobank-dates-add-modal"
    };
  },
  watch: {
    lang: function (val) {
      i18n.locale = val;
    }
  },
  computed: {},

  methods: {
    transform(data) {
      this.biobankDates = Object.assign(data, {});
      this.biobanksLoaded = true;
    },
    showModal(mode, data) {
      if (data !== null) {
        this.data = Object.assign(data, {});
      }
      this.mode = mode;
      if(this.mode === MODE.EDIT || this.mode === MODE.ADD) {
        this.$bvModal.show(this.addAndEditModalId);
      }
      if(this.mode === MODE.VIEW || this.mode === MODE.DELETE) {
        this.$bvModal.show(this.viewAndDeleteModalId);
      }
    },
    submit(data, mode) {
      this.mode = mode;
      if (this.mode === MODE.ADD) {
        tableHttpService.postData(this.biobankDatesApi, data, this.authorizationHeader).then((response) => {
          if (response.status === 201) {
            this.$bvModal.hide(this.addAndEditModalId);
            Http.successToast(this.$t("toast.created"));
            this.$refs.biobankDatesTable.loadData();
          }
        });
      }
      if (this.mode === MODE.EDIT) {
        tableHttpService.patchData(this.biobankDatesApi, data.id, data, this.authorizationHeader).then((response) => {
          if (response.status === 200) {
            this.$bvModal.hide(this.addAndEditModalId);
            Http.successToast(this.$t("toast.updated"));
            this.$refs.biobankDatesTable.loadData();
          }
        });
      }
    },
    refreshTable() {
      this.$refs.biobankDatesTable.loadData();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

````