<template>
<div>
  <b-btn v-b-modal.modalPopover>Show Modal</b-btn>
  <b-modal id="modalPopover" title="Modal with Popover" ok-only>
    <p>
      This
      <b-btn v-b-popover="'Popover inside a modal!'" title="Popover">
        Button
      </b-btn>
      triggers a popover on click.
    </p>
    <p>
      This <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a>
      will show a tooltip on hover.
    </p>
  </b-modal>
</div>

<!-- modal-popover.vue -->
</template>


<style>
#navbar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
