<template>
	<div id="app">
<!--Menü-->
<div class="app-bar hide-for-print fixed-top" data-role="appbar" id="app_top_bar">
  <a href="notifications/"><span class="app-bar-element branding"><img src="static/img/people.png" style="width:50px;">
	<span class="badge" id="notification_icon">1</span>
</span></a>
  <span class="app-bar-divider"></span>
  <ul class="app-bar-menu">
    <li><a class="app-bar-element bg-darkCobalt" href=""><span class="mif-earth2"></span> Übersicht</a></li>
    <li><a class="app-bar-element bg-darkCobalt" href="timetracking/"><span class="mif-eur"></span> Zeiterfassung</a></li>
    <li><a class="app-bar-element bg-darkCobalt" href="overview/"><span class="mif-hour-glass"></span> Stundenübersicht</a></li>
  </ul>

  <div class="app-bar-pullbutton automatic"></div>
  <ul class="app-bar-menu place-right" data-flexdirection="reverse">
    <li><a href="" class="dropdown-toggle fg-grayLight"></a>
      <ul class="d-menu place-right" data-role="dropdown">
        <li><a href="#">Sitzung läuft ab in<br /> 5 Stunden</a></li>
        <li><a href="user/calendar/">Internetkalender</a></li>
        <li><a href="user/password/">Passwort ändern</a></li>
        <li><a href="#" v-on:click="logout">Abmelden</a></li>
      </ul>
    </li>
    <li><a class="app-bar-element place-right" href="bug/"><span class="mif-bug fg-orange"></span></a></li>
  </ul>
</div>
<div class="main-content margin10" style="margin-top: 3.5rem">
  <!--Menü Ende-->
  <router-view/>
</div>
<div class="grid no-margin bg-black hide-for-print">
  <div class="row cells2 no-margin">
    <div class="cell padding10 fg-white align-left text-small">

    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$store.dispatch('logout', {
      }).then(res => {
        this.$router.push('/')
      })
    }
  }
}
</script>
