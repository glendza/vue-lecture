<template>
  <div class="layout">
    <nav class="nav-menu">
      <router-link to="/">Đesi svijete</router-link>
      <router-link to="/components-intro">Components Intro</router-link>
      <router-link to="/oh-god-why">Components - JSX/TSX</router-link>
      <router-link to="/components-data-section"
        >Components - "data" section</router-link
      >
      <router-link to="/components-props-section"
        >Components - "props" section</router-link
      >
      <router-link to="/components-computed-section"
        >Components - "computed" section</router-link
      >
      <router-link to="/components-watch-section"
        >Components - "watch" section</router-link
      >
      <router-link to="/components-refs"
        >Components - element references</router-link
      >
      <router-link to="/components-conditional-rendering"
        >Components - conditional rendering</router-link
      >
      <router-link to="/components-list-rendering"
        >Components - list rendering</router-link
      >
      <router-link to="/components-separation"
        >Components - what they're actually for</router-link
      >
      <router-link to="/components-slots">Components - slots</router-link>
      <router-link to="/components-binding"
        >Components - prop binding</router-link
      >
      <router-link to="/components-lc-hooks"
        >Components - Lifecycle hooks</router-link
      >
    </nav>
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  display: flex;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  padding: 2rem;
  white-space: nowrap;
}
.nav-menu > * {
  margin-top: 1rem;
}
.router {
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
