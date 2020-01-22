<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/charcuterie-logo.png" alt="logo">
        <h1>charcuterie</h1>
      </a>
      <div class="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to='/'>
            Home
          </router-link>
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            Create
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/">
              To-Dos
            </a>
            <a class="navbar-item" href="/">
              Notes
            </a>
            <a class="navbar-item" href="/">
              Links
            </a>
            <a class="navbar-item" href="/">
              Videos
            </a>
            <a class="navbar-item" href="/">
              Progress
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a id="button__all-boards" class="button">
                  <router-link to ='/boards'>
                    <span>
                      All Boards
                    </span>
                  </router-link>
              </a>
            </p>
            <p class="control">
              <a id="button__profile" class="button">
                <span>Profile</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  // need to add functionality for navbar burger for mobile
}
</script>


<style scoped>

.navbar {
  margin-top: 1%;
  background: none;
}
.navbar-item img {
  max-height: 2.5rem;
  margin-right: 5%;
}

.navbar-item h1 {
  font-weight: bold;
}

.navbar-link::after {
  border-color: #A64EA0;
}

a.navbar-item:hover,
a.navbar-link:hover {
  color: #F29BD4;
}

#button__all-boards {
  background: #F2BBE3;
}
#button__profile {
  background: #532559;
  color: white;
}
</style>
