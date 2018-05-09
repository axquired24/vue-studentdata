<template>
    <ul class="nav flex-column">
        <li
        class="nav-item"
        v-for="nav in navs"
        :key="nav.id"
        >
            <a
            class="nav-link"
            :href="nav.link"
            >
                {{ nav.name }}
            </a>
        </li>
    </ul>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SideNav',
  data: function () {
      return {
          navs: [
            {
                id: 'home',
                name: 'Home',
                link: './#/'
            },
            {
                id: 'about',
                name: 'About',
                link: './#/profile'
            },
            {
                id: 'data',
                name: 'Table Data',
                link: './#/tabledata'
            },
            {
                id: 'chart',
                name: 'Chart',
                link: './#/'
            }
          ]
      }
  }
}
</script>
