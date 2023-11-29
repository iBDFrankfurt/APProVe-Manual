# Manual-Service

# Usage
Master branch.
When pushing this repository, the pipeline automatically creates a docker image for production in https://gitlab.proskive.de/uct/open-approve

# Installing

- Make sure you have a new version of Node installed
- Download the code by zip or fork
- Run the command npm install

# Development server:

- ``npm run docs:dev``
- wait a bit, till bundle finished
- You can view the development server at `http://localhost:443/manual/`.

## Adding new pages
When adding new pages remember to link them. This can be done in the ``docs/.vuepress/sidebar/de.ts`` file or in the navbar at
``docs/.vuepress/navbar/de.ts``.


Every Folder needs a ``README.md`` file containing all the files in this folder. The ``README.md``-File acts as an overview page and is required.
For example the folder ``docs/updates/README.md`` has all files in this folder linked.

## Adding new images
Place your images inside the folder ``docs/.vuepress/public/img/``.

## Generating Site-Overview for VueJS
Just run the javascript file ``get-all-pages.js`` from the base folder. This will generate a ``site-list.json`` which can be exported to the vuejs-frontend. 
You should run it everytime you change the layout or add new sites that should be used in the vuejs-frontend.