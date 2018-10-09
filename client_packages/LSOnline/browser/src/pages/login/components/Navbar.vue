<template>
<div class="navbar font-sans my-8 ml-8 w-auto">
  <ul class="list-reset flex text-3xl">
    <li class="mr-6 active hover">
      <a class="text-grey hover:text-white border-none" href="#">Główna</a>
    </li>
    <li class="mr-6">
      <a class="text-grey hover:text-grey border-none cursor-not-allowed" href="#">Forum</a>
    </li>
    <li class="mr-6 hover">
      <a class="text-grey hover:text-white border-none" href="#">Postacie</a>
    </li>
    <li class="mr-6">
      <a class="text-grey hover:text-grey cursor-not-allowed border-none" href="#">Znajomi</a>
    </li>
    <li class="mr-6 hover">
      <a class="text-grey hover:text-white border-none" href="#">Opcje</a>
    </li>
  </ul>
</div>
</template>

<script>


export default {
  name: "NavbarParent",
  data() {
    return {};
  }
}
</script>

<style>
</style>