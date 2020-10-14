<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~/assets/nuxxt.png" class="logo image is-96x96">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <b-icon icon="home" type="is-primary" />&nbsp;
            Home
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Find a Lawyer
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Some things here
              </a>
              <a class="navbar-item">
                Some things here
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Services
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Some things here
              </a>
              <a class="navbar-item">
                Some things here
              </a>
            </div>
          </div>
          
          <a class="navbar-item">
            Knowledge
          </a>
          <a class="navbar-item">
            About us
          </a>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field has-addons">
              <div class="control">
                <input class="input" type="text" placeholder="Find a repository">
              </div>
              <div class="control">
                <a class="button">
                  <b-icon icon="magnify" type="is-primary" />
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-item">
            <a class="button btn--login">
              Login
            </a>
          </div>
          
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              EN
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                EN
              </a>
              <a class="navbar-item">
                VI
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns mt-18">
      <aside class="section has-background-white" style="width: 230px; height: 100%; position: fixed; top: 86px; left: 0;">
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key" >
            <a :href="(`#${item.to.name}`)" :class="(item.class)" :id="(`link-${item.to.name}`)"> {{ item.title }} </a>
          </li>
        </ul>
      </aside>

      <div class="container column is-offset-2 is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Popular Practive Areas', class: 'is-active', to: { name: 'popular_practice_areas' } },
          { title: 'Business', to: { name: 'business' } },
          { title: 'Criminal', to: { name: 'criminal' } },
          { title: 'Civil Claim', to: { name: 'civil_claim' } },
          { title: 'Family', to: { name: 'family' } },
          { title: 'Personal Injury', to: { name: 'personal_injury' } },
          { title: 'Real Estate', to: { name: 'real_estate' } },
          { title: 'Wilis and Probate', to: { name: 'wilis_and_probate' } },
          { title: 'Other', to: { name: 'other' } },
        ]
      }
    }
  }
</script>

<style>
  .logo{max-height: 100% !important; height: 80; width: auto}
  .is-active{color: #002366 !important; background-color: white !important; font-weight: 600 !important}
  .btn--login{background-color: #002366; color: white !important; transition: .5s}
  .btn--login:hover{background-color: #003aa7;}
  .navbar{border-bottom: 1px solid black}
  .mt-18{margin-top: 6rem}
</style>
