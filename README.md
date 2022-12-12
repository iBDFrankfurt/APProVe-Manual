# Manual-Service

# Usage
Master branch.
When pushing this repository, the pipeline automatically creates a docker image for production in https://gitlab.proskive.de/uct/open-approve

# Installing

- Make sure you have a new version of Node installed
- Download the code by zip or fork
- Run the command npm install

# Development server:

- npm run docs:dev
- wait a bit, till bundle finished
- You can view the development server at `http://localhost:443/manual/`.

## Adding new pages
When adding new pages remember to link them. This can be done in the ``docs/.vuepress/sidebar/de.ts`` file or in the navbar at
``docs/.vuepress/navbar/de.ts``.
Images need to be put in the folder ``docs/.vuepress/public/img``.

Every Folder needs a ``README.md`` file containing all the files in this folder. The ``README.md``-File acts as an overview page and is required.
For example the folder ``docs/updates/README.md`` has all files in this folder linked.

